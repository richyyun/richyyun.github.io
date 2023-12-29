var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

sonera.addEventListener('mouseover', ()=> {
    fetz.animate([{opacity:1},{opacity:0}], 500);
});

sonera.addEventListener('mouseout', ()=> {
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

