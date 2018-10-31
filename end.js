document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

window.addEventListener("load", function () {
    update();
});
