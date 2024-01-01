let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == "flex"){
            slides[i].style.display = "none";
        }
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    console.log(window.getComputedStyle(elem, null).getPropertyValue("left"));
    console.log(window.getComputedStyle(elem, null).getPropertyValue("transition"));
    slides[slideIndex-1].style.left = "0%";
    dots[slideIndex-1].className += " active";
}