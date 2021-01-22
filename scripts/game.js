let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let gameOver = false

let symbols = ['x', 'o']

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {
    if (gameOver) {
        return
    }
    if (board[position] == '') {
        board[position] = symbols[playerTime]
        gameOver = isWin()

        if (!gameOver) {
            playerTime = (playerTime == 0) ? 1 : 0
        }
    }
    return gameOver
}

function isWin() {
    for (let winState in winStates) {
        let sequence = winStates[winState]

        let position0 = sequence[0]
        let position1 = sequence[1]
        let position2 = sequence[2]

        if (board[position0] == board[position1] && board[position0] == board[position2] && board[position0] != '') {
            return true
        }
    }
    return false
}

function reset() {
    board = ['', '', '', '', '', '', '', '', '']
    playerTime = 0
    gameOver = false
}