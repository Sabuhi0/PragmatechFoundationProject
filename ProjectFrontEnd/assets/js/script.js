// Navbar scroll
document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    let navbar = document.querySelector('.header_section');
    window.addEventListener('scroll', function(e) {
        lastScrollPosition = window.scrollY;
        if (lastScrollPosition > 250)
            navbar.classList.add('navbar-dark');
        else
            navbar.classList.remove('navbar-dark');
    });
}

// Scroll top
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Text Typing Effects

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Sabuhi Gasimov", "a Designer.", "a Web Developer."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// Responsive menu bar

// Mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-navbar-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu
const navLink = document.querySelectorAll(".header-navbar-menu li a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}