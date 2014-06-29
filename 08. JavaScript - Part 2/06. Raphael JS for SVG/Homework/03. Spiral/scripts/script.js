window.onload = function () {
    var canvasWidth = 500,
        canvasHeight = 500,
        center = {
            x: canvasHeight / 2,
            y: canvasWidth / 2
        },
        point = {
            x: 0,
            y: 0,
            radius: 1
        },
        step = 4,
        paper = Raphael(10, 10, canvasWidth, canvasHeight),
        angle,
        angleStep = 0.5,
        turns = 8;

    for (var i = 0, maxTurns = turns * 720; i < maxTurns; i += angleStep) {
        angle = 0.01 * i;
        point.x = center.x + step * angle * Math.cos(angle);
        point.y = center.y + step * angle * Math.sin(angle);

        var circle = paper.circle(point.x, point.y, point.radius);
        circle.attr({
            fill: 'black'
        });
    }
}