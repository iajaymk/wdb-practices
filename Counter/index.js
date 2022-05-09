const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
let counter = 0
let countEl = document.getElementById("count")

function increment(){
    counter += 1
    countEl.innerText = counter
}
function decrement(){
    counter -= 1
    countEl.innerText = counter
}


incrementBtn.addEventListener('click',increment)
decrementBtn.addEventListener('click', decrement)