var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

var soneraMouse = false;

sonera.addEventListener('mouseover', ()=> {
    soneraMouse = true;
    fetz.animate(
        {opacity:[1,0]}, 
        {duration:250, fill:'none'}
        ).addEventListener("finish",function(){
            if (soneraMouse){fetz.style.opacity=0}
            else {fetz.style.opacity=1}            
        });
});

sonera.addEventListener('mouseout', ()=> {
    soneraMouse = false;
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

