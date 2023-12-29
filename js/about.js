var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

sonera.addEventListener('mouseenter', ()=> {
    fetz.animate(
        {opacity:[1,0]}, 
        {duration:250, fill:'forwards'}
        );
});

sonera.addEventListener('mouseleave', ()=> {
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

