let restartButton = document.getElementById("restart");

document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {
        document.getElementById("result").innerHTML = playerTime;
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}

// Botão para reiniciar o jogo.
restartButton.addEventListener("click", () => {
    let squares = document.getElementsByClassName("square");
    for (let i of squares) {
        i.innerHTML = "";
    };
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

});