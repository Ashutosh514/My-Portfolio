
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

function viewCertificate(btn) {
    const imgSrc = btn.parentElement.querySelector(".cert-img").src;
    document.getElementById("full-img").src = imgSrc;
    document.getElementById("fullscreen").style.display = "flex";
}

function closeFullscreen() {
    document.getElementById("fullscreen").style.display = "none";
}