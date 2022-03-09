let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    countEl.innerText = 0
    saveEl.textContent += countStr
    count = 0
}