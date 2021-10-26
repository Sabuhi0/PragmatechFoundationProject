let x = 0;
let containerWidth = document.querySelector('.slider-container').clientWidth;
let slides = document.querySelectorAll('.slide-item');
for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = `${containerWidth/2}px`
}
document.querySelector('.slide-item').style.width = `${containerWidth/2}px`
let box = document.querySelector('.slide-items');

function left() {
    x = x - (containerWidth / 2 + 20);
    box.style.left = `${x}px`;
}

function right() {
    x = x + (containerWidth / 2 + 20);
    box.style.left = `${x}px`;
}