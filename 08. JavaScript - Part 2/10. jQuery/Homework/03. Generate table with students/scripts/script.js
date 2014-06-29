/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

$(document).ready(function () {
    "use strict";
    var students = [
        {
            firstName: 'Peter',
            lastName: 'Ivanov',
            grade: '3'
        },
        {
            firstName: 'Milena',
            lastName: 'Grigorova',
            grade: '6'
        },
        {
            firstName: 'Gergana',
            lastName: 'Borisova',
            grade: '12'
        },
        {
            firstName: 'Boyko',
            lastName: 'Petrov',
            grade: '7'
        }
    ];

    var $tableContent = generateStudent(students);
    var $tableContainer = $('#table-container');
    $tableContainer.append($tableContent);
});

function generateStudent(tableContent) {
    var $tableContent = $(tableContent);
    var $table = $('<table />');
    $table.css('border', '1px solid black');
    $table.css('border-collapse', 'collapse');

    var $tableHeads = $('<th>First name</th>' +
        '<th>Last name</th>' +
        '<th>Grade</th>');
    $tableHeads.css('border', '1px solid black');
    $tableHeads.css('border-collapse', 'collapse');
    $tableHeads.css('padding', '5px');
    $table.append($tableHeads);

    for (var i = 0, len = $tableContent.length; i < len; i += 1) {
        var $row = $('<tr />');
        var $rowData = $('<td>' + $tableContent[i].firstName + '</td>' +
            '<td>' + $tableContent[i].lastName + '</td>' +
            '<td>' + $tableContent[i].grade + '</td>');
        $rowData.css('border', '1px solid black');
        $rowData.css('padding', '5px');

        $row.append($rowData);
        $table.append($row);
    }

    return $table;
}