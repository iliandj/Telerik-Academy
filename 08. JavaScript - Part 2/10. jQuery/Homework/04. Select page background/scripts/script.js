/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

$(document).ready(function () {
    "use strict";
    var $colorPicker = $('#color-picker');
    var $colorPickerLabel = $('.color-selector-content > form > label');

    $colorPicker.on('change', onChangeColorPicker);
    
    function onChangeColorPicker() {
        var $pickedColor = $colorPicker.val();
        $('body').css('background-color', $pickedColor);
        
        var textColor = getContrastYIQ($pickedColor);
        $colorPickerLabel.css('color', textColor);
        $colorPicker.parent().css('border-color', textColor);
    }
});

function getContrastYIQ(hexcolor) {
    var red = parseInt(hexcolor.substr(1, 2), 16);
    var green = parseInt(hexcolor.substr(3, 2), 16);
    var blue = parseInt(hexcolor.substr(5, 2), 16);
    var yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;

    return (yiq >= 128) ? 'black' : 'white';
}