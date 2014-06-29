/*globals window, document, requestAnimationFrame */

window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var ball = {};
    ball.radius = 15;
    ball.centerX = ball.radius;
    ball.centerY = canvas.height / 2;
    ball.color = 'darkred';
    ball.directionByX = 1;
    ball.directionByY = 1;

    moveBall(context, ball);
};

function drawBall(context, ball) {
    context.beginPath();
    context.fillStyle = ball.color;
    context.arc(ball.centerX, ball.centerY, ball.radius, 0, 2 * Math.PI, false);
    context.fill();
}

function moveBall(context, ball) {
    context.beginPath();
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fill();
    drawBall(context, ball);

    ball.centerX += ball.directionByX;
    ball.centerY += ball.directionByY;

    ball.borderX = ball.centerX + ball.radius;
    if (ball.borderX <= 2 * ball.radius || ball.borderX >= context.canvas.width) {
        ball.directionByX *= -1;
    }

    ball.borderY = ball.centerY + ball.radius;
    if (ball.borderY <= 2 * ball.radius || ball.borderY >= context.canvas.height) {
        ball.directionByY *= -1;
    }

    requestAnimationFrame(function () {
        moveBall(context, ball);
    });
}