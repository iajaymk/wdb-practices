let pwdArea = document.getElementById("pwds")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")
function generatePassword(){
    let passwords = []
    pwdArea.style.display="flex";

    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pwdsize = 8

    for(let j=0;j<4;j++){
        let password = ""
        for(let i=0;i<pwdsize;i++){
            let randomNum = Math.floor(Math.random()*chars.length)+1
            password += chars.substring(randomNum, randomNum+1)
        }
        passwords.push(password)
    }
    password1.value = passwords[0]
    password2.value = passwords[1]
    password3.value = passwords[2]
    password4.value = passwords[3]
}

function copy1(){
    let copypassword = document.getElementById("password1")
    copypassword.select()
    navigator.clipboard.writeText(copypassword.value);
    alert("Copied to Clipboard!")
    
}
function copy2(){
    let copypassword = document.getElementById("password2")
    copypassword.select()
    navigator.clipboard.writeText(copypassword.value);
    alert("Copied to Clipboard!")
    
}
function copy3(){
    let copypassword = document.getElementById("password3")
    copypassword.select()
    navigator.clipboard.writeText(copypassword.value);
    alert("Copied to Clipboard!")
    
}
function copy4(){
    let copypassword = document.getElementById("password4")
    copypassword.select()
    navigator.clipboard.writeText(copypassword.value);
    alert("Copied to Clipboard!")
    
}