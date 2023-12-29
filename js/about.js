var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

sonera.addEventListener('mouseover', ()=> {
    fadeout(fetz);
});

sonera.addEventListener('mouseout', ()=> {
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

function fadeout(obj){
    id = setInterval(fade, 10);
    let opacity = 1;
    function fade(){
        opacity -= 0.01
        obj.style.opacity = opacity;
        if (obj.style.opacity == 0){
            clearInterval(id);
        }
    }
}