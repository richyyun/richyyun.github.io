/* Animations for the bottom three images */
var fadedur = 150;
var fadeopacity = 0.25;
var movedist = "5%";

$("#sonera").hover(function () {
        $( "#sonera" ).animate({
            top: movedist
        }, 250 );
        $("#fetz").fadeTo(fadedur, fadeopacity);
        $("#nicolelis").fadeTo(fadedur, fadeopacity);
    }, function () {
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

