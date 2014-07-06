define(['jquery', 'handlebars'], function ($, Handlebars) {
    'use strict';
    var ComboBox = (function () {
        function ComboBox(items) {
            if (!(this instanceof ComboBox)) {
                return new ComboBox(items);
            }
            this._items = items || [];
            this._collapsed = true;
        }

        ComboBox.prototype = {
            render: function (templateSource) {
                var template = Handlebars.compile(templateSource),
                    html = template(this._items),
                    $comboBox = createComboBox(html);

                return $comboBox;
            }
        };

        function createComboBox(html) {
            var $comboBoxElement = $('<div />');
            $comboBoxElement.attr('id', 'combo-box');
            $comboBoxElement.attr('collapsed', 'true');
            $comboBoxElement.append(html);

            $comboBoxElement.find('div').hide().first().show();
            $comboBoxElement.on('click', '.person-item', function () {
                var $this,
                    $parent,
                    $items,
                    collapsed,
                    oldItemId,
                    currentItemId;
                $this = $(this);
                $parent = $this.parent();
                $items = $parent.find('.person-item');
                collapsed = JSON.parse($parent.attr('collapsed'));
                if (collapsed === true) {
                    $items.show();
                    $parent.attr('collapsed', 'false');
                } else {
                    $items.hide();
                    $items.removeClass('current');
                    $this.show();
                    $this.addClass('current');
                    $parent.attr('collapsed', 'true');
                }
            });

            return $comboBoxElement;
        }

        return ComboBox;
    }());

    return {
        ComboBox: ComboBox
    };
})