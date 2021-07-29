// Un alert() espone 5 numeri generati casualmente.          FATTO
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// CREO UN ARRAY E CI INSERISCO ALL'INTERNO I 5 NUMERI GENERATI CASUALMENTE

let level = 5;
let numberToGuess = [];

while (numberToGuess.length < level) {
    var number = getRndNumber(1, 100);
    if (numberToGuess.includes(number) == false) {
        numberToGuess.push(number);
    }
}

document.getElementById("numberToGuess").innerHTML = numberToGuess;

// FACCIO PARTIRE UN TIMER DA 30 SEC. ALLA FINE DEL QUALE SCOMPAIONO I NUMERI DA INDOVINARE E MI CHIEDE DI INSERIRLI

let secondi = 5;            /*DEVE ESSERE IMPOSTATO A 30 SEC*/

let idInterval = setInterval(timer, 1000);

function timer() {
    document.getElementById("timer").innerHTML = secondi;
    if (secondi == 0) {
        clearInterval(idInterval);
        document.getElementById("timer").innerHTML = "INSERISCI I 5 NUMERI COMPARSI NEGLI ALERT";
        document.getElementById("numberToGuess").innerHTML = "";
    }
    secondi--;
}



/* FUNZIONI */

function getRndNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
}