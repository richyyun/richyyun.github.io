/* Animations for the bottom three images 
Turns out CSS isn't enough for mouseover affecting various other elements.
This script allows for inter-dependent animation effects.
*/

var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");


function addFade(elem, flag){
    elem.animate(
        {opacity:[1,0]}, 
        {duration:250, fill:'none'}
        ).addEventListener("finish",function(){
            {elem.style.opacity=0}
        });
}

sonera.addEventListener('mouseover', ()=> {
    addFade(fetz, soneraMouse);
    addFade(nicolelis, soneraMouse);
});

sonera.addEventListener('mouseout', ()=> {
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

fetz.addEventListener('mouseover', ()=> {
    addFade(sonera, fetzMouse);
    addFade(nicolelis, fetzMouse);
});

fetz.addEventListener('mouseout', ()=> {
    sonera.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

nicolelis.addEventListener('mouseover', ()=> {
    addFade(sonera, nicolelisMouse);
    addFade(fetz, nicolelisMouse);
});

nicolelis.addEventListener('mouseout', ()=> {
    sonera.style.opacity = 1;
    fetz.style.opacity = 1;
});

