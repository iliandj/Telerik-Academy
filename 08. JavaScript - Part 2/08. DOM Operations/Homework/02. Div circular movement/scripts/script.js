/*global window, document*/
window.onload = function () {
    'use strict';
    var radius = 100,
        center = {
            x: 200,
            y: 200
        },
        angle = 0,
        divsCount = 5;

    var divContainer = document.createElement('div');
    divContainer.id = 'div-container';

    var generatedDiv = function () {
        var div = document.createElement('div');
        div.innerHTML = '&nbsp';
        div.style.position = 'absolute';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.border = '2px solid black';
        div.style.background = getRandomColor();

        return div;
    };
    addDivCount(divContainer, generatedDiv, divsCount);

    var wrapper = document.getElementById('wrapper');
    wrapper.appendChild(divContainer);

    moveChildBlocks(divContainer);

    function moveChildBlocks() {
        angle += 0.02;
        for (var i = 0; i < divsCount; i += 1) {
            var newBlockPosition = movePoint({
                x: center.x,
                y: center.y,
                radius: radius,
                angle: angle + i * 2 * Math.PI / divsCount
            });

            divContainer.children[i].style.left = newBlockPosition.x + 'px';
            divContainer.children[i].style.top = newBlockPosition.y + 'px';
        }

        window.requestAnimationFrame(moveChildBlocks);
    }
};

function movePoint(trajectory) {
    return {
        x: trajectory.x + trajectory.radius * Math.cos(trajectory.angle),
        y: trajectory.y + trajectory.radius * Math.sin(trajectory.angle)
    };
}

function getRandomColor() {
    var r = function () {
        return Math.floor(Math.random() * 256);
    };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

function addDivCount(divContainer, generatedDiv, divsCount) {
    for (var i = 0; i < divsCount; i += 1) {
        divContainer.appendChild(generatedDiv());
    }
}