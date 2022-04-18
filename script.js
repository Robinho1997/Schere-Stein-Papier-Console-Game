"use strict";

let antworten = ["Schere","Stein","Papier"]

function computerPlay() {  // wählt zufälligen String aus dem Array
    return antworten[Math.floor(Math.random() * antworten.length)];

}

// führt eine Runde aus
function playRound(playerSelection,computerSelection) {
        if (playerSelection == antworten[0] && computerSelection == antworten[2]) {
        userPunktzahl++; // erhöht die Punktzahl um 1
        return "Du gewinnst! Schere besiegt Papier.";
        }
        else if (playerSelection == antworten[1] && computerSelection == antworten[0]) {
        userPunktzahl++;
        return "Du gewinnst! Stein besiegt Schere.";
        }
        else if (playerSelection == antworten[2] && computerSelection == antworten[1]) {
        userPunktzahl++;
        return "Du gewinnst! Papier besiegt Stein.";
        }
        else if (playerSelection == antworten[0] && computerSelection == antworten[1]) {
        computerPunktzahl++;
        return "Du verlierst! Stein besiegt Schere."
        }
        else if (playerSelection == antworten[1] && computerSelection == antworten[2]) {
        computerPunktzahl++;
        return "Du verlierst! Papier besiegt Stein.";
        }
        else if (playerSelection == antworten[2] && computerSelection == antworten[0]) {
        computerPunktzahl++;
        return "Du verlierst! Schere besiegt Papier.";
        }
        else {
        return "Unentschieden!";
        }
}       

let userPunktzahl = parseInt(0);
let computerPunktzahl = parseInt(0);
    
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Schere, Stein, Papier?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Deine Punktzahl: " + userPunktzahl);
    console.log("Computer's Punktzahl: " + computerPunktzahl);
}


 


