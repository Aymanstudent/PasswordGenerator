
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]

let firstRandomPassword = document.querySelector("#first-password")
let secoundRandomPassword = document.querySelector("#secound-password")
function generatePassword(){
    let firstPassword = ""
    let secoundPassword = ""
    for (let i = 0 ; i < 15 ; i++){
        let firstRandom = Math.floor(Math.random() * characters.length)
        let secoundRandom = Math.floor(Math.random() * characters.length)
        firstPassword += characters[firstRandom]
        secoundPassword += characters[secoundRandom]
    }
    firstRandomPassword.value = firstPassword
    secoundRandomPassword.value = secoundPassword
}




