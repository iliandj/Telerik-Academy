/*global window, document, loremIpsum*/
window.onload = function () {
    'use strict';
    var fontColorInput = document.getElementById('font-color-change'),
        backColorInput = document.getElementById('back-color-change'),
        textArea = document.getElementById('text-area');

    textArea.value = loremIpsum();

    fontColorInput.addEventListener('change', function () {
        var color = fontColorInput.value;
        textArea.style.color = color;
    });

    backColorInput.addEventListener('change', function () {
        var color = backColorInput.value;
        textArea.style.background = color;
    });
};