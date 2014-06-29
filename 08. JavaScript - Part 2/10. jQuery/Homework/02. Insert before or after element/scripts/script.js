/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

$(document).ready(function () {
    "use strict";
    var $divElement = $('<div />');
    $divElement.text('middle');
    styleBlockElement($divElement, '#FFF477');

    var $wrapper = $('#container');
    $wrapper.append($divElement);

    $('#add-before-button').on('click', function () {
        var $beforeBlock = $('<div>before</div>');
        styleBlockElement($beforeBlock, '#BBF79A');
        $wrapper.prepend($beforeBlock);
    });
    
    $('#add-after-button').on('click', function () {
        var $beforeBlock = $('<div>after</div>');
        styleBlockElement($beforeBlock, '#F77272');
        $wrapper.append($beforeBlock);
    });
});

function styleBlockElement(blockElement, color) {
    blockElement.css('display', 'inline-block');
    blockElement.css('border', '1px solid black');
    blockElement.css('width', '60px');
    blockElement.css('height', '60px');
    blockElement.css('text-align', 'center');
    blockElement.css('line-height', '60px');
    blockElement.css('vertical-align', 'middle');
    blockElement.css('background-color', color);
    blockElement.css('margin', '5px');
}