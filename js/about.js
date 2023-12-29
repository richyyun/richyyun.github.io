/* Animations for the bottom three images */

$("#sonera").hover(function () {
        $("#fetz").fadeTo(100, 0);
        $("#nicolelis").fadeTo(100, 0);
    }, function () {
        $("#fetz").stop(true, false);
        $("#fetz").css("opacity", 1);
        $("#nicolelis").stop(true, false);
        $("#nicolelis").css("opacity", 1);
    }
);

$("#fetz").hover(function () {
    $("#sonera").fadeTo(100, 0);
    $("#nicolelis").fadeTo(100, 0);
}, function () {
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#nicolelis").stop(true, false);
    $("#nicolelis").css("opacity", 1);
}
);

$("#nicolelis").hover(function () {
    $("#sonera").fadeTo(100, 0);
    $("#fetz").fadeTo(100, 0);
}, function () {
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#fetz").stop(true, false);
    $("#fetz").css("opacity", 1);
}
);


/* Javascript works 90% of the way but cannot seem to figure out a 
way to prevent fast mouse movements from affecting the animation.
Setting fill forwards locks you out of setting the opacity again
even with a parent wrapper. Adding an event listener so it sets the 
opacity to 0 when the animation finishes means if the mouse were 
to leave before the animation finished it would still get set to 0*/


/*
var sonera = document.getElementById("sonera");
var fetz = document.getElementById("fetz");
var nicolelis = document.getElementById("nicolelis");

// To correct for mouse moving out too fast not being captured 
var soneraMouse = false;
var fetzMouse = false;
var nicolelisMouse = false;

function addFade(elem, flag){
    elem.animate(
        {opacity:[1,0]}, 
        {duration:100, fill:'forwards'}
        );//.addEventListener("finish",function(){
        //    {elem.style.opacity=0}
        //});
}

sonera.addEventListener('mouseenter', ()=> {
    soneraMouse = true;
    addFade(fetz, soneraMouse);
    addFade(nicolelis, soneraMouse);
});

sonera.addEventListener('mouseleave', ()=> {
    soneraMouse = false;
    fetzparent.style.opacity = 1;
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
*/