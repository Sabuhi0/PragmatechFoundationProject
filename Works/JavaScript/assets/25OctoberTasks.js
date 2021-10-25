// Button click edende hundurluk 600px olsun

function buttonClick() {
    let box = document.querySelector(".center-box");
    box.style.height = "600px"

}

// Button click edende saga surushsun ve ease moda olsun

function buttonClick2st() {
    let box = document.querySelector(".center-box");
    box.style.transform = "translate(100px, -0%)";
    box.style.transition = "all 3s ease"

}

// Button click edende box none olsun

function buttonClick3st() {
    let box = document.querySelector(".center-box");
    box.style.opacity = "0"

}

// Button click edende box block olsun

function buttonClick4st() {
    let box = document.querySelector(".center-box");
    box.style.opacity = "1"
}

// Button her defe click edende 10px ashagi getsin 

let x = 10;

function buttonClick5st() {
    let box = document.querySelector(".center-box");
    box.style.transform = `translate(0px,${x}px)`;
    x += 10;
}