var vid = document.getElementById("brainvid");
vid.oncanplaythrough = function() {
    setTimeout(function() {
        var e = document.getElementById('brainvid');
        fade(e);
    }, 5000);
};

function fade(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 50);
}