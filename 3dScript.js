/* Файл, где идёт работа с 3д объектами и всякое такое
(убирание кнопок при взаимодействии тоже тут) */

//ну тут просто немножко объявлений переменных ну вы знаете
let coord;
let object;
let permissionControls = true;
let animateNoUse = true;
let scene = new THREE.Scene();
scene.background = new THREE.Color(0xfbf4ea);

let ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);

let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.y = -9;
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.minDistance = 3;
controls.maxDistance = 20;
// controls.minPolarAngle = Math.PI * 1 / 4;
// controls.maxPolarAngle = Math.PI * 3 / 4;

let loading_manager = new THREE.LoadingManager();
let image_loader = new THREE.ImageLoader(loading_manager);
let obj_loader = new THREE.OBJLoader(loading_manager);

let texture = new THREE.Texture();

// Загрузка модели
function loadModel(href) {
    obj_loader.load(href, (funcObject) => { // 'objs/agat1.obj'
        funcObject.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                switch (child.material.name) {
                    case "mTexture": // material texture
                        child.material.map = texture;
                        break;
                    case "sTexture": // stand texture
                        child.material.color.setRGB(0.01, 0.01, 0.18);
                        break;
                }

                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        funcObject.scale.set(1.7, 1.7, 1.7);
        funcObject.position.set(0, 0, 0);
        funcObject.rotation.x = 20;

        object = funcObject;
        scene.add(object);
        camera.lookAt(object.position.x, object.position.y, object.position.z);
        renderer.render(scene, camera);
    });
    return object;
}

// получение текстуры
function loadTexture(href) {
    image_loader.load(href, (image) => { // 'objs/textured_output.jpg'
        texture.image = image;
        texture.needsUpdate = true;
    });
}


function main(name) {
    let model = `objs/${name}.obj`
    let texture = `textures/${name}.jpg`
    controls.enableZoom = false;
    controls.zoomSpeed = 9999;
    //отключение и последующее включение зума нужно,
    //тк controls может считать действия до main() и приближать/отдалять камеру

    coord = window.pageYOffset;
    let moveButton = document.querySelector("#move-button");
    let removeButton = document.querySelector("#remove-button");
    let addButton = document.querySelector(".add-buttons");
    moveButton.classList.toggle("show");
    removeButton.classList.toggle("show");
    addButton.classList.toggle("show");
    document.querySelector(".canvas-container").classList.remove("show");
    document.querySelector('.canvas-container').appendChild(renderer.domElement);

    canvas = document.getElementsByTagName('canvas')[0];
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.position.set(0, -9, 5);
    loadTexture(texture);
    loadModel(model);
    if (animateNoUse) {
        animate();
        animateNoUse = false;
        window.scrollTo(0, 0)
        setTimeout(() => {
            controls.enableZoom = true;
            controls.zoomSpeed = 1;
        }, 1000);
        return;
    }
    /* Данный иф нужен, чтобы объекты не начинали вращаться быстрее.
    Иначе бы каждый раз использовался animate() и в секунду был бы
    поворот на 0.005 * n радиан, где n - количество использования main()*/
    render();
    window.scrollTo(0, 0);
    setTimeout(() => {
        controls.enableZoom = true;
        controls.zoomSpeed = 1;
    }, 1000);
}
function toggleControls() {
    button = document.querySelector("#move-button");
    controls.enabled = !permissionControls;
    permissionControls = !permissionControls;
    if (permissionControls) {
        button.textContent = "Авто вращение";
        return;
    }
    button.textContent = "Вращать самому";
}
// удаляет объект и скрывает всякое
function deleteScene() {
    let canvas = document.querySelector(".canvas-container");
    let moveButton = document.querySelector("#move-button");
    let removeButton = document.querySelector("#remove-button");
    let addButton = document.querySelector(".add-buttons");

    moveButton.textContent = "Авто вращение";
    permissionControls = true;
    controls.enabled = true;
    scene.remove(object);

    texture = new THREE.Texture();
    /*обнуление нынешней текстуры, чтобы при загрузке следующего объекта
     не было кривой текстуры*/
    //славно бы было сделать добавление объекта после всех действий, но лан
    canvas.classList.toggle("show");
    moveButton.classList.toggle("show");
    removeButton.classList.toggle("show");
    addButton.classList.toggle("show");
    window.scrollTo(0, coord);
}

function animate() {
    requestAnimationFrame(animate);
    if (!permissionControls) {
        object.rotation.y -= 0.005;
    }
    render();
    if (scene.children.length > 2) {
        scene.remove(scene.children[1]);
    }
    controls.update();
}

function render() {
    renderer.render(scene, camera);
}
