/* Файл для работы с самой страницей, не затрагивая 3d объекты
крч изменение самой страницы там классы и тд*/

let width = window.innerWidth / 100 * 30;
if (width > 270) {
    let imgList = document.querySelectorAll(".icons__mineral");
    for (let img of imgList) {
        img.style.width = "230px"
        img.style.height = "230px"
    }
} else if (width < 120) {
    let imgList = document.querySelectorAll(".icons__mineral");
    for (let img of imgList) {
        img.style.width = "120px"
        img.style.height = "120px"
    }
} else {
    let imgList = document.querySelectorAll(".icons__mineral");
    for (let img of imgList) {
        img.style.width = width + "px"
        img.style.height = width + "px"
    }
}

function burgerToggle(num) {
    let headline = document.querySelectorAll(".icons__headlines")[num];
    let burger = headline.querySelector(".burger");
    let div = headline.nextElementSibling;
    burger.classList.toggle("burger-active");
    div.classList.toggle("burger-target-active");
    setTimeout(() => {
        div.classList.toggle("show");
    }, 150)
}