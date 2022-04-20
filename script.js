"use strict";


document.getElementById("Schere").onclick = spieler; 
document.getElementById("Stein").onclick = spieler;  // ID durch dom abrufen , bei klick soll funktion spieler() ausgeführt werden
document.getElementById("Papier").onclick = spieler;

function spieler() {
    let spielerWahl = this.id;   // Inhalt der Variable spielerWahl soll die ID des Elementes sein das durch klicken die Funktion ausruft
    
    let antworten = ["Schere","Stein","Papier"];  // Array mit 3 verschiedenen Werte, jeweils die Antwortmöglichkeiten
    let computerWahl = antworten[Math.floor(Math.random() * antworten.length)]; // die 3 Werte des Arrays zufällig auswählen und speichern

    document.getElementById("computerAuswahl").innerHTML = "Computerwahl: " + computerWahl;
    document.getElementById("spielerAuswahl").innerHTML = "Spielerwahl: " + spielerWahl; // Inhalt des Elementes ändern
    document.getElementById("ergebniss").innerHTML = spielen(spielerWahl,computerWahl); 
    // Funktion soll ausgeführt werden daraufhin und die Daten danach im Element ausgegeben werden


    function spielen(spielerWahl,computerWahl) {  // Funktion mit zwei Parametern, Schere, Stein, Papier. Was soll bei Antworten passieren
        if (spielerWahl == "Schere" && computerWahl == "Papier") {       
            return "Du gewinnst!" + "<br>" + "Schere besiegt Papier.";
            }
            else if (spielerWahl == "Stein" && computerWahl == "Schere") {  
            return "Du gewinnst!" + "<br>" + "Stein besiegt Schere.";
            }
            else if (spielerWahl == "Papier" && computerWahl == "Stein") {      
            return "Du gewinnst!" + "<br>" + "Papier besiegt Stein.";
            }
            else if (spielerWahl == "Schere" && computerWahl == "Stein") { 
            return "Du verlierst!" + "<br>" +  "Stein besiegt Schere."
            }
            else if (spielerWahl == "Stein" && computerWahl == "Papier") {
            return "Du verlierst!" + "<br>" +  "Papier besiegt Stein.";
            }
            else if (spielerWahl == "Papier" && computerWahl == "Schere") {
            return "Du verlierst!" + "<br>" +  "Schere besiegt Papier.";
            }
            else {
            return "Unentschieden!";
            }
    }       
}