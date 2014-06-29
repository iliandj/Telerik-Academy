/*global window,document,alert,console*/
var domModule = (function () {
    'use strict';
    var documentBuffer = [],
        DOCUMENT_BUFFER_SIZE = 100;

    function appendChild(elementToAdd, parentSelector) {
        var parentElement;
        if (elementToAdd && parentSelector) {
            parentElement = document.querySelector(parentSelector);
            parentElement.appendChild(elementToAdd);
        }
    }

    function removeChild(parentSelector, selectorToRemove) {
        var parent,
            selectedElements;
        if (parentSelector && selectorToRemove) {
            parent = document.querySelector(parentSelector);
            selectedElements = document.querySelector(selectorToRemove);
            parent.removeChild(selectedElements);
        }
    }

    function addHandler(elementSelector, eventType, attachedFunction) {
        var selectedElements = document.querySelectorAll(elementSelector);
        Array.prototype.forEach.call(selectedElements, function (element) {
            element.addEventListener(eventType, attachedFunction);
        });
    }

    function appendToBuffer(parentSelector, elementToAdd) {
        var parentElement = document.querySelector(parentSelector),
            currentDocumentFragment;
        if (!parentElement) {
            throw "Not valid element found!";
        }

        currentDocumentFragment = documentBuffer[parentSelector];
        if (!currentDocumentFragment) {
            currentDocumentFragment = document.createDocumentFragment();
            documentBuffer[parentSelector] = currentDocumentFragment;
        }

        documentBuffer[parentSelector].appendChild(elementToAdd);
        if (currentDocumentFragment.childNodes.length === DOCUMENT_BUFFER_SIZE) {
            parentElement.appendChild(currentDocumentFragment);
            documentBuffer[parentSelector] = undefined;
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer
    };
}());

window.onload = (function () {
    "use strict";
    var div,
        newDiv,
        i,
        BUFFER_TEST_ELEMENT_COUNT = 110;
    div = document.createElement("div");
    div.id = "container";

    //appends div to #wrapper
    domModule.appendChild(div, "#wrapper");

    //removes li:first-child from ul
    domModule.removeChild("ul", "li:first-child");

    //add handler to each a element with class button
    domModule.addHandler("a.button", 'click', function () {
        alert("Clicked");
    });

    div.style.display = 'inline-block';
    div.style.margin = '5px';
    for (i = 0; i < BUFFER_TEST_ELEMENT_COUNT; i += 1) {
        newDiv = div.cloneNode(true);
        newDiv.textContent = 'div no.' + (i + 1);
        domModule.appendToBuffer('#container', newDiv);
    }
}());
