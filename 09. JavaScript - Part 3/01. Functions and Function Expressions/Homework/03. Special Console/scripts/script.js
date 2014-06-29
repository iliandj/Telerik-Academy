/*global window,document,alert,console*/
var specialConsole = (function () {
    'use strict';
    function replaceAll(string, search, replace) {
        if (replace === undefined) {
            return string.toString();
        }
        return string.split(search).join(replace);
    }

    function formatString() {
        var argumentsCount = arguments.length,
            formatted = arguments[0],
            i;
        if (!argumentsCount) {
            return formatted;
        }

        if (argumentsCount === 1) {
            return formatted.toString();
        }

        for (i = 1; i < argumentsCount; i += 1) {
            formatted = replaceAll(formatted, "{" + (i - 1) + "}", arguments[i].toString());
        }
        return formatted;
    }

    // TODO: To implement graphic console analog in div element
    //    if (!String.prototype.format) {
    //        String.prototype.format = function () {
    //            var formatted = this,
    //                arg;
    //            for (arg in arguments) {
    //                formatted = formatted.replace("{" + arg + "}", arguments[arg].toString());
    //            }
    //            return formatted;
    //        };
    //    }

    //    function attachConsole(container) {
    //        var containerElement = document.querySelector(container);
    //        if (!containerElement) {
    //            throw "Invalid element!";
    //        }
    //        wrapper = containerElement;
    //    }
    //
    //    function createConsoleWindow() {
    //        var console = document.createElement('div');
    //        console.className('console');
    //        console.style.display = 'block';
    //
    //        wrapper.appendChild(console);
    //    }

    function getFormattedString(arg) {
        var result = formatString.apply(null, arg);
        return result;
    }

    function writeLine() {
        var result = getFormattedString(arguments);
        console.log(result);
    }

    function writeWarning() {
        var result = getFormattedString(arguments);
        console.warn(result);
    }

    function writeError() {
        var result = getFormattedString(arguments);
        console.error(result);
    }

    return {
        writeLine: writeLine,
        writeWarning: writeWarning,
        writeError: writeError
    };
}());

window.onload = (function () {
    'use strict';
    specialConsole.writeLine("Message: Hello");
    specialConsole.writeLine("Message: {0}", "Hello");
    specialConsole.writeLine("Message: {0} {1} !", "Hello", "Pesho");
    specialConsole.writeLine("Message: {0} {0} {0}{1}", "DING", "!");
    specialConsole.writeError("Error: {0}", "Something happened");
    specialConsole.writeWarning("Warning: {0}", "A warning");
}());