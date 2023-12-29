var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

sonera.addEventListener('mouseover', ()=> {
    fadeout(fetz)
});

sonera.addEventListener('mouseout', ()=> {
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

function fadeout(obj){
    id = setInterval(fade, 5);
    function fade(){
        if (obj.style.opacity > 0) {
            obj.style.opacity -= 1;
        }
        else{
            clearInterval(id);
        }
    }
}