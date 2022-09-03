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
        setTimeout(() => {
            alert("O jogo acabou! O vencedor é " + playerTime);
        }, 10);
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}

restartButton.addEventListener("click", () => {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
});