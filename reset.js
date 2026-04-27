// Get the context.
const mainCanvas = document.getElementById("main");
const ctx = mainCanvas.getContext("2d");
const blockImage = document.getElementById("blockImage");

// Set the canvas size to the window size.
var screenSize = {
    width: window.innerWidth,
    height: window.innerHeight
}

// set the public variables.
const values = {
    G: -9.81,
    FPS: 20,
    JUMP_F: 5.7
}

var mousePos = {
    x: 0,
    y: 0
}

var keyPressed = {
    Player1: {
        // Move keys. (left control lever)
        'moveZ+': false,
        'moveZ-': false,
        'moveX+': false,
        'moveX-': false,
        // View keys. (right control lever)
        'viewUp': false,
        'viewDown': false,
        'viewLeft': false,
        'viewRight': false,
        // Jump key. (left control lever's button)
        'jump': false,
        // Squat key. (right control lever's button)
        'squat': false
    },
    Player2: {
        // Move keys. (left control lever)
        'moveZ+': false,
        'moveZ-': false,
        'moveX+': false,
        'moveX-': false,
        // View keys. (right control lever)
        'viewUp': false,
        'viewDown': false,
        'viewLeft': false,
        'viewRight': false,
        // Jump key. (left control lever's button)
        'jump': false,
        // Squat key. (right control lever's button)
        'squat': false
    }
};

function resize() {
    // Update the canvas size.
    mainCanvas.width = window.innerWidth;
    mainCanvas.height = window.innerHeight;
    // Update the {screenSize} variable.
    screenSize.width = window.innerWidth;
    screenSize.height = window.innerHeight;
}

window.addEventListener("resize", resize);