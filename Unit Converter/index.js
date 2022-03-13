var inputBox = document.getElementById('input-box')
let mtoft = document.getElementById('mtoft')
let ftom = document.getElementById('fttom')
let ltog = document.getElementById('ltog')
let gtol = document.getElementById('gtol')
let ktop = document.getElementById('ktop')
let ptok = document.getElementById('ptok')


inputBox.onkeyup = function(){
    document.getElementById('meters').innerHTML = inputBox.value;
    document.getElementById('feet').innerHTML = inputBox.value;
    document.getElementById('liters').innerHTML = inputBox.value;
    document.getElementById('gallons').innerHTML = inputBox.value;
    document.getElementById('kilos').innerHTML = inputBox.value;
    document.getElementById('pounds').innerHTML = inputBox.value;

    mtoft.innerHTML = inputBox.value * 3.28084
    ftom.innerHTML = inputBox.value * 0.3048
    ltog.innerHTML = inputBox.value * 0.264172
    gtol.innerHTML = inputBox.value * 3.78541
    ktop.innerHTML = inputBox.value * 2.20462
    ptok.innerHTML = inputBox.value * 0.453592



}