/*global window, document*/
window.onload = function () {
    'use strict';
    var divsCount = 20;

    var wrapper = document.getElementById('content');
    var documentFragment = document.createDocumentFragment();

    var strong = document.createElement('strong');
    var textNode = document.createTextNode('div');

    strong.appendChild(textNode);
    var div = document.createElement('div');
    div.appendChild(strong);

    for (var i = 0; i < divsCount; i += 1) {
        var clonedNode = div.cloneNode(true);
        setRandomBlockAttribute(clonedNode);
        documentFragment.appendChild(clonedNode);
    }

    wrapper.appendChild(documentFragment);
};

function getRandomPixel(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber + 'px';
}

function getRandomColor() {
    var r = function () {
        return Math.floor(Math.random() * 256);
    };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

function setRandomBlockAttribute(clonedNode) {
    screenResoution = {
        width: window.screen.width,
        height: window.screen.height
    };

    clonedNode.style.top = getRandomPixel(1, Math.max(screenResoution.height - 200, 10));
    clonedNode.style.left = getRandomPixel(1, Math.max(screenResoution.width - 200, 10));
    clonedNode.style.width = getRandomPixel(20, 100);
    clonedNode.style.height = getRandomPixel(20, 100);
    clonedNode.style.backgroundColor = getRandomColor();
    clonedNode.style.color = getRandomColor();
    clonedNode.style.position = 'absolute';
    clonedNode.style.border = getRandomPixel(1, 20);
    clonedNode.style.borderStyle = 'solid';
    clonedNode.style.background = getRandomColor();
    clonedNode.style.borderRadius = getRandomPixel(1, 40);
    clonedNode.style.textAlign = 'center';
}
