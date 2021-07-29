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

console.log(numberToGuess);
document.getElementById("numberToGuess").innerHTML = numberToGuess;

// FACCIO PARTIRE UN TIMER DA 30 SEC. ALLA FINE DEL QUALE SCOMPAIONO I NUMERI DA INDOVINARE E MI CHIEDE DI INSERIRLI

let secondi = 5;            /*DEVE ESSERE IMPOSTATO A 30 SEC*/

let idInterval = setInterval(timer, 1000);

function timer() {
    document.getElementById("timer").innerHTML = secondi;
    if (secondi == 0) {
        clearInterval(idInterval);
        document.getElementById("timer").innerHTML = "INSERISCI I 5 NUMERI CHE HAI VISTO PRECEDENTEMENTE";
        document.getElementById("numberToGuess").innerHTML = "";
    }
    secondi--;
}

// CHIEDO DI INSERIRE I NUMERI COMPARSI PRIMA

let userNumbersContainer = [];
setTimeout (waitSevenSec, 7000);
setTimeout (waitEightSec, 8000);

function waitSevenSec() {
    while (userNumbersContainer.length < level) {
        let userNumber = parseInt(prompt("Inserisci i numeri"));
        if (userNumbersContainer.includes(userNumber) == false) {
            userNumbersContainer.push(userNumber);
        }
    }
}

// SE I NUMERI INSERITI SI TROVANO TRA I NUMERI COMPARSI PRIMA LI MOSTRO

let matchedNumber = [];

function waitEightSec() {
    for (let i=0; i < level; i++){
        if (isInArray(numberToGuess, userNumbersContainer[i]) == true) {
            matchedNumber.push(userNumbersContainer[i]);
        }
    }
    document.getElementById("numberToGuess").innerHTML = "Numeri da indovinare: " + numberToGuess;
    document.getElementById("timer").innerHTML = " ";
    document.getElementById("matchedNumber").innerHTML = "Numeri indovinati: " + matchedNumber;
}


/* FUNZIONI */

function getRndNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
}

function isInArray (contenitore, numero) {
    let find = false;
    for (let i = 0; i < contenitore.length; i++) {
        if (contenitore[i] == numero) {
            find = true;
            return find;
        }
    }
    return find;
}