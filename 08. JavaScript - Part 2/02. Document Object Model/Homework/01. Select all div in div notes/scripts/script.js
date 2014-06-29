/*globals window, document, HTMLDivElement */

function selectNestedDivsWithQuery() {
    var nestedDivs = document.querySelectorAll('div > div');

    return nestedDivs;
}

function selectNestedDivsWithGetElementName() {
    var allDivs = document.getElementsByTagName('div'),
        nestedDivs = [];

    for (var i = 0, len = allDivs.length; i < len; i++) {
        var currentElement = allDivs[i];
        if (currentElement.parentNode instanceof HTMLDivElement) {
            nestedDivs.push(currentElement);
        }
    }

    return nestedDivs;
}

window.onload = function () {
    var selectedDivs = selectNestedDivsWithQuery();
    //var selectedDivs = selectNestedDivsWithGetElementName();

    // mark selected Elements
    var span = document.createElement('span'),
        newLine = document.createElement('br'),
        spanText = document.createTextNode('selected');
    span.appendChild(newLine);
    span.appendChild(spanText);
    span.style.color = 'red';

    for (var i = 0, len = selectedDivs.length; i < len; i++) {
        selectedDivs[i].appendChild(span.cloneNode(true));
    }
};