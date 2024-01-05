// Define variables and setup first slide
let slideIndex = 0;
let prevSlide = 0;
let leftright = "left";
firstSlide();


// Hide element on transition end
$(".slide").each( function(){
    $(this).on('transitionend', function(event) {
        console.log($(this));
        $(this)[0].style.display = "none";
    });
})
    
//Setup first slide
function firstSlide(){
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    slides[0].style.display = "flex";
    slides[0].style.left = "0%"; // turn off and on animation
    dots[0].className += " active";
}

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

function assignvars(n){
    prevSlide = slideIndex;
    if (n < prevSlide){
        leftright = "left"; // we are moving left, slides are moving right
    }
    else if(n > prevSlide){
        leftright = "right"; // we are moving right, slides are moving left
    }
    slideIndex = n;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length-1}

    // For debugging
    console.log(prevSlide);
    console.log(n);
    console.log(slideIndex);
    console.log(leftright);
}

function showSlides() { 

    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Stop all ongoing animations
    $(".slide").stop(true, true);

    // Move previous slide
    console.log(window.getComputedStyle(slides[prevSlide], null).getPropertyValue("left"));             //for debugging
    console.log(window.getComputedStyle(slides[prevSlide], null).getPropertyValue("transition"));       //for debugging
    if (leftright == "left"){
        slides[prevSlide].style.left = "100%";
    }
    else {
        slides[prevSlide].style.left = "-100%";
    }
    console.log(window.getComputedStyle(slides[prevSlide], null).getPropertyValue("left"));             //for debugging

    // Move current slide
    if (leftright == "left"){
        slides[slideIndex].style.left = "-100%";
    }
    else {
        slides[slideIndex].style.left = "100%";
    }
    slides[slideIndex].style.display = "flex";
    console.log(window.getComputedStyle(slides[slideIndex], null).getPropertyValue("left"));          //for debugging
    console.log(window.getComputedStyle(slides[slideIndex], null).getPropertyValue("transition"));    //for debugging
    slides[slideIndex].style.left = "0%";
    console.log(window.getComputedStyle(slides[slideIndex], null).getPropertyValue("left"));          //for debugging

    // Relabel dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";

}