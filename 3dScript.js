/* Файл, где идёт работа с 3д объектами и всякое такое
(убирание кнопок при взаимодействии тоже тут) */

//ну тут просто немножко объявлений переменных ну вы знаете

let description = {
    agat: makeDescription(
        `Агат - это разновидность халцедона, который является разновидностью кварца.
         Он либо хорошо просвечивает, либо непрозрачен. Может быть различного цвета - красный, оранжевый, жёлтый,
         зелёный, голубой, синий, фиолетовый, чёрный, серый. Полосатость агатов образуется в результате
         периодического осаждения вещества из растворов, диффундирующих через коллоидную среду.
         Название происходит от греческого названия реки на острове Сицилия.`,
        'Твёрдость: 6,5 - 7',
        'Плотность: 2,6 г/см<sup>3</sup>',
        'Формула: SiO<sub>2<sub>',
        `Свойства: Структура, в отличие от кварца, неоднородная и с большим количеством примесей.
         Блеск на изломе тусклый жирный либо матовый, а у полированного камня - стеклянный.
         Агат отличается устойчивостью к кислотам, кроме плавиковой. Твёрдый материал, из него изготовляют лабораторную посуду,
         призмы точных весов, пестики и ступки.`
    ),
    amazonite: makeDescription(
        `Амазонит - минерал силикат, голубовато-зелёная разновидность микроклина. Калиевый шпат, иногда в состав входит натрий.
        Происхождение дано по названию реки Амазонка. Несмотря на название, камень не находят около Амазонки,
        вероятно, его спутали с каким-либо другим камнем.`,
        'Твёрдость: 6 - 6,5',
        'Плотность: 2,54 - 2,57 г/см<sup>3</sup>',
        'Формула: (K, Na) AlSi<sub>3</sub>O<sub>8</sub>',
        'Сингония - триклинная',
        `Свойства: Он имеет стеклянный блеск, некую прозрачность по краям и светло сине-зеленые цвета.
         Используется как поделочный полудрагоценный камень.`
    ),
    amethyst: makeDescription(
        `Аметист — фиолетовая, синевато-розовая или красно-фиолетовая разновидность кварца. 
         Прозрачный аметист относится к полудрагоценным камням. Название дано по греческому слову в переводе - непьяный,
         по ошибочному утверждению, что носящий этот камень никогда не опьянеет даже при невоздержанности.
         Фиолетовый цвет придают соединения марганца, титана и железа.`,
        'Твёрдость: 7',
        'Плотность: 2,63 - 2,65 г/см<sup>3</sup>',
        'Формула: SiO<sub>2</sub>',
        `Свойства: для аметиста характерна незначительная переменчивость окраски в зависимости от освещения.
         Устойчивость окраски аметистов из разных месторождений неодинакова. Встречается обычно в виде свободно сидящих в пустотах
         и жилах среди кристаллических горных пород кристаллов и их сростков. Используется как поделочный камень.`
    ),
    avachit: makeDescription(
        `Авачит - редкий минерал. Назван по названию вулкана Авачинская сопка.
         Породы выносятся рекой, берущей начало на северо-западном склоне вулкана. Зелёные кристаллы - оливины,
         также содержит полевой шпат, плагиоклазы и вкрапления чёрного алмаза карбонадо.
         В мире всего три месторождения этого минерала, Камчатка - одно из них.`
    ),
    aventurine: makeDescription(
        `Авантюрин - мелкозернистая разновидность кварца. Представляет собой тонко- или мелкозернистую горную породу,
         состоящую из кварца и мелких рассеянных включений. Название авантюрин происходит от итальянского слова "случай".
         Полагают, что получен случайно, в процессе варки стекла в Венеции.`,
        'Твёрдость: 7',
        'Плотность: 2,6 г/см<sup>3</sup>',
        'Формула: SiO<sub>2</sub>',
        `Свойства: хорошо полируется. Окраска авантюринов меняется в зависимости состава - включений и примесей -,
          обычно они окрашены в красно-бурый, коричневатый, серо-жёлтый, зелёный цвета. Характерный искристо-золотистый отлив
          и мерцающий блеск авантюрину придают включения разных минералов, а также трещинки, заполненные гидроксидами железа.`
    ),
    belemnite: makeDescription(
        `Белемнит или Белемнитид - отряд вымерших головоногих моллюсков из подкласса двужаберных.
         Наиболее часто окаменелые остатки белемнитов встречаются в морских юрских и меловых отложениях. 
         На сайте показаны белемниты с Урала, найденные на берегу реки Печоры. Народное название - чёртовы пальцы.`
    ),
    calcite: makeDescription(
        `Кальцит - Название происходит от греческого слова, означающего уменьшение порошка при нагревании и относившегося
         к обожженной извести. Латинское «кальк» — известь.`,
        'Твёрдость: 3',
        'Плотность: 2,6 - 2,8 г/см<sup>3</sup>',
        'Формула: CaCO<sub>3</sub>',
        'Сингония- тригональная',
        `Свойства : разновидность кальцита - исландский шпат обладает двойным лучепреломлением (явление раздвоение луча).
         При сжатии - электризуется. Применяется исландский шпат для изготовления поляризационных приборов.`,
        `<div>
           <div class="burger" onclick="burgerToggle(this)" style="width: 13rem; display: flex; align-items: center;">
            <span>Двойное лучепреломление:</span>
            <div style=" display: flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                    class="open-info">
                    <path
                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
            </div>
        </div>
    </div>
    <div class="burger-target show">
        <div class = "props">
            <img src = "icons/prop_calcite1.jpg" alt = "Кальцит" onclick = "openImg(this)">
            <img src = "icons/prop_calcite2.jpg" alt = "Кальцит" onclick = "openImg(this)">
            <img src = "icons/prop_calcite3.jpg" alt = "Кальцит" onclick = "openImg(this)">
        </div>
    </div>`
    ),
    cornelian: makeDescription(
        `Сердолик — халцедон, окрашенный в разные оттенки красного или желтовато-красного цвета,
         изредка фиолетового. Поделочный камень`,
        'Твёрдость: 6,5 - 7',
        'Плотность: 2,58 - 2,64 г/см,<sup>3</sup>',
        'Формула: MnSiO<sub>3</sub>',
        'Сингония - мелкокристаллические агрегаты'

    ),
    crystal: makeDescription(
        `Горный хрусталь - минерал, чистый природный диоксид кремния, бесцветная прозрачная разновидность кварца.`,
        'Твёрдость: 7',
        'Плотность: 2,6 г/см<sup>3</sup>',
        'Формула: SiO<sub>2</sub>',
        `Свойства: чистые бездефектные кристаллы горного хрусталя встречаются относительно редко и высоко ценятся.
         Практическое значение имеют кристаллы размером от 3 - 5 см. Используется для изготовления высокоточных приборов,
         кварцевых часов, высококачественных линз.`
    ),
    desertRose: makeDescription(
        `Роза пустыни (роза песков или сахара) - разговорное название, обозначающее одну из разновидностей минерала гипс.
         Осадки уходят в песок, влага испаряется и в песке формируется кристаллический гипс как сростки линзовидных кристаллов,
        напоминающие цветок розы.   `,
        'Твёрдость: 1,5 - 2',
        'Плотность: 2,32 г/см<sup>3</sup>',
        'Формула: CaSO<sub>4</sub> • 2H<sub>2</sub>O',
        'Сингония - моноклинная',
        `Свойства: при повышенных температурах может обезвоживаться до бассанита. При обезвоживании становится белым.
         Светится в ультрафиолетовых лучах. Гипс применяется в строительстве, медицине, бумажной промышленности.`
    ),
    fluorite: makeDescription(
        `Флюорит — плавиковый шпат.  Название произошло от латинского слова - "течь", так как легко сплавляется с различными рудами.`,
        'Твёрдость: 4',
        'Плотность: 3,0 г/см<sup>3</sup>',
        'Формула: CaF<sub>2</sub>',
        'Сингония – кубическая',
        `Свойства: после нагревания камень светится в темноте. Также флуоресцирует после облучения ультра-фиолетовым светом.
         Используется для изготовления ваз, письменных приборов, шкатулок.`
    ),
    garnierite: makeDescription(
        `Гарниерит - “никелевая зелень”, назван в честь горного инженера Гюля Гарнье, обнаружившего этот минерал,
         общее название никелевых руд.  Цвет обусловлен присутствием никеля в минеральной структуре магния. Месторождение - Урал.`,
        'Твёрдость: 2',
        'Плотность: 2,3 - 2,8 г/см<sup>3</sup>',
        'Формула: (Ni,Mg)<sub>6</sub>[(OH)<sub>8</sub>[Si<sub>4</sub>O<sub>10</sub>]',
        'Сингония - моноклинная',
        'Показатель преломления от 1,56 до 1,6',
        `Свойства: на воздухе теряет воду и может рассыпаться в порошок.
         Разлагается в тёплой соляной кислоте. Используется в никелевых сплавах.`
    ),
    granite: makeDescription(
        `Гранит - магматическая плутоническая горная порода кислого состава нормального ряда щёлочности
        из семейства гранитов. Состоит из кварца, плагиоклаза, калиевого полевого шпата и слюд — биотита и/или мусковита.
        Граниты очень широко распространены в континентальной земной коре.`,
        'Твёрдость: 5 - 7',
        'Плотность: 2,7 г/см<sup>3</sup>',
        `Средний химический состав: <br> SiO<sub>2</sub> 68 — 73%; Al<sub>2</sub>O<sub>3</sub> 12,0 — 15,5%;
         Na<sub>2</sub>O 3,0 — 6,0%; CaO 1,5 — 4,0%; FeO 0,5 — 3,0%; Fe<sub>2</sub>O<sub>3</sub> 0,5 — 2,5%;
         K<sub>2</sub>O 0,5 — 3,0%; MgO 0,1 — 1,5%; TiO<sub>2</sub> 0,1 — 0,6%; ThO<sub>2</sub> 0,001 — 0,004%;
         UO<sub>2</sub> 0,0002 — 0,001%`.replaceAll(';', '<br>'),
        `Свойства: светло-серый гранит содержит плагиоклаз и незначительное количество шпата, розовый гранит содержит много
         калиево-натриевого шпата с незначительным количеством биотита. Гранит используется в строительстве в качестве
         облицовочного материала.`
    ),
    lavaStone: makeDescription(
        `Лавовый камень - образуется в результате извержения вулканов. Огненная магма, разогретая до 2500°С,
         поднимается из глубин земной коры, превращается в лаву и застывает на поверхности под воздействием воды или воздуха.`,
        'Твёрдость: 5 - 7',
        'Плотность: 2,6 - 3,1 г/см<sup>3</sup>',
        'Формула: SiO<sub>2</sub> с примесями',
        `Свойства: лава — основная составляющая базальтов и других минералов, относящихся к группе вулканических камней.
          Она имеет различный состав, поэтому физико-химические свойства отдельных разновидностей
          застывшего камня будут отличаться`,

    ),
    lemezite: makeDescription(
        `Лемезит - разновидность известняка. Камень может быть разной окраски: от вишнево-бордового до коричневого и фиолетового
         или серо-зеленого. Рисунок на камне может иметь концентрический или кольцевой рисунок, полосатую или пятнистую расцветку
         и зависит от того, в каком направлении проведена его распиловка. Происхождение Урал. Применяется в строительстве.`,
        'Твёрдость: 3',
        'Плотность: 2,63 - 2,9 г/см<sup>3</sup>',
        'Формула: СаСО<sub>3</sub>',
        `Свойства: Малый уровень водопоглощения, насчитывается почти 60 оттенков минерала`
    ),
    magnesite: makeDescription(
        `Магнезит — довольно распространённый минерал.
         Магнезит назван по месту находки у города Магнезия - область в Фессалии (Греция).`,
        'Твёрдость: 3,5 - 4,5',
        'Плотность: 3,0 г/см<sup>3</sup>',
        'Формула: MgCO<sub>3</sub>',
        'Сингония - тригональная',
        `Свойства: Состав близок теоретическому. Из примесей наибольшее значение имеет Fe, меньше Mn, Ca. Кристаллы редки.
          Это отличное сырье для получения магния, широко применяется в промышленности для получения огнеупорных материалов,
          также используется как электроизолятор, в бумажном, сахарном производствах.`
    ),
    obsidian: makeDescription(
        `Обсидиан - образуется в результате быстрого охлаждения магматической породы, природное стекло,
         очень тёмный и непрозрачный. Аморфное твёрдое тело.`,
        'Твёрдость: 5 - 6',
        'Плотность: 2,5 - 2,6 г/см<sup>3</sup>',
        'Показатель преломления: 1,48 - 1,51',
        'Формула: SiO<sub>2</sub>',
        `Свойства: не проводит электрический ток, похож на стекло, но менее плотнен и менее прозрачен.
         Используется для производства тёмного стекла в качестве термоизоляции.`
    ),
    opal: makeDescription(
        `Древесный опал - аморфный минерал. Прожилки заполняют трещины пород. Является древесиной, замещённой опалом.
         Месторождение - Урал`,
        'Твёрдость: 5,5 - 6,5',
        'Плотность: 2,2 г/см<sup>3</sup>',
        'Формула: SiO<sub>2</sub> • nH<sub>2</sub>O',
    ),
    pyrite: makeDescription(
        `Пирит — железный колчедан. Образуется в самых различных геологических процессах. Непрозрачен.
         Название получил по свойству давать искру при ударе.`,
        'Твёрдость: 6 - 6,5',
        'Плотность: 4,9 - 5,2 г/см<sup>3</sup>',
        'Формула: FeS<sub>2</sub>',
        'Сингония – кубическая',
        `Свойства: слабо проводит электричество. Парамагнетик.`
    ),
    quartz: makeDescription(
        `Кварц - один из самых распространённых минералов в земной коре. Может иметь разнообразную окраску в зависимости от примесей.`,
        'Твёрдость: 7',
        'Плотность: 2,6 - 2,65 г/см<sup>3</sup>',
        'Формула: SiO<sub>2</sub>',
        'Сингония - гексагональная',
        `Свойства: В чистом виде кварц бесцветен или имеет белую окраску из-за внутренних трещин и кристаллических дефектов.
         Элементы-примеси и микроскопические включения других минералов, преимущественно оксидов железа, придают ему самую разнообразную
         окраску. Имеет много разновидностей, среди которых — почти чёрный морион, фиолетовый аметист, жёлтый цитрин и т. д. 
         Относится к группе стеклообразующих оксидов, то есть может быть главной составляющей стекла.
         Применяется в радиотехнике, в стекольной промышленности. `
    ),
    rhodonite: makeDescription(
        `Родонит или рубиновый шпат — красивый поделочный камень розового цвета. Название происходит от греческого слова “роза”. Силикат марганца.`,
        'Твёрдость: 5 - 6,5',
        'Плотность: 3,4-3,78 г/см<sub>3</sub>',
        'Формула: MnSiO<sub>3</sub>',
        'Сингония - триклинная',
        `Свойства: используют в качестве поделочного камня, им облицованы колонны станции метро Маяковская (Москва)
         и один из залов Кремлёвского Дворца.`
    ),
    serpentine: makeDescription(
        `Змеевик или серпентинит. Состоит из различных минералов. Имеет красивый зелёный цвет,
         обусловленный присутствием железа в закисной форме. Название связано с пятнистой окраской кожи змеи.`,
        'Твёрдость: 5 - 6',
        'Плотность: 2,6 г/см<sup>3</sup>',
        'Показатель преломления 1,49 - 1,50',
        'Сингония - моноклинная',
        'Формула: H<sub>4</sub>Mg<sub>3</sub>Si<sub>2</sub>O<sub>9</sub>',
        `Он используется для отделки зданий, им облицован вестибюль метро Алексеевская (Москва).`
    ),
    shell: makeDescription(
        `Ракушки - экзоскелет беспозвоночных животных. Состоят из карбоната кальция. Разнообразны по форме, окраске.
         Используются для создания мозаики, для украшения рам зеркал, мебели, фонтанов. Формула: СаСО<sub>3</sub>`,
    ),
    talc: makeDescription(
        `Тальк — слоистые, листоватые сплошные массы. Очень мягкий материал,
         твёрдость принята по шкале Мооса за 1. Широко распространён во всём мире.`,
        'Твёрдость: 1',
        'Плотность: 2,8 г/см<sup></sup>',
        'Формула: MnSiO<sub>3</sub>',
        'Сингония - моноклинная.',
        `Свойства: используется в бумажной, текстильной, резиновой и других областях промышленности. Огнеупорен.`
    )
}
let coord;
let controls;
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
    // controls.noZoom = true;
    // controls.zoomSpeed = 9999;
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
    camera.up.set(0, 1, 0);

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = window.innerWidth / 600;
    controls.noZoom = true;
    controls.minDistance = 3;
    controls.maxDistance = 20;
    controls.noPan = true;
    controls.rotateSpeed = window.innerWidth / 500;

    loadTexture(texture);
    loadModel(model);
    addDescription(name);
    if (animateNoUse) {
        animate();
        animateNoUse = false;
        window.scrollTo(0, 0)
        setTimeout(() => {
            controls.noZoom = false;
        }, 1000);
        return;
    }
    /* Данный иф нужен, чтобы объекты не начинали вращаться быстрее.
    Иначе бы каждый раз использовался animate() и в секунду был бы
    поворот на 0.005 * n радиан, где n - количество использования main()*/
    render();
    window.scrollTo(0, 0);
    setTimeout(() => {
        controls.noZoom = false;
    }, 1000);
}

function addDescription(hrefName) {
    let name = hrefName.slice(0, hrefName.length - 1) //agat1 -> agat
    // !!!если минералов одного типа больше 9 надо редактнуть!!!
    let infoDiv = document.querySelector('.mineral-info')
    let moreInfo = infoDiv.querySelector('.burger').parentElement;
    let span = infoDiv.querySelector('span');
    let ul = infoDiv.querySelector('ul');
    moreInfo.classList.remove("show");
    span.innerHTML = ''
    ul.innerHTML = ''

    if (description?.[name]) {
        span.innerHTML = description[name]['info'];
        ul.innerHTML = description[name]['items'];
    } else {
        span.innerHTML = "В разработке...";
        ul.innerHTML = "Это тоже в разработке..."
        return;
    }

    if (description[name]['items'] === "") {
        moreInfo.classList.add("show");
    }
    if (hrefName == "lavaStone1") {
        ul.innerHTML = description[name]['items'] + `<li>Данный лавовый камень - кусочек с лавового потока с вулкана Толбачик (Камчатка) извержения 2012-2013 г.
         Налёты - это хлориды и сульфаты различных минералов, образованные в процессе остывания и контакта с газами,
         содержащимися в потоке воздуха.</li>`;
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
    items.map(elem => {
        elem = `<li>${elem}</li>`;
        li.push(elem);
    });
    return {
        info: `${info}`,
        items: `${li.join('')}`
    }
}
