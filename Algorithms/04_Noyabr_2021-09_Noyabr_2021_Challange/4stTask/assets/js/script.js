// console.log("clock night 02:20")
let sum = 0;

function plus() {
    sum++;
    document.querySelector(".num h1").innerHTML = sum;
}

function minus() {
    sum--;
    document.querySelector(".num h1").innerHTML = sum;
}

function reset() {
    sum = 0;
    document.querySelector(".num h1").innerHTML = sum;
}