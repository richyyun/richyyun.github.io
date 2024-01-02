let slideIndex = 1;
let prevSlide = 1;
let leftright = "left";
firstSlide();

// Next/previous controls
function plusSlides(n) {
    assignvars(slideIndex + n);
    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    if (slideIndex == n){
        return;
    }
    assignvars(n);
    showSlides();
}

function firstSlide(){
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    slides[0].style.display = "flex";
    slides[0].style.left = "0%"; // turn off and on animation
    dots[0].className += " active";
}

function assignvars(n){
    prevSlide = slideIndex;
    if (n < prevSlide){
        leftright = "left"; // we are moving left, slides are moving right
    }
    else if(n > prevSlide){
        leftright = "right"; // we are moving right, slides are moving left
    }
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let leftright;
    
    console.log(leftright);
    console.log(window.getComputedStyle(slides[prevSlide], null).getPropertyValue("left"));             //for debugging
    console.log(window.getComputedStyle(slides[prevSlide], null).getPropertyValue("transition"));       //for debugging
    if (leftright == "left"){
        slides[prevSlide].style.left = "100%";
    }
    else {
        slides[prevSlide].style.left = "-100%";
    }
    slides[prevSlide].addEventListener('transitionend', function(event) {
        slides[prevSlide].style.display = "none";
    }, false );
    console.log(window.getComputedStyle(slides[prevSlide], null).getPropertyValue("left"));             //for debugging

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (leftright == "left"){
        slides[slideIndex-1].style.left = "-100%";
    }
    else {
        slides[slideIndex-1].style.left = "100%";
    }
    slides[slideIndex-1].style.display = "flex";
    console.log(window.getComputedStyle(slides[slideIndex-1], null).getPropertyValue("left"));          //for debugging
    console.log(window.getComputedStyle(slides[slideIndex-1], null).getPropertyValue("transition"));    //for debugging
    slides[slideIndex-1].style.left = "0%";
    console.log(window.getComputedStyle(slides[slideIndex-1], null).getPropertyValue("left"));          //for debugging
    dots[slideIndex-1].className += " active";
}