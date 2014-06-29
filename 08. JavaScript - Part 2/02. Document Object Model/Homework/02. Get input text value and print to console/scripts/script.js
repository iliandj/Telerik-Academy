/*globals console, document:true */

function OnClickGetValueButton() {
    ConsolePrintTextInputValue("input[type=text]");
}


function ConsolePrintTextInputValue(selector) {
    var textInput = document.querySelector(selector);
    var textInputValue = textInput.value;

    console.log(textInputValue);
}