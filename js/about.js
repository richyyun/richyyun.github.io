/* Animations for the bottom three images 
TODO: make into functions so it's not so much copy paste. 
*/
var fadedur = 100;
var fadeopacity = 0.2;
var scaledur = 100;
var scalefactor = 1.1;

$("#sonera").hover(function () {
        $("#sonera").animate({
            scale: scalefactor
        }, scaledur );
        $("#fetz").fadeTo(fadedur, fadeopacity);
        $("#nicolelis").fadeTo(fadedur, fadeopacity);
    }, function () {
        $("#sonera").stop(true, false);
        $("#sonera").css("scale", 1);
        $("#fetz").stop(true, false);
        $("#fetz").css("opacity", 1);
        $("#nicolelis").stop(true, false);
        $("#nicolelis").css("opacity", 1);
    }
);

$("#fetz").hover(function () {
    $("#fetz").animate({
        scale: scalefactor
    }, scaledur );
    $("#sonera").fadeTo(fadedur, fadeopacity);
    $("#nicolelis").fadeTo(fadedur, fadeopacity);
}, function () {
    $("#fetz").stop(true, false);
    $("#fetz").css("scale", 1);
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#nicolelis").stop(true, false);
    $("#nicolelis").css("opacity", 1);
}
);

$("#nicolelis").hover(function () {
    $("#nicolelis").animate({
        scale: scalefactor
    }, scaledur );
    $("#sonera").fadeTo(fadedur, fadeopacity);
    $("#fetz").fadeTo(fadedur, fadeopacity);
}, function () {
    $("#nicolelis").stop(true, false);
    $("#nicolelis").css("scale", 1);
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#fetz").stop(true, false);
    $("#fetz").css("opacity", 1);
}
);

