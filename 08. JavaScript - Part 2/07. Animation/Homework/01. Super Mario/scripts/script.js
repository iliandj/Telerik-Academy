/*global window, document, Kinetic, Image, drawBackground*/

window.onload = function () {
    var svgPaper = document.querySelector('#wrapper > #svg-paper'),
        wrapper = {
            paper: svgPaper,
            x: 0,
            y: 0,
            width: 960,
            height: 600
        };
    drawBackground(wrapper);
    animateMario(wrapper);

};

function animateMario(wrapper) {
    var startPosition = -67,
        speed = 24,
        stage,
        layer,
        animations,
        imaObj;

    stage = new Kinetic.Stage({
        container: 'canvas-stage',
        width: 960,
        height: 600
    });

    layer = new Kinetic.Layer();
    animations = {
        idle: [
            12, 19, 54, 113
        ],
        run: [
            10, 293, 67, 114,
            88, 300, 66, 105,
            172, 303, 66, 102,
            256, 301, 63, 104,
            338, 298, 59, 108,
            413, 295, 60, 111,
            494, 292, 62, 114,
            576, 291, 66, 115,
            665, 293, 67, 117,
            111, 428, 71, 115,
            214, 427, 71, 116
        ]
    };
    imageObj = new Image();
    imageObj.onload = function () {
        var mario = new Kinetic.Sprite({
            x: startPosition,
            y: wrapper.height - 168,
            image: imageObj,
            animation: 'run',
            animations: animations,
            frameRate: speed,
            frameIndex: 0
        });

        layer.add(mario);
        stage.add(layer);
        mario.start();

        mario.on('frameIndexChange', function (ev) {
            var marioRightBorderOutPos = stage.attrs.width + Math.abs(startPosition);
            if (mario.attrs.x > marioRightBorderOutPos) {
                mario.setX(startPosition);
            }

            mario.setX(mario.attrs.x += 4);
        });
    };
    imageObj.src = "images/mario_sprite.png";
}