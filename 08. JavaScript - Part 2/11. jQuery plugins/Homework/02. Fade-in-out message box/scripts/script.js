/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

$('document').ready(function () {
    $('#message-box').messageBox(4000);
});

$.fn.messageBox = function (timeMs) {
    $(this).hide();
    $(this).fadeIn(timeMs);
    $(this).fadeOut(timeMs);
};