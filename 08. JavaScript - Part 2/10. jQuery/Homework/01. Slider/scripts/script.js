/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

$(document).ready(function () {
    var $element = $('#wrapper'),
        options = {
            directory: 'slider-resource/',
            slides: ['01.jpg', '02.jpg', '03.jpg', '04.html'],
            prevImage: 'images/prev-button.png',
            nextImage: 'images/next-button.png',
            width: '980',
            height: '380'
        };
    directoryContentSlider($element, options);
});

function directoryContentSlider(element, options) {
    var $element = $(element),
        $this = $(this);

    // Merge config setting
    var config = $.extend({
        directory: null,
        slides: [],
        prevImage: null,
        nextImage: null,
        speed: 5000,
        height: null,
        width: null
    }, options || {});

    // Set slideshow dimension if set
    if (config.height) {
        $element.css('height', config.height + 'px');
    }

    if (config.width) {
        $element.css('width', config.width + 'px');
    }

    $element.css('overflow', 'hidden');

    // Format different resources
    var approvedImageExtension = ['jpg', 'jpeg', 'png', 'gif'];
    var slides = [];
    for (var i = 0, len = config.slides.length; i < len; i += 1) {
        var currentResource = config.slides[i];
        var fileExtension = currentResource.split('/').reverse()[0].split('.').reverse()[0];
        var foundExtension = $.inArray(fileExtension, approvedImageExtension);
        if (foundExtension > -1) {
            var $imgTag = $('<img src="' + config.directory + currentResource + '" />');
            slides.push($imgTag);
        } else if (fileExtension === 'html') {
            var $htmlResource = $('<div />').load(config.directory + currentResource);
            slides.push($htmlResource);
        }
    }

    var $slideWrapper = $('<div />');
    $slideWrapper.addClass('slider-wrapper');
    $slideWrapper.css('position', 'relative');
    var $sliderContent = $('<div />');
    $sliderContent.addClass('slides-content');
    $sliderContent.css({
        width: '100%',
        height: '100%',
        position: 'reltive'
    });
    $slideWrapper.append($sliderContent);
    $slideWrapper.appendTo($element);

    // Append slide
    $.each(slides, function (index, val) {
        $(val).css({
            width: '100%',
            height: '100%'
        }).appendTo($sliderContent).hide();
    });

    var previousButton = $("<span />")
            .attr('id', 'previous')
            .on('click', PreviousClick)
            .css({
                height: '50px',
                width: '50px',
                'background-image': 'url("' + config.prevImage + '")',
                'background-attachment': 'scroll',
                'background-repeat': 'no-repeat',
                position: 'absolute',
                left: '10px',
                top: (config.height / 2) - 25 + 'px',
                'z-index': 1000,
                cursor: 'pointer'
            }),
        nextButton = $("<span />")
            .attr('id', 'next')
            .on('click', NextClick)
            .css({
                height: '50px',
                width: '50px',
                'background-image': 'url("' + config.nextImage + '")',
                'background-attachment': 'scroll',
                'background-repeat': 'no-repeat',
                position: 'absolute',
                left: (config.width - 60) + 'px',
                top: (config.height / 2) - 25 + 'px',
                'z-index': 1000,
                cursor: 'pointer'
            });

    // make container for the buttons
    var $buttonContainer = $('<div />').addClass('button-contaner');
    $buttonContainer.css({
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%'
    });

    $buttonContainer.append(previousButton);
    $buttonContainer.append(nextButton);
    $slideWrapper.append($buttonContainer);

    var currentSlide = $sliderContent.children().first();
    currentSlide.show();

    window.setInterval(function () {
        NextClick();
    }, config.speed);

//    // Animate slides
//    setInterval(function () {
//        $this = $(this);
//        var $firstSlide = $slideWrapper[0].firstChild;
//        var $lastSlide = $slideWrapper[0].lastChild;
//        $lastSlide.animate({
//                opacity: 0},
//            config.speed,
//            function () {
//                $this.insertBefore($firstSlide).css('opacity', 1);
//            });
//    }, config.timeout);

    function PreviousClick() {
        //$('slides-content').find()
    }

    function NextClick() {
        //$('slides-content').find()
        //$this.next().toggle();
    }
}