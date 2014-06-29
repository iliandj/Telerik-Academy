/*globals window, document */

window.onload = function () {
    var svgNameSpace = 'http://www.w3.org/2000/svg',
        svg = layer('#mean-image', 300, 400),
        circlePosX = 150,
        textPosX = 40,
        beginingPosY = 100,
        circleRadius = 54,
        verticalOffset = circleRadius;

    var mongoDbCircle = circle('mongo-db-circle', circlePosX, beginingPosY, circleRadius);
    svg.appendChild(mongoDbCircle);
    var mongoDbLogo = mongoDbLogo(12, 0, 0.6, 0.6);
    svg.appendChild(mongoDbLogo);
    var mongoDbText = text('mongo-db-circle', 'M', textPosX, beginingPosY, 34, 900);
    svg.appendChild(mongoDbText);

    var expressCircle = circle('express-circle', circlePosX, beginingPosY + verticalOffset, circleRadius);
    svg.appendChild(expressCircle);
    var expressCircleText = text('inner-text', 'express', textPosX + 109, beginingPosY + verticalOffset - 7, 25, 200);
    svg.appendChild(expressCircleText);
    var expressText = text('express-circle', 'E', textPosX, beginingPosY + verticalOffset, 34, 900);
    svg.appendChild(expressText);

    var angularJsCircle = circle('angular-js-circle', circlePosX, beginingPosY + verticalOffset * 2, circleRadius);
    svg.appendChild(angularJsCircle);
    var angularJsLogo = angularJsLogo(circlePosX - 33, beginingPosY + verticalOffset * 2 - 35, 0.4, 0.4);
    svg.appendChild(angularJsLogo);
    var angularJsText = text('angular-js-circle', 'A', textPosX, beginingPosY + verticalOffset * 2, 34, 900);
    svg.appendChild(angularJsText);

    var nodeJsCircle = circle('node-js-circle', circlePosX, beginingPosY + verticalOffset * 3, circleRadius);
    svg.appendChild(nodeJsCircle);
    var nodeJsLogo = nodeJsLogo(circlePosX - 161, beginingPosY - 125, 0.7, 0.7);
    svg.appendChild(nodeJsLogo);
    var nodeJsText = text('node-js-circle', 'N', textPosX, beginingPosY + verticalOffset * 3, 34, 900);
    svg.appendChild(nodeJsText);

    function layer(layerId, width, height) {
        var svg = document.createElementNS(svgNameSpace, 'svg');
        setTagIdent(svg, layerId);
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
        document.body.appendChild(svg);

        return svg;
    }

    function circle(styleClass, cx, cy, radius) {
        var circle = document.createElementNS(svgNameSpace, 'circle');
        setTagIdent(circle, styleClass);
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', radius);

        return circle;
    }

    function text(styleClass, textContent, x, y, fontSize, fontWeight) {
        var text = document.createElementNS(svgNameSpace, 'text');
        setTagIdent(text, styleClass);
        text.setAttribute('x', x);
        text.setAttribute('y', y + fontSize / 3);
        //text.setAttribute('font-family', fontFamily);
        text.setAttribute('font-size', fontSize + 'px');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-weight', fontWeight);
        var textNode = document.createTextNode(textContent);
        text.appendChild(textNode);

        return text;
    }

    function polygon(styleClass, pointsString, color) {
        var polygon = document.createElementNS(svgNameSpace, 'polygon');
        setTagIdent(polygon, styleClass);
        polygon.setAttribute('points', pointsString);
        polygon.setAttribute('fill', color);

        return polygon;
    }

    function path(styleClass, pointsString, color) {
        var path = document.createElementNS(svgNameSpace, 'path');
        setTagIdent(path, styleClass);
        path.setAttribute('d', pointsString);
        path.setAttribute('fill', color);

        return path;
    }

//    function linearGradient(idStyle, x1, y1, x2, y2, color_from, color_to) {
//        var linearGradient = document.createElementNS(svgNameSpace, 'linearGradient');
//
//        linearGradient.setAttribute('id', idStyle);
//        linearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
//        linearGradient.setAttribute('x1', '"' + x1 + '"');
//        linearGradient.setAttribute('y1', '"' + y1 + '"');
//        linearGradient.setAttribute('x2', '"' + x2 + '"');
//        linearGradient.setAttribute('y2', '"' + y2 + '"');
//        linearGradient.setAttribute('gradientTransform', "matrix(-0.9771 -0.323 0.2901 -0.8773 258.5455 34.4171)");
//
//        var stop1 = document.createElementNS(svgNameSpace, 'stop');
//        stop1.setAttribute('offset', '0');
//        stop1.setAttribute('style', 'stop-color:' + color_from);
//        linearGradient.appendChild(stop1);
//
//        var stop2 = document.createElementNS(svgNameSpace, 'stop');
//        stop2.setAttribute('offset', '1');
//        stop2.setAttribute('style', 'stop-color:' + color_to);
//        linearGradient.appendChild(stop2);
//
//        return linearGradient;
//    }

    function linearGradient(idStyle, x1, y1, x2, y2, stopPointsList) {
        var linearGradient = document.createElementNS(svgNameSpace, 'linearGradient');

        setTagIdent(linearGradient, idStyle);
        linearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
        linearGradient.setAttribute('x1', x1);
        linearGradient.setAttribute('y1', y1);
        linearGradient.setAttribute('x2', x2);
        linearGradient.setAttribute('y2', y2);
        linearGradient.setAttribute('gradientTransform', "matrix(-0.9771 -0.323 0.2901 -0.8773 258.5455 34.4171)");

        var stopPointsCount = stopPointsList.length,
            stop;
        for (var i = 0; i < stopPointsCount; i++) {
            stop = document.createElementNS(svgNameSpace, 'stop');
            var offset = stopPointsList[i].offset,
                color = stopPointsList[i].color;
            stop.setAttribute('offset', offset);
            stop.setAttribute('style', 'stop-color:' + color);
            linearGradient.appendChild(stop);
        }

        return linearGradient;
    }

    function mongoDbLogo(posX, posY, scaleByWidth, scaleByHeight) {
        var group1 = document.createElementNS(svgNameSpace, 'g');
        var group2 = document.createElementNS(svgNameSpace, 'g');

        var path1 = path('#mongo-db-logo', 'M234.124,225.348l-2.994-0.992c0,0,0.381-15.15-5.083-16.211 c-3.603-4.174,0.554-178.327,13.644-0.596c0,0-4.48,2.25-5.328,6.068C233.515,217.442,234.124,225.348,234.124,225.348z', '#ffffff');
        group2.appendChild(path1);

        var stopPointsList1 = [
            {offset: '0', color: '#599E4C'},
            {offset: '1', color: '#498E41'}
        ];
        var linearGradient1 = linearGradient('#SVGID_1', 4.668, -93.2651, -46.0972, -181.1929, stopPointsList1);
        group2.appendChild(linearGradient1);
        var path2 = path('', 'M235.737,210.717c0,0,26.011-17.131,19.917-52.709c-5.868-25.849-19.723-34.345-21.212-37.59 c-1.639-2.295-3.29-6.364-3.29-6.364l1.106,72.021C232.258,186.074,229.969,208.065,235.737,210.717z', 'url(#SVGID_1)');
        group2.appendChild(path2);

        var stopPointsList2 = [
            {offset: '0', color: '#4FA346'},
            {offset: '0.1916', color: '#59A64A'},
            {offset: '0.5207', color: '#6EB05A'},
            {offset: '0.9451', color: '#8CC17B'},
            {offset: '1', color: '#91C47F'}
        ];
        var linearGradient2 = linearGradient('#SVGID_2', 9.3193, -156.4736, -26.6643, -132.3035, stopPointsList2);
        group2.appendChild(linearGradient2);

        var path2 = path('', 'M229.606,211.674c0,0-24.398-16.644-22.995-46.012c1.405-29.368,18.638-43.809,21.994-46.427 c2.17-2.313,2.259-3.205,2.427-5.486c1.521,3.267,1.268,48.797,1.429,54.119C233.087,188.584,231.314,207.764,229.606,211.674z', 'url(#SVGID_2)');
        group2.appendChild(path2);

        group1.appendChild(group2);
        group1.setAttribute("transform", "translate(" + posX + " " + posY + ")");
        group2.setAttribute("transform", "scale(" + scaleByWidth + " " + scaleByHeight + ")");

        return group1;
    }

    function angularJsLogo(posX, posY, scaleByWidth, scaleByHeight) {
        var group1 = document.createElementNS(svgNameSpace, 'g');
        var group2 = document.createElementNS(svgNameSpace, 'g');

        var polygon1 = polygon('#polygon1', '13.621,138.311 83.331,176.625 153.4,137.792 166.462,29.46 83.243,0.875 0.554,29.975', '#b3b3b3');
        group2.appendChild(polygon1);

        var polygon2 = polygon('#polygon2', '83.05,167.471 146.041,132.609 158.214,35.721 83.05,10.089', '#a6120d');
        group2.appendChild(polygon2);

        var polygon3 = polygon('#polygon3', '83.049,167.471 83.049,10.086 9.833,36.183 21.03,133.072', '#dd1b16');
        group2.appendChild(polygon3);

        var path1 = path('#path1', 'm 103.74,93.871 -20.69,9.675 H 61.243 L 50.992,129.186 31.925,129.539 83.05,15.804 103.74,93.871 z M 101.74,89 83.187,52.271 67.969,88.368 h 15.08 L 101.74,89 z', '#f2f2f2');
        group2.appendChild(path1);

        var polygon4 = polygon('#polygon4', '100.454,88.396 83.088,88.396 83.049,103.523 107.062,103.546 118.285,129.543 136.529,129.881 83.049,15.804 83.186,52.271', '#b3b3b3');
        group2.appendChild(polygon4);

        group1.appendChild(group2);
        group1.setAttribute("transform", "translate(" + posX + " " + posY + ")");
        group2.setAttribute("transform", "scale(" + scaleByWidth + " " + scaleByHeight + ")");

        return group1;
    }

    function nodeJsLogo(posX, posY, scaleByWidth, scaleByHeight) {
        var group1 = document.createElementNS(svgNameSpace, 'g');
        var group2 = document.createElementNS(svgNameSpace, 'g');

        var pathAlphaN = path('#n-char', 'M194.603,403.381c0-0.475-0.249-0.911-0.658-1.145l-10.903-6.275 c-0.185-0.109-0.391-0.166-0.601-0.174c-0.019,0-0.098,0-0.112,0c-0.208,0.009-0.415,0.065-0.603,0.174l-10.903,6.275 c-0.406,0.234-0.659,0.669-0.659,1.145l0.024,16.896c0,0.234,0.122,0.453,0.328,0.569c0.203,0.121,0.453,0.121,0.654,0l6.48-3.711 c0.409-0.243,0.659-0.673,0.659-1.143v-7.894c0-0.47,0.249-0.905,0.657-1.14l2.759-1.59c0.206-0.118,0.431-0.176,0.66-0.176 c0.226,0,0.455,0.058,0.655,0.176l2.759,1.59c0.408,0.234,0.658,0.67,0.658,1.14v7.894c0,0.47,0.253,0.902,0.66,1.143l6.478,3.711 c0.203,0.121,0.458,0.121,0.659,0c0.2-0.116,0.327-0.335,0.327-0.569L194.603,403.381z', '#47493F');
        group2.appendChild(pathAlphaN);

        var pathAlphaD = path('#d-char', 'M252.825,380.154c-0.204-0.114-0.453-0.111-0.654,0.007 c-0.201,0.119-0.325,0.334-0.325,0.568v16.733c0,0.165-0.088,0.317-0.23,0.4c-0.144,0.082-0.318,0.082-0.461,0l-2.73-1.573 c-0.408-0.236-0.909-0.235-1.316,0l-10.908,6.295c-0.408,0.235-0.659,0.669-0.659,1.14v12.593c0,0.471,0.251,0.905,0.659,1.14 l10.907,6.3c0.408,0.236,0.909,0.236,1.317,0.001l10.909-6.301c0.407-0.235,0.658-0.669,0.658-1.14v-31.391 c0-0.477-0.259-0.917-0.676-1.15L252.825,380.154z M251.813,412.179c0,0.118-0.063,0.226-0.164,0.285l-3.746,2.159 c-0.102,0.059-0.227,0.059-0.328,0l-3.745-2.159c-0.103-0.059-0.165-0.167-0.165-0.285v-4.322c0-0.118,0.063-0.228,0.164-0.286 l3.745-2.164c0.103-0.058,0.228-0.058,0.33,0l3.745,2.164c0.102,0.058,0.164,0.167,0.164,0.286V412.179z', '#47493F');
        group2.appendChild(pathAlphaD);

        var pathAlphaE = path('#e-char', 'M291.85,407.741c0.405-0.235,0.655-0.669,0.655-1.139v-3.052 c0-0.469-0.251-0.904-0.656-1.139l-10.838-6.292c-0.407-0.238-0.911-0.238-1.319-0.002l-10.904,6.296 c-0.407,0.234-0.658,0.669-0.658,1.14v12.59c0,0.473,0.254,0.91,0.665,1.145l10.836,6.174c0.399,0.229,0.89,0.231,1.292,0.007 l6.555-3.644c0.207-0.115,0.336-0.333,0.338-0.57c0.002-0.238-0.125-0.458-0.33-0.577l-10.974-6.297 c-0.204-0.117-0.331-0.334-0.331-0.571v-3.945c0-0.235,0.126-0.454,0.33-0.57l3.415-1.969c0.203-0.118,0.454-0.118,0.657,0 l3.417,1.969c0.204,0.117,0.33,0.335,0.33,0.57v3.104c0,0.236,0.125,0.454,0.33,0.57c0.204,0.118,0.455,0.117,0.659-0.001 L291.85,407.741z', '#47493F');
        group2.appendChild(pathAlphaE);

        var pathAlphaO = path('o-char', 'M214.438,396.051c0.407-0.235,0.909-0.235,1.316,0l10.906,6.293 c0.408,0.236,0.659,0.671,0.659,1.141v12.598c0,0.471-0.251,0.905-0.658,1.14l-10.906,6.3c-0.408,0.236-0.91,0.236-1.318,0 l-10.903-6.3c-0.407-0.235-0.658-0.669-0.658-1.14v-12.598c0-0.47,0.251-0.905,0.658-1.141L214.438,396.051z', '#FFFFFF');
        group2.appendChild(pathAlphaO);

        var pathAlphaEDot = path('e-dot-char', 'M280.19,407.15c0.078-0.045,0.174-0.045,0.253,0l2.093,1.209 c0.079,0.045,0.126,0.128,0.126,0.219v2.416c0,0.09-0.047,0.174-0.126,0.219l-2.093,1.209c-0.079,0.044-0.175,0.044-0.253-0.001 l-2.091-1.208c-0.079-0.044-0.127-0.128-0.127-0.219v-2.416c0-0.091,0.048-0.174,0.127-0.219L280.19,407.15z', '#FFFFFF');
        group2.appendChild(pathAlphaEDot);

        group1.appendChild(group2);
        group1.setAttribute("transform", "translate(" + posX + " " + posY + ")");
        group2.setAttribute("transform", "scale(" + scaleByWidth + " " + scaleByHeight + ")");

        return group1;
    }

    function setTagIdent(tag, styleName) {
        if (styleName !== '') {
            var firstChar = styleName.substr(0, 1);
            if (firstChar == '#') {
                var styleNameLength = styleName.length,
                    styleNameWithoutFirstChar = styleName.substr(1, styleNameLength);
                tag.setAttribute('id', styleNameWithoutFirstChar);
            } else {
                tag.setAttribute('class', styleName);
            }
        }
    }

//<text transform="matrix(1 0 0 1 164.417 249.8262)" fill="#FFFFFF" font-family="'Arial'" font-size="38.2225">express</text>

//    function drawAngularJsLogo() {
//        var pointsArray = [];
//        pointsArray[0].polygon = "13.621,138.311 83.331,176.625 153.4,137.792 166.462,29.46 83.243,0.875 0.554,29.975";
//        pointsArray[1].polygon = "83.05,167.471 146.041,132.609 158.214,35.721 83.05,10.089";
//        pointsArray[2].polygon = "83.049,167.471 83.049,10.086 9.833,36.183 21.03,133.072";
//        pointsArray[3].path = "m 103.74,93.871 -20.69,9.675 H 61.243 L 50.992,129.186 31.925,129.539 83.05,15.804 103.74,93.871 z M 101.74,89 83.187,52.271 67.969,88.368 h 15.08 L 101.74,89 z";
//        pointsArray[4].polygon = "100.454,88.396 83.088,88.396 83.049,103.523 107.062,103.546 118.285,129.543 136.529,129.881 83.049,15.804 83.186,52.271";
//    }

    /*function convertToAbsolute(path) {
     var x0, y0, x1, y1, x2, y2, segs = path.pathSegList;
     for (var x = 0, y = 0, i = 0, len = segs.numberOfItems; i < len; ++i) {
     var seg = segs.getItem(i), c = seg.pathSegTypeAsLetter;
     if (/[MLHVCSQTA]/.test(c)) {
     if ('x' in seg) x = seg.x;
     if ('y' in seg) y = seg.y;
     } else {
     if ('x1' in seg) x1 = x + seg.x1;
     if ('x2' in seg) x2 = x + seg.x2;
     if ('y1' in seg) y1 = y + seg.y1;
     if ('y2' in seg) y2 = y + seg.y2;
     if ('x'  in seg) x += seg.x;
     if ('y'  in seg) y += seg.y;
     switch (c) {
     case 'm':
     segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
     break;
     case 'l':
     segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
     break;
     case 'h':
     segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
     break;
     case 'v':
     segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
     break;
     case 'c':
     segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
     break;
     case 's':
     segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
     break;
     case 'q':
     segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
     break;
     case 't':
     segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
     break;
     case 'a':
     segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
     break;
     case 'z':
     case 'Z':
     x = x0;
     y = y0;
     break;
     }
     }
     if (c == 'M' || c == 'm') x0 = x, y0 = y;
     }
     }*/
}
();