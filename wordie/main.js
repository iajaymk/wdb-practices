const wordLength = 5
const chances = 6

const board = document.getElementById("board")

for(let i = 0; i < chances; i++){
    const row = document.createElement("div")
    board.appendChild(row)

    for(let j = 0; j < wordLength; j++){
        const column = document.createElement("input")
        board.appendChild(column)
    }
}