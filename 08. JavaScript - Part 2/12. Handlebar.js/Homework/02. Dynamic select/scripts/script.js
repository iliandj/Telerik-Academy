/*global window, document, data, getData, Handlebars*/

window.onload = function () {
    var data = getData();

    var programTableTemplateHTML = document.getElementById('handlebars-template').innerHTML;
    var programTableTemplate = Handlebars.compile(programTableTemplateHTML);
    document.getElementById('content').innerHTML = programTableTemplate({
        item: data
    });
};