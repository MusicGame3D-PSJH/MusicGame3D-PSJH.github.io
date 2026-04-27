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

// get block resources.
function loadImage(url) {
    let image = blockImage.cloneNode();
    image.src = url;
    return image;
}

// set the block resources.
const blockResources = {
    'block-1-1': loadImage('images/block_light_blue_1.png'),
    'block-1-2': loadImage('images/block_light_blue_2.png'),
    'block-2-1': loadImage('images/block_lime_1.png'),
    'block-2-2': loadImage('images/block_lime_2.png'),
    'block-3-1': loadImage('images/block_yellow_1.png'),
    'block-3-2': loadImage('images/block_yellow_2.png'),
    'block-4-1': loadImage('images/block_magenta_1.png'),
    'block-4-2': loadImage('images/block_magenta_2.png'),
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