/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

$('document').ready(function () {

    $('#dropdown-box').dropdown();
});

$.fn.dropdown = function () {

    // Get the Raw Data from the original Select
    var $selectTag = $(this);
    $selectTag.hide();
    var optionsArray = [];
    var optionTags = $selectTag.children();

    for (var i = 0; i < optionTags.length; i++) {
        optionsArray.push({
            option: optionTags[i].innerHTML,
            value: optionTags[i].value
        });
    }

    var $container = $('<div>').addClass('dropdown-list-container');
    var $ul = $('<ul>').addClass('dropdown-list-options');
    var $selectionContainer = $('<li>')
        .addClass('dropdown-list-selection-container')
        .text('Click to select')
        .attr('data-value','not-selected')
        .appendTo($ul);

    for (var j = 0; j < optionsArray.length; j++) {
        var currOption = $('<li>')
            .text(optionsArray[j].option)
            .attr('data-value',optionsArray[j].value)
            .on('click', function () {
                $this = $(this);
                $('.dropdown-list-options li[selected]').removeAttr('selected');
                $this.attr('selected', 'selected');
                $selectionContainer.text($this.text());
                $selectionContainer.attr('data-value', $this.attr('data-value'));
                $('.dropdown-list-options li:not(.dropdown-list-selection-container)').slideUp('fast');
            })
            .appendTo($ul);
    }

    $allOptions = $selectionContainer.siblings().hide();

    $selectionContainer.on('click', function () {
        $allOptions.slideToggle();
    });

    $ul.appendTo($container);
    $container.appendTo($('body'));
};