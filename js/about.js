/* Animations for the bottom three images */
var fadedur = 250;

$("#sonera").hover(function () {
        $("#fetz").fadeTo(fadedur, 0);
        $("#nicolelis").fadeTo(fadedur, 0);
    }, function () {
        $("#fetz").stop(true, false);
        $("#fetz").css("opacity", 1);
        $("#nicolelis").stop(true, false);
        $("#nicolelis").css("opacity", 1);
    }
);

$("#fetz").hover(function () {
    $("#sonera").fadeTo(fadedur, 0);
    $("#nicolelis").fadeTo(fadedur, 0);
}, function () {
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#nicolelis").stop(true, false);
    $("#nicolelis").css("opacity", 1);
}
);

$("#nicolelis").hover(function () {
    $("#sonera").fadeTo(fadedur, 0);
    $("#fetz").fadeTo(fadedur, 0);
}, function () {
    $("#sonera").stop(true, false);
    $("#sonera").css("opacity", 1);
    $("#fetz").stop(true, false);
    $("#fetz").css("opacity", 1);
}
);

