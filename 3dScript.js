/* Файл, где идёт работа с 3д объектами и всякое такое
(убирание кнопок при взаимодействии тоже тут) */

//ну тут просто немножко объявлений переменных ну вы знаете

let description = {
    crystal: makeDescription(
        `Горный хрусталь - минерал, чистый природный диоксид кремния, бесцветная прозрачная разновидность кварца.`,
        'Твёрдость: 7',
        'Плотность: 2,6 г/см<sup>3</sup>',
        'Формула: SiO<sub>2</sub>',
        `Свойства: чистые бездефектные кристаллы горного хрусталя встречаются относительно редко и высоко ценятся.
         Практическое значение имеют кристаллы размером от 3 - 5 см. Используется для изготовления высокоточных приборов,
          кварцевых часов, высококачественных линз.`),
    calcite: makeDescription(
        `Кальцит - Название происходит от греческого слова, означающего уменьшение порошка при нагревании и относившегося
         к обожженной извести. Латинское «кальк» — известь.`,
        'Твёрдость: 3',
        'Плотность: 2,6 - 2,8 г/см<sup>3</sup>',
        'Формула: CaCO<sub>3</sub>',
        'Сингония- тригональная',
        `Свойства : разновидность кальцита- исландский шпат обладает двойным лучепреломлением.
          При сжатии -электризуется. Применяется исландский шпат для изготовления поляризационных приборов.`
    ),
    granite: makeDescription(
        `Гранит - магматическая плутоническая горная порода кислого состава нормального ряда щёлочности
        из семейства гранитов. Состоит из кварца, плагиоклаза, калиевого полевого шпата и слюд — биотита и/или мусковита.
        Граниты очень широко распространены в континентальной земной коре.`,
        'Твёрдость: 5 - 7',
        'Плотность: 2,7 г/см<sup>3</sup>',
        `Средний химический состав: <br> SiO<sub>2</sub> 68 — 73%; Al<sub>2</sub>O<sub>3</sub> 12,0 — 15,5%;
         Na<sub>2</sub>O 3,0 — 6,0%; CaO 1,5 — 4,0%; FeO 0,5 — 3,0%; Fe<sub>2</sub>O<sub>3</sub> 0,5 — 2,5%;
         K<sub>2</sub>O 0,5 — 3,0%; MgO 0,1 — 1,5%; TiO<sub>2</sub> 0,1 — 0,6%; ThO<sub>2</sub> 0,001—0,004%;
         UO<sub>2</sub> 0,0002—0,001%`.replaceAll(';', '<br>'),
        `Свойства: светло-серый гранит содержит плагиоклаз и незначительное количество шпата, розовый гранит содержит много
         калиево-натриевого шпата с незначительным количеством биотита. Гранит используется в строительстве в качестве
        облицовочного материала `
    ),
    garnierite: makeDescription(
        `Гарньерит - “никелевая зелень”, назван в честь горного инженера Гюля Гарнье, обнаружившего этот минерал,
         общее название никелевых руд.  Цвет обусловлен присутствием никеля в минеральной структуре магния. Месторождение- Урал.`,
        'Твёрдость: 2',
        'Плотность: 2,3 - 2,8 г/см<sup>3</sup>',
        'Формула: (Ni,Mg)<sub>6</sub>[(OH)<sub>8</sub>[Si<sub>4</sub>O<sub>10</sub>]',
        'Сингония - моноклинная',
        'Показатель преломления от 1,56 до 1,6',
        `Свойства: на воздухе теряет воду и может рассыпаться в порошок.
         Разлагается в тёплой соляной кислоте. Используется в никелевых сплавах.`
    ),
}
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
    let menu = document.querySelector(".menu-3d");
    menu.classList.toggle("show")
    let addButton = document.querySelector(".add-buttons");
    addButton.classList.toggle("show");
    document.querySelector('.canvas-container').appendChild(renderer.domElement);

    canvas = document.getElementsByTagName('canvas')[0];
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.position.set(0, -9, 5);
    loadTexture(texture);
    loadModel(model);
    addDescription(name);
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

function addDescription(name) {
    name = name.slice(0, name.length - 1) //agat1 -> agat
    // !!!если минералов одного типа больше 9 надо редактнуть!!!
    let infoDiv = document.querySelector('.mineral-info')
    span = infoDiv.querySelector('span');
    console.log(span)
    let ul = infoDiv.querySelector('ul');
    span.innerHTML = ''
    ul.innerHTML = ''

    if (description[name]) {
        span.innerHTML = description[name]['info'];
        ul.innerHTML = description[name]['items'];
    } else {
        span.innerHTML = "В разработке...";
        ul.innerHTML = "Это тоже в разработке..."
    }
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
    let moveButton = document.querySelector("#move-button");
    let menu = document.querySelector(".menu-3d");
    let addButton = document.querySelector(".add-buttons");

    moveButton.textContent = "Авто вращение";
    permissionControls = true;
    controls.enabled = true;
    scene.remove(object);

    texture = new THREE.Texture();
    /*обнуление нынешней текстуры, чтобы при загрузке следующего объекта
     не было кривой текстуры*/
    menu.classList.add("show")
    addButton.classList.remove("show");
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

function makeDescription(info, ...items) {
    let list = info.split(' ');
    list[0] = `<span style = "padding-left:20px">${list[0]}</span>`
    info = list.join(' ')
    li = []
    items.forEach(elem => {
        elem = `<li>${elem}</li>`;
        li.push(elem);
    });
    return {
        info: `${info}`,
        items: `${li.join('')}`
    }
}
