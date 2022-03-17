
let sum = 0
let cards = []
let isAlive = false
let hasBlackjack = false
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let message = document.getElementById("message-el") 
let startEl = document.getElementById("start-el")
function startGame(){
    isAlive = true
    let firstCard = randomCard()  
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1] 
    renderGame() 
    startEl.textContent = "START GAME"
}

function randomCard(){
    let card = Math.floor(Math.random()*13) + 1
    console.log(card)
    if(card === 1){
        return card = 11
    }
    else if(card > 10){
        return card = 10
    }
    else{
        return card
    }
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if(sum < 21){
        isAlive = true
        message.textContent = "Draw a new card?"
    }
    else if(sum === 21){
        isAlive = true
        hasBlackjack = true
        message.textContent = "You've got Blackjack!"
    }
    else{
        isAlive = false
        message.textContent = "You are out of the game!"
    }
}

function newCard(){
    startEl.textContent = "NEW GAME"
    if(isAlive === true && hasBlackjack === false){
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else{
        alert(message.textContent)
    }
}