(function () {
    require.config({
        paths: {
            'jquery': 'libs/jquery-2.1.1.min',
            'handlebars': 'libs/handlebars',
            'controls': 'controls',
            'date': 'data'
        }
    });

    require(['jquery', 'controls', 'data'], function ($, controls, data) {
        var comboBox = controls.ComboBox(data),
            template = $("#persons-template").html(),
            comboBoxHtml = comboBox.render(template);
        $('#wrapper').append(comboBoxHtml);
    });
}());