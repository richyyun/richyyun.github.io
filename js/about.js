var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

sonera.addEventListener('mouseover', ()=> {
    fetz.animate(
        {opacity:[0,1]}, 
        {duration:250, fill:'forwards'}
        ).addEventListener("finish",function(){fetz.style.display="none"});;
});

sonera.addEventListener('mouseout', ()=> {
    fetz.style.opacity = 1;
    nicolelis.style.opacity = 1;
});

