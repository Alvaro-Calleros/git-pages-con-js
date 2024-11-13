window.addEventListener("scroll", () => {
    const backgroundImage = document.querySelector(".background-image");
    const scrollPosition = window.scrollY;


    const maxOpacityDistance = 700; 
    let opacity = scrollPosition / maxOpacityDistance;
    backgroundImage.style.opacity = Math.min(opacity, 1);
});

const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

setInterval(() => {
    moveToRight();
}, 4000);

let operacion = 0;
    counter = 0, 
    widthImg = 100 / sliderSection.length;

function moveToRight() { 
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion=0;
        slider.style.transform = `translate(-${operacion}%)`;
    } else {
        counter++;

    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    }

}

function moveToLeft() { 
    counter--;
    if (counter < 0) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;

    } else {
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }

}

document.getElementById("icono-menu").addEventListener("click", function() {
    const submenuContent = document.querySelector(".submenu-content");
    submenuContent.style.display = submenuContent.style.display === "block" ? "none" : "block";
});