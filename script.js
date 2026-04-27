// get time
var time = Date.now();

function gameUpdate() {
    // get delta time
    var deltaTime = (Date.now() - time) / 1000;
    time = Date.now();
    requestAnimationFrame(gameUpdate);
}