let firstCard = 12  
let secondCard = 9
let sum = firstCard + secondCard
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let message = document.getElementById("message-el") 

function startGame(){
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if(sum < 21){
        message.textContent = "Draw a new card?"
    }
    else if(sum === 21){
        message.textContent = "You've got Blackjack!"
    }
    else{
        message.textContent = "You are out of the game!"
    }
}

function newCard(){
    let card = 7
    firstCard = secondCard
    secondCard = card
    sum += card
    renderGame()
}