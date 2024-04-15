const btnTotal = document.querySelector(".equals");
const resetBtn = document.querySelector(".c-btn");
const displayIn = document.querySelector(".result");
let buttons = document.querySelectorAll(".btn-numbers");
let operators = document.querySelectorAll(".operator");
let primoValore = 0;
let secondoValore = 0;
let operatoreValore = "";


for(let i = 0; i < buttons.length; i++) {
    const valoreBottoni = buttons [i];
    valoreBottoni.addEventlistener ("click", btnNumeri);
}

for (let i = 0; i< operators.length; i++) {
    const valoriOperatori = operators[i];
    valoriOperatori.addEventListener("click", operatori);
}

btnTotal.addEventListener("click", btnTotal);
resetBtn.addEventListener("click", function(){
    window.location.reload();
})