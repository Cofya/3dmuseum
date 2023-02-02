/* Файл для работы с самой страницей, не затрагивая 3d объекты
крч изменение самой страницы там классы и тд*/

function darkTheme() {
    let block = document.querySelector(".header-button__switch-theme");
    let span = block.querySelector("span");
    let svgs = block.querySelectorAll("svg");
    let body = document.querySelector("body");

    svgs[0].classList.toggle("opacity")
    svgs[1].classList.toggle("opacity")
    body.classList.toggle("dark");

    if (body.classList.contains('dark')) {
        span.innerHTML = "Включить светлую тему"
        localStorage.setItem("theme", true)
        return;
    }
    span.innerHTML = "Включить тёмную тему"
    localStorage.setItem("theme", false)
}

function openBook() {
    let block = document.querySelector(".header-button__glossary");
    let span = block.querySelector("span");
    let svg = block.querySelectorAll("svg")[1];
    let main = document.querySelector("main");
    let glossary = document.querySelector(".glossary");

    glossary.classList.toggle("show")
    main.classList.toggle("show");
    svg.classList.toggle("opacity");
    if (svg.classList.contains("opacity")) {
        span.innerHTML = "Термины";
        return;
    }
    span.innerHTML = "Вернуться в меню";
}
function burgerToggle(burger) {
    burgerTarget = burger.parentElement.nextElementSibling
    burger.classList.toggle("burger-active");
    burgerTarget.classList.toggle("burger-target-active");
    setTimeout(() => {
        burgerTarget.classList.toggle("show");
    }, 150)
}

// чтобы тема не сбрасывалась
let activeTheme = localStorage.getItem('theme');
if (activeTheme == "true") { // прикиньте в локал стородж булевое тру записалось строкоц
    let body = document.querySelector('body');
    let svgs = document.querySelector(".header-button__switch-theme").querySelectorAll('svg');
    body.style.transition = "0s all linear";
    svgs.forEach((elem) => {
        elem.style.transition = "0s all linear";
    });
    darkTheme();
    setTimeout(() => body.style.transition = "0.3s all linear", 300);
    setTimeout(() => svgs.forEach((elem) => {
        elem.style.transition = "0.5s all linear";
    }), 200)
} else {
    body = document.querySelector('body');
    body.classList.remove('dark')
}

// у меня на телефоне крестик другой видимо сафари половинчатые пиксели не поддерживает
isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
    burgerSquares = document.querySelectorAll('.burger__square');
    burgerSquares.forEach((elem) => {
        elem.style.height = "6px";
        elem.style.left = "3px"
    })
}