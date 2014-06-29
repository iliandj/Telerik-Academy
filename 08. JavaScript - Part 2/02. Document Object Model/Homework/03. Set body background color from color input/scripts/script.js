/*globals console, document:true */

function OnClickGetColorButton() {
    setBodyColorsFromInput("input[type=color]");
}

function setBodyColorsFromInput(selector) {
    var colorInput = document.querySelector(selector);
    var color = colorInput.value;

    var bodyStyle = document.body.style;
    bodyStyle.backgroundColor = color;

    var textColor = getContrastYIQ(color);
    bodyStyle.color = textColor;
}

function getContrastYIQ(hexcolor) {
    var red = parseInt(hexcolor.substr(1, 2), 16);
    var green = parseInt(hexcolor.substr(3, 2), 16);
    var blue = parseInt(hexcolor.substr(5, 2), 16);
    var yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;

    return (yiq >= 128) ? 'black' : 'white';
}