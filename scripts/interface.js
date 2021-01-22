function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
}

function handleClick(event) {
    let square = event.target
    let position = square.id 

    if(handleMove(position)) {
        if(symbols[playerTime] == 'o') {
            setTimeout(() => {
                alert(`O jogo acabou 🛡 foi o vencedor`)
                resetGame()
            }, 10)
        } else {
            setTimeout(() => {
                alert(`O jogo acabou ⚔ foi o vencedor`)
                resetGame()
            }, 10)
        }
    }
    updateSquare(position)
}

function resetGame() {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if(symbol != '') {
            square.innerHTML = ''
        }
    })
    reset()
}

document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")
    let reset = document.getElementById("reset")
    
    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })

    reset.addEventListener("click", resetGame)
})