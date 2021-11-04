// const body = document.querySelector("body")
// const btn = document.querySelector("button")

// function clickMe(parm1) {
//     if (parm1 = 1) {
//         body.style.background = "red"
//         btn.innerHTML = "Red"
//     }
// }

let body = document.querySelector("body");
let btn = document.querySelector("#btn")
btn.onclick = function() {
    if (body.classList.contains("active")) {
        body.classList.remove("active")
        btn.innerHTML = "Black"
    } else {
        body.classList.add("active")
        btn.innerHTML = "Turboa"
    }
}