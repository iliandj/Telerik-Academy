/*global document*/
var CanvasDrawer = (function () {
    'use strict';
    var ctx;

    function CanvasDrawer(selectorId, size) {
        var container,
            canvas;
        if (!(this instanceof CanvasDrawer)) {
            return new CanvasDrawer(selectorId, size);
        }
        container = document.getElementById(selectorId);
        if (!container) {
            throw new Error("Container with id=" + selectorId + " doesn't exist");
        }
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', size.width || 200);
        canvas.setAttribute('height', size.height || 200);
        container.appendChild(canvas);
        ctx = canvas.getContext('2d');
    }

    CanvasDrawer.prototype.rect = function (position, size, style) {
        style = style || {};
        ctx.beginPath();
        ctx.lineWidth = style.lineWidth || 1;
        ctx.strokeStyle = style.strokeColor || 'black';
        ctx.fillStyle = style.fillColor || 'white';
        ctx.fillRect(position.x, position.y, size.width, size.height);
        ctx.strokeRect(position.x, position.y, size.width, size.height);
    };

    CanvasDrawer.prototype.circle = function (position, radius, style) {
        style = style || {};
        ctx.beginPath();
        ctx.lineWidth = style.lineWidth || 1;
        ctx.strokeStyle = style.strokeColor || 'black';
        ctx.fillStyle = style.fillColor || 'white';
        ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    CanvasDrawer.prototype.line = function (positionFrom, positionTo, style) {
        style = style || {};
        ctx.beginPath();
        ctx.lineWidth = style.lineWidth || 1;
        ctx.strokeStyle = style.strokeColor || 'black';
        ctx.moveTo(positionFrom.x, positionFrom.y);
        ctx.lineTo(positionTo.x, positionTo.y);
        ctx.stroke();
    };

    return CanvasDrawer;
}());

window.onload = (function () {
    'use strict';
    var canvas = new CanvasDrawer('wrapper', {width: 600, height: 300}),
        style = {lineWidth: 3, strokeColor: '#252424'};
    style.fillColor = '#BA1D47';
    canvas.rect({x: 50, y: 50}, {width: 200, height: 100}, style);
    style.fillColor = '#446CA7';
    canvas.circle({x: 350, y: 100}, 50, style);
    canvas.line({x: 50, y: 250}, {x: 400, y: 250}, style);
}());