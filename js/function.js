
function btnNumeri() {
    if (displayIn.innerHTML.length <= 10) {
        displayIn.innerHTML+= this.innerHTML;
    }
}


function operatori () {
    primoValore = parseInt(displayIn.innerHTML);
    displayIn.innerHTML = "";
    console.log(primoValore);
    operatoreValore = this.innerHTML;
}

function BtnTotale() {
    secondoValore = parseInt(displayIn.innerHTML);
    console.log(secondoValore);
    switch(operatoreValore) {
        case "+" :risultato = primoValore + secondoValore ; break;
        case "-" :risultato = primoValore - secondoValore; break;
        case "*" :risultato = primoValore * secondoValore; break;
        case "/" :risultato = primoValore / secondoValore; break;
    }
    displayIn.innerHTML = risultato;
}