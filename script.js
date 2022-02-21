let quantity = document.getElementById("quantity").textContent;
quantity = Number(quantity);
document.getElementById("quantity").textContent = quantity;

function minus(){
    if(quantity > 1){
        quantity = quantity - 1;
        document.getElementById("quantity").textContent = quantity;
    }
}

function plus(){
    if(quantity < 10){
        quantity = quantity + 1;
        document.getElementById("quantity").textContent = quantity;
    }
}