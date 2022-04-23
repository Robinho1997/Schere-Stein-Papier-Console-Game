"use strict";
let spielstandSpieler = 0;
let spielstandComputer = 0;



document.getElementById("Schere").onclick = spieler; 
document.getElementById("Stein").onclick = spieler;  // ID durch dom abrufen , bei klick soll funktion spieler() ausgeführt werden
document.getElementById("Papier").onclick = spieler;

function spieler() {
    let spielerWahl = this.id;   // Inhalt der Variable spielerWahl soll die ID des Elementes sein das durch klicken die Funktion ausruft
    
    let antworten = ["Schere","Stein","Papier"];  // Array mit 3 verschiedenen Werte, jeweils die Antwortmöglichkeiten
    let computerWahl = antworten[Math.floor(Math.random() * antworten.length)]; // die 3 Werte des Arrays zufällig auswählen und speichern
    
  
    document.getElementById("computerAuswahl").innerHTML = "Computerwahl: " + computerWahl;
    document.getElementById("spielerAuswahl").innerHTML = "Spielerwahl: " + spielerWahl; // Inhalt des Elementes ändern
    document.getElementById("ergebniss").innerHTML = "Ergebniss: " + spielen(spielerWahl,computerWahl); 
    document.getElementById("spielstandSpieler").innerHTML = "Deine Punktzahl: " + spielstandSpieler;
    document.getElementById("spielstandComputer").innerHTML = "Computer Punktzahl: " + spielstandComputer;
    

    
    if (spielstandSpieler === 5) { // Spielstand des Spielers
        alert("Herzlichen Glückwunsch! Du hast gewonnen. :)");    // Bei gewinn
        spielstandSpieler = 0;    
        spielstandComputer = 0;                                                                              // Punktzahl zurücksetzten
    } else if (spielstandComputer === 5) {                                                                      // Spielstand des Computers
        alert("Computer hat gewonnen! Du hast verloren. :(");     // Bei Niederlage
        spielstandComputer = 0;
        spielstandSpieler = 0;                                                                          // Punktzahl zurücksetzten
    };

    function spielen(spielerWahl,computerWahl) {  // Funktion mit zwei Parametern, Schere, Stein, Papier. Was soll bei Antworten passieren
        if (spielerWahl == "Schere" && computerWahl == "Papier") {  
                spielstandSpieler++;     
            return "Du gewinnst!";
            }
            else if (spielerWahl == "Stein" && computerWahl == "Schere") {  
                spielstandSpieler++; 
            return "Du gewinnst!";
            }
            else if (spielerWahl == "Papier" && computerWahl == "Stein") {  
                spielstandSpieler++;     
            return "Du gewinnst!";
            }
            else if (spielerWahl == "Schere" && computerWahl == "Stein") { 
                spielstandComputer++;
            return "Du verlierst!"
            }
            else if (spielerWahl == "Stein" && computerWahl == "Papier") {
                spielstandComputer++;
            return "Du verlierst!";
            }
            else if (spielerWahl == "Papier" && computerWahl == "Schere") {
                spielstandComputer++;
            return "Du verlierst!";
            }
            else {
            return "Unentschieden!";
            }
    }       
}