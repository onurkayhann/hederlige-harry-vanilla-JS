// Krav för G:
// 1. skapa en script.js-fil som anropas från HTML-filen
// KLAR✅

// 2. Lägg till en eventlyssnare på knappen med id "button-contact" som kör en funktion när man klickar på knappen.
// Funktionen som körs när man klickar på knappen ska läsa texten från text-input:en
// med id "email" och logga den texten i konsolen med console.log
// KLAR✅
const button = document.getElementById('button-contact');
const email = document.getElementById('email').value;

button.addEventListener('click', function () {
    console.log(email);
});
