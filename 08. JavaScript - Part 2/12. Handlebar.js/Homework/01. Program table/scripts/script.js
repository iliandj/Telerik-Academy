/*global window, document, data, getData, Handlebars*/

window.onload = function () {
    var data = getData();

    var programTableTemplateHTML = document.getElementById('program-table-template').innerHTML;
    var programTableTemplate = Handlebars.compile(programTableTemplateHTML);
    document.getElementById('table').innerHTML = programTableTemplate({
        head: data.head,
        rows: data.rows
    });
};