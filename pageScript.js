/* Файл для работы с самой страницей, не затрагивая 3d объекты
крч изменение самой страницы там классы и тд*/

let width = window.innerWidth / 100 * 42;
if (width > 280) {
    let imgList = document.querySelectorAll("img");
    for (let img of imgList) {
        img.style.width = "280px"
        img.style.height = "220px"
    }
} else {
    let imgList = document.querySelectorAll("img");
    for (let img of imgList) {
        img.style.width = width + "px"
        img.style.height = (width - 40) + "px"
    }
}