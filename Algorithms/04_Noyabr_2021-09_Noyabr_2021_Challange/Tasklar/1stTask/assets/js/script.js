var actionBtn = document.querySelector(".action");
var changingTxt = document.querySelector(".backgroundColor span");

actionBtn.addEventListener("click", myFunction);

function myFunction() {
    let RandomColor = "#" + Math.random().toString(16).substr(2, 6);
    changingTxt.textContent = RandomColor;
    document.body.style.backgroundColor = RandomColor;
}