/*globals window, document:true */

window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    drawHouse(context, 450, 180);
    var color = '#90CAD7';
    drawBicycle(context, 70, 400, color, '#337D8F', 2);
    drawHead(context, 135, 190, color, '#22545F', 2);
    drawHat(context, 135, 190, '#396693', '#262423', 2);
};

function drawHouse(context, posX, posY) {
    var houseWidth = 285,
        houseHeight = 213,
        strokeWidth = 2,
        houseColor = '#975B5B';
    drawHouseWalls(context, posX, posY, houseWidth, houseHeight, houseColor, strokeWidth);

    var windowsWidth = 100,
        windowsHeight = 70,
        windowsSeparator = 2,
        windowsPosX = posX + (houseWidth - (2 * windowsWidth) - windowsSeparator - (2 * strokeWidth)) / 2 - 10,
        windowsPosY = posY + (houseHeight - (2 * windowsHeight) - windowsSeparator - (2 * strokeWidth)) / 2 - 10,
        doorWidth = 80,
        doorHeight = 100;

    drawWindow(context, windowsPosX, windowsPosY, windowsWidth, windowsHeight, 'black', windowsSeparator);
    drawWindow(context, windowsPosX + 130, windowsPosY, windowsWidth, windowsHeight, 'black', windowsSeparator);
    drawWindow(context, windowsPosX + 130, windowsPosY + 90, windowsWidth, windowsHeight, 'black', windowsSeparator);
    drawDoor(context, windowsPosX + (windowsWidth - doorWidth) / 2, posY + houseHeight, doorWidth, doorHeight, 'black', 2);

    var roofHeight = 150;
    drawRoof(context, posX, posY, houseWidth, roofHeight, houseColor, strokeWidth);
}

function drawHouseWalls(context, posX, posY, width, height, color, border) {
    context.lineWidth = border;
    context.fillStyle = color;
    context.strokeStyle = 'black';
    context.fillRect(posX, posY, width, height);
    context.strokeRect(posX, posY, width, height);
}

function drawWindow(context, posX, posY, sizeX, sizeY, color, separator) {
    var windowsWidth = sizeX / 2 - separator,
        windowsHeight = sizeY / 2 - separator;

    context.fillStyle = color;
    context.strokeStyle = color;

    context.fillRect(posX, posY, windowsWidth, windowsHeight);

    var posXNextWindow = posX + windowsWidth + separator;
    context.fillRect(posXNextWindow, posY, windowsWidth, windowsHeight);

    var posYNextWindow = posY + windowsHeight + separator;
    context.fillRect(posX, posYNextWindow, windowsWidth, windowsHeight);

    context.fillRect(posXNextWindow, posYNextWindow, windowsWidth, windowsHeight);
}

function drawDoor(context, posX, posY, doorWidth, doorHeight, borderColor, borderWidth) {
    context.beginPath();
    var arcPosY = doorHeight - 25;
    context.moveTo(posX, posY);
    context.lineTo(posX, posY - arcPosY);

    var doorCenterX = posX + doorWidth / 2;
    context.moveTo(doorCenterX, posY);
    context.lineTo(doorCenterX, posY - doorHeight);

    context.moveTo(posX + doorWidth, posY - arcPosY);
    context.lineTo(posX + doorWidth, posY);
    context.stroke();

    //draw knobs
    var knob = {
        radius: 4,
        offsetByX: doorWidth * 1 / 6,
        offsetByY: doorHeight * 1 / 3
    };
    context.beginPath();
    context.arc(doorCenterX - knob.offsetByX, posY - knob.offsetByY, knob.radius, 0, 2 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.arc(doorCenterX + knob.offsetByX, posY - knob.offsetByY, knob.radius, 0, 2 * Math.PI, false);
    context.stroke();

    //draw door arc
    context.beginPath();
    context.moveTo(posX, posY - arcPosY);
    context.bezierCurveTo(posX, arcPosY + 208, posX + doorWidth, arcPosY + 208, posX + doorWidth, posY - arcPosY);
    context.stroke();
}

function drawRoof(context, posX, posY, width, height, color, border) {
    context.beginPath();
    context.fillStyle = color;
    context.strokeStyle = border;
    context.moveTo(posX, posY);
    context.lineTo(posX + (width / 2) + border, posY - height);
    context.lineTo(posX + width, posY);
    context.closePath();
    context.fill();
    context.lineJoin = 'bevel';
    context.stroke();

    drawChimney(context, posX + width * 3 / 4, posY, 30, 120, color, border);
}

function drawChimney(context, posX, posY, width, height, color, border) {
    var radius = width / 2,
        scaleFactor = 0.3;
    context.fillStyle = color;
    context.strokeStyle = 'black';
    context.lineWidth = border;
    context.beginPath();
    var circleStart = posX - radius,
        depth = posY - height / 2 + 20,
        high = posY - height;
    context.moveTo(circleStart, depth);
    context.lineTo(circleStart, high);
    context.lineTo(circleStart + width, high);
    context.lineTo(circleStart + width, depth);
    context.fill();
    context.stroke();

    drawElipse(context, posX, posY - height, radius - 0.5, 1, scaleFactor, color, 'black', 3);
}

//function getAbsolutePosition(oldCenter, newCenter, mScaleFactor) {
//    if (newCenter > oldCenter) {
//        return oldCenter + ((newCenter - oldCenter) /
//            mScaleFactor);
//    } else {
//        return oldCenter - ((oldCenter - newCenter) / mScaleFactor);
//    }
//}

function drawBicycle(context, posX, posY, color, borderColor, border) {
    drawTyre(context, posX, posY, 50, color, 2);
    drawTyre(context, posX + 210, posY, 50, color, 2);
    drawFrame(context, posX, posY, borderColor, 2);
}

function drawTyre(context, posX, posY, radius, color, border) {
    context.beginPath();
    context.fillStyle = color;
    context.strokeStyle = '#337D8F';
    context.lineWidth = border;
    context.arc(posX, posY, radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}

function drawFrame(context, posX, posY, color, border) {
    var pedalsCenter = posX + 100;
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = border;

    //draw pedals
    context.moveTo(pedalsCenter, posY);
    var pedalLength = 20;
    context.lineTo(pedalsCenter - pedalLength, posY - pedalLength);
    context.lineTo(pedalsCenter + pedalLength, posY + pedalLength);
    context.stroke();
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(pedalsCenter, posY, 15, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    //draw frame
    context.beginPath();
    context.moveTo(pedalsCenter, posY);
    context.lineTo(posX, posY);
    var seatpostPosX = posX + (pedalsCenter - posX) * 2.5 / 4,
        seatpostPosY = posY - 70;
    context.lineTo(seatpostPosX, seatpostPosY);
    var wheelPosX = seatpostPosX + 130;
    context.lineTo(wheelPosX, seatpostPosY);
    context.closePath();

    //draw seatpost
    context.moveTo(pedalsCenter, posY);
    context.lineTo(seatpostPosX, seatpostPosY);
    var seatpostAngle = Math.atan2(posY - seatpostPosY, pedalsCenter - seatpostPosX),
        seatpostLength = 30,
        seat = addPosLength(seatpostPosX, seatpostPosY, -seatpostLength, seatpostAngle);
    context.lineTo(seat.posX, seat.posY);

    //draw seat
    var seatWidth = 20;
    context.moveTo(seat.posX - seatWidth, seat.posY);
    context.lineTo(seat.posX + seatWidth, seat.posY);

    //draw wheel
    context.moveTo(posX + 210, posY);
    context.lineTo(wheelPosX, seatpostPosY);
    var wheel = {
            angle: Math.atan2(posY - seatpostPosY, posX + 210 - wheelPosX),
            length: 40
        },
        wheelTop = addPosLength(wheelPosX, seatpostPosY, -wheel.length, wheel.angle);
    context.lineTo(wheelTop.posX, wheelTop.posY);

    // draw handle bars
    var rightHandleBar = addPosLength(wheelTop.posX, wheelTop.posY, -40, 50);
    context.lineTo(rightHandleBar.posX, rightHandleBar.posY);

    context.moveTo(wheelTop.posX, wheelTop.posY);
    var leftHandleBar = addPosLength(wheelTop.posX, wheelTop.posY, -40, -10);
    context.lineTo(leftHandleBar.posX, leftHandleBar.posY);

    context.lineJoin = 'bevel';
    context.stroke();
}

function addPosLength(posX, posY, length, angle) {
    var newPosX = posX + length * Math.cos(angle),
        newPosY = posY + length * Math.sin(angle);
    return {
        posX: newPosX,
        posY: newPosY
    };
}

function drawHead(context, posX, posY, color, borderColor, border) {
    var radius = 50;
    context.beginPath();
    context.fillStyle = color;
    context.strokeStyle = borderColor;
    context.lineWidth = border;
    context.arc(posX, posY, radius, 0, 2 * Math.PI, false);
    context.fill();

    //draw nose
    var nose = {
        startPosX: posX - 7,
        startPosY: posY + 10,
        length: 12
    };
    context.moveTo(nose.startPosX, nose.startPosY);
    context.lineTo(nose.startPosX - nose.length, nose.startPosY);
    context.lineTo(nose.startPosX, nose.startPosY - (2 * nose.length));
    context.stroke();

    //draw mouth
    context.beginPath();
    context.strokeStyle = border;
    var mouth = {
        scaleFactor: 0.3,
        width: 18
    };
    context.save();
    context.rotate(8 * Math.PI / 180);
    drawElipse(context, posX - 5 + 25, posY + 28 - 20, mouth.width, 1, mouth.scaleFactor, 'transparent', borderColor, 3);
    context.restore();

    //draw eyes
    var eye = {
        width: 9,
        scaleFactor: 0.6,
        separator: 30,
        retina: {
            left: {},
            right: {}
        }
    };
    drawElipse(context, posX - eye.separator, posY - 15, eye.width, 1, eye.scaleFactor, color, borderColor, 2);
    drawElipse(context, posX + eye.separator - 15, posY - 15, eye.width, 1, eye.scaleFactor, color, borderColor, 2);

    //draw retines
    eye.retina.scaleFactor = 0.5;
    eye.retina.left.posX = posX - 33;
    eye.retina.right.posX = eye.retina.left.posX + eye.separator * 2 - 15;
    eye.retina.posY = posY - 15;
    eye.retina.radius = 4;
    drawElipse(context, eye.retina.left.posX, eye.retina.posY, eye.retina.radius, eye.retina.scaleFactor, 1, borderColor, borderColor, 2);
    drawElipse(context, eye.retina.right.posX, eye.retina.posY, eye.retina.radius, eye.retina.scaleFactor, 1, borderColor, borderColor, 2);
}

function drawHat(context, posX, posY, color, borderColor, borderWidth) {
    context.fillStyle = color;
    context.strokeStyle = borderColor;
    context.lineWidth = borderWidth;

    //draw visor
    drawElipse(context, posX, posY - 45, 55, 1, 0.2, color, borderColor, 3);
    var hat = {
        height: 100,
        bombe: {}
    };
    hat.bombe.posX = posX + 3;
    hat.bombe.posY = posY - hat.height;
    hat.bombe.radius = 26;

    drawElipse(context, hat.bombe.posX, hat.bombe.posY + hat.height / 2, hat.bombe.radius, 1, 0.2, color, borderColor, 2);

    context.beginPath();
    context.moveTo(hat.bombe.posX + hat.bombe.radius, hat.bombe.posY + hat.height / 2);
    context.lineTo(hat.bombe.posX + hat.bombe.radius, hat.bombe.posY);
    context.lineTo(hat.bombe.posX - hat.bombe.radius, hat.bombe.posY);
    context.lineTo(hat.bombe.posX - hat.bombe.radius, hat.bombe.posY + hat.height / 2);
    context.fill();
    context.stroke();

    drawElipse(context, hat.bombe.posX, hat.bombe.posY, hat.bombe.radius, 1, 0.2, color, borderColor, 2);
}

function drawElipse(context, x, y, radius, scaleX, scaleY, color, borderColor, borderWidth) {
    context.save();

    context.beginPath();
    context.fillStyle = color;
    context.strokeStyle = borderColor;
    context.lineWidth = borderWidth;
    context.scale(scaleX, scaleY);

    context.arc(x / scaleX, y / scaleY, radius, 0, 2 * Math.PI);

    if (color !== 'transparent') {
        context.fill();
    }

    context.stroke();
    context.restore();
}