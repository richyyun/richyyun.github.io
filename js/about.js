/* Animations for the bottom three images 
Turns out CSS isn't enough for mouseover affecting various other elements.
This script allows for inter-dependent animation effects.
*/

var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

/* To correct for mouse moving out too fast not being captured */
var soneraMouse = false;
var fetzMouse = false;
var nicolelisMouse = false;

function addFade(elem, flag){
    elem.animate(
        {opacity:[1,0]}, 
        {duration:250, fill:'none'}
        ).addEventListener("finish",function(){
            {elem.style.opacity=0}
        });
}

sonera.addEventListener('mouseover', ()=> {
    soneraMouse = true;
    addFade(fetz, soneraMouse);
    addFade(nicolelis, soneraMouse);
});

sonera.addEventListener('mouseout', ()=> {
    soneraMouse = false;
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

sonera.addEventListener('mousemove', ()=> {
    if (!sonera.matches(':hover')){
        fetz.style.opacity = 1;
        nicolelis.style.opacity = 1;
    }
});

fetz.addEventListener('mouseover', ()=> {
    fetzMouse = true;
    addFade(sonera, fetzMouse);
    addFade(nicolelis, fetzMouse);
});

fetz.addEventListener('mouseout', ()=> {
    fetzMouse = false;
    sonera.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

nicolelis.addEventListener('mouseover', ()=> {
    nicolelisMouse = true;
    addFade(sonera, nicolelisMouse);
    addFade(fetz, nicolelisMouse);
});

nicolelis.addEventListener('mouseout', ()=> {
    nicolelisMouse = false;
    sonera.style.opacity = 1;
    fetz.style.opacity = 1;
});

