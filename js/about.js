var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

/* To correct for mouse moving out too fast not being captured */
var soneraMouse = false;

sonera.addEventListener('mouseover', ()=> {
    soneraMouse = true;
    addFade(fetz, soneraMouse);
});

sonera.addEventListener('mouseout', ()=> {
    soneraMouse = false;
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

function addFade(elem, flag){
    elem.animate(
        {opacity:[1,0]}, 
        {duration:250, fill:'none'}
        ).addEventListener("finish",function(){
            if (flag){elem.style.opacity=0}
            else {elem.style.opacity=1}            
        });
}