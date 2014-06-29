window.onload = function () {
    var canvasWidth = 200,
        canvasHeight = 200,
        textPadding = 5,
        fontSize = 48,
        cornerRadius = 10,
        paper = Raphael(10, 10, canvasWidth, canvasHeight);

    drawRectangle(paper);
    drawText(paper);
}();

function drawRectangle(paper) {
    paper.rect(10 + fontSize - textPadding, 10, 50, fontSize + textPadding * 2, cornerRadius).attr({
        fill: '#EC2828',
        stroke: '#EC2828'
    });
}

function drawText(paper) {
    paper.setStart();
    paper.text(10, 10, 'You').attr({
        fill: '#4B4B4B'
    });

    paper.text(10 + fontSize, 10, 'Tube').attr({
        fill: 'ffffff'
    });

    var set = paper.setFinish();
    set.attr({
        'font-size': '24px',
        'font-family': 'Consolas'
    });
}