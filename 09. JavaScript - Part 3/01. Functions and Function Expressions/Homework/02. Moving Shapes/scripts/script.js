/*global window,document,alert,console*/
var movingShapes = (function () {
    'use strict';
    var shape = {
            width: 50,
            height: 50
        },
        path = {
            ellipse: {
                centerX: 300,
                centerY: 250,
                radiusX: 200,
                radiusY: 150,
                left: 100,
                top: 100,
                angle: 0,
                step: 0.03,
                attribute: 'data-angle'
            },
            rectangle: {
                posX: 600,
                posY: 100,
                width: 250,
                height: 150,
                step: 2,
                direction: 'right',
                attribute: 'data-direction'
            }
        },
        TIMEOUT = 50,
        movementTypesEnum = {
            'rect': 'rect',
            'ellipse': 'ellipse'
        },
        allMovingDivs = [];

    function getRandomColor() {
        var r = function () {
            return Math.floor(Math.random() * 256);
        };
        return "rgb(" + r() + "," + r() + "," + r() + ")";
    }

    function generatedStyledDiv(movement) {
        var div = document.createElement('div');
        div.innerHTML = 'DIV';
        div.className = movement;
        div.style.textAlign = 'center';
        div.style.fontWeight = 'bold';
        div.style.position = 'absolute';
        div.style.width = shape.width + 'px';
        div.style.height = shape.height + 'px';
        div.style.borderRadius = '5px';
        div.style.lineHeight = shape.height + 'px';
        div.style.border = '2px solid black';
        div.style.borderColor = getRandomColor();
        div.style.color = getRandomColor();
        div.style.backgroundColor = getRandomColor();

        if (movement === movementTypesEnum.rect) {
            div.style.left = path.rectangle.posX + 'px';
            div.style.top = path.rectangle.posY + 'px';
            div.setAttribute(path.rectangle.attribute, path.rectangle.direction);
        } else if (movement === movementTypesEnum.ellipse) {
            div.setAttribute(path.ellipse.attribute, 0);
        }

        return div;
    }

    function rectangularMovement(movingDiv) {
        var attributeName = path.rectangle.attribute,
            left = parseInt(movingDiv.style.left, 10),
            top = parseInt(movingDiv.style.top, 10);
        if (left >= path.rectangle.posX + path.rectangle.width && top === path.rectangle.posY) {
            movingDiv.setAttribute(attributeName, 'down');
        }

        if (top >= path.rectangle.posY + path.rectangle.height && left === path.rectangle.posX + path.rectangle.width) {
            movingDiv.setAttribute(attributeName, 'left');
        }

        if (left <= path.rectangle.posX && top === path.rectangle.posY + path.rectangle.height) {
            movingDiv.setAttribute(attributeName, 'up');
        }

        if (top <= path.rectangle.posY && left === path.rectangle.posX) {
            movingDiv.setAttribute(attributeName, 'right');
        }

        switch (movingDiv.getAttribute(attributeName)) {
            case 'right':
                left += path.rectangle.step;
                break;
            case 'down':
                top += path.rectangle.step;
                break;
            case 'left':
                left -= path.rectangle.step;
                break;
            case 'up':
                top -= path.rectangle.step;
                break;
        }

        movingDiv.style.left = left + 'px';
        movingDiv.style.top = top + 'px';
    }

    function ellipseMovement(movingDiv) {
        var attributeName = path.ellipse.attribute,
            angle = parseFloat(movingDiv.getAttribute(attributeName));
        path.ellipse.angle = angle + path.ellipse.step;
        movingDiv.setAttribute(attributeName, path.ellipse.angle);

        path.ellipse.left = path.ellipse.centerX + (path.ellipse.radiusX * Math.cos(path.ellipse.angle));
        movingDiv.style.left = path.ellipse.left + 'px';

        path.ellipse.top = path.ellipse.centerY + (path.ellipse.radiusY * Math.sin(path.ellipse.angle));
        movingDiv.style.top = path.ellipse.top + 'px';
    }

    function move() {
        for (var i = 0, len = allMovingDivs.length; i < len; i += 1) {
            var currentDiv = allMovingDivs[i],
                movement = currentDiv.className;
            if (movement === movementTypesEnum.rect) {
                rectangularMovement(currentDiv);
            } else if (movement === movementTypesEnum.ellipse) {
                ellipseMovement(currentDiv);
            }
        }
    }

    function add(movement) {
        var content,
            movingDiv;
        if (!movementTypesEnum[movement]) {
            throw "Invalid movement!";
        }

        content = document.getElementById('content');
        movingDiv = generatedStyledDiv(movement);
        content.appendChild(movingDiv);
        allMovingDivs.push(movingDiv);
    }

    setInterval(move, TIMEOUT);

    return {
        add: add
    };
}());

window.onload = (function () {
    'use strict';
    var addRectangleButton = document.getElementById('add-rect'),
        addEllipseButton = document.getElementById('add-ellipse');

    addRectangleButton.addEventListener('click', function () {
        //add element with rectangular movement
        movingShapes.add("rect");
    });

    addEllipseButton.addEventListener('click', function () {
        //add element with ellipse movement
        movingShapes.add("ellipse");
    });
}());