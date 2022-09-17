// Arquivo game.js onde fica a regra de negócio do jogo.

// Iniciando as variáveis.
let board = ['', '', '', '', '', '', '', '', '']; // Quadrados do jogo da velha.
let playerTime = 0; // Jogador 0 e 1.
let symbols = ['o', 'x']; // Símbolos dos jogadores, o = 0 e x = 1.
let gameOver = false; // Iniciando a variável gameOver como falso.
let winStates = [ // Array de cada quadrado onde será armazenado as posições.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Função para colocar os símbolos de cada jogador nos quadrados e suas respectivas posições.
function handleMove(position) {
    if (gameOver) { // Se gameOver for verdade. 
        return; // Retorna e fim de jogo.
    }
    if (board[position] == "") { // Se o quadrado e sua respectiva posição estiver vazio.
        board[position] = symbols[playerTime]; // O jogador que estiver na vez escolhe um quadro para jogar.

        gameOver = isWin(); // gameOver recebe função Vitória.

        if (gameOver == false) { // Se gameOver for falso.
            // Se jogador da vez for zero, troca a vez para o jogador 1 se não jogador 0 joga.
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver; // Se for verdadeiro, retorna gameOver.
}

function isWin() { // Função Vitória
    for (let i = 0; i < winStates.length; i++) { // Looping dentro do array winStates.
        let sequencia = winStates[i]; // Variável sequencia recebe cada posição(index) do array winStates.
        let position1 = sequencia[0]; // Posição 1 recebe sequencia 0.
        let position2 = sequencia[1]; // Posição 2 recebe sequencia 1.
        let position3 = sequencia[2]; // Posição 3 recebe sequencia 2.
        if (board[position1] == board[position2] // Se quadrado da posição 1 for igual quadrado da posição 2.
            && board[position1] == board[position3] // E quadrado da posição 1 for igual a quadrado da posição 3.
            && board[position1] != "") { // E quadrado da posição 1 se for vazio.
            return true; // Retorna verdadeiro.
        }
    }
    return false; // Retorna falso.
}