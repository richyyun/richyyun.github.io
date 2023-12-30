/* Animations for the bottom three images */
var fadedur = 100;
var fadeopacity = 0.2;

$("#sonera").hover(function () {
        $("#sonera").animate({
            scale: 1.2
        }, 250 );
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
    $("#sonera").fadeTo(fadedur, fadeopacity);
    $("#nicolelis").fadeTo(fadedur, fadeopacity);
}, function () {
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#nicolelis").stop(true, false);
    $("#nicolelis").css("opacity", 1);
}
);

$("#nicolelis").hover(function () {
    $("#sonera").fadeTo(fadedur, fadeopacity);
    $("#fetz").fadeTo(fadedur, fadeopacity);
}, function () {
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#fetz").stop(true, false);
    $("#fetz").css("opacity", 1);
}
);

