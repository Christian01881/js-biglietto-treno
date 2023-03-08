/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const numeroKilometri = prompt(`inserire il numero di kilometri da percorrere: `);
const etaPasseggero = prompt(`inserire età del passeggero: `);
const prezzoKilometro = 0.21;
let prezzoFinale = (numeroKilometri * prezzoKilometro).toFixed(2);

if(etaPasseggero < 18){
    prezzoFinale = ((numeroKilometri * prezzoKilometro) - (prezzoFinale * 0.2)).toFixed(2);
} else if(etaPasseggero > 65){
    prezzoFinale = ((numeroKilometri * prezzoKilometro) - (prezzoFinale * 0.4)).toFixed(2);
}

document.getElementById("Biglietto").innerHTML = `<p>${prezzoFinale}</p>`;


