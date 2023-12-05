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

// 3. Skriv en funktion createParagraph som tar emot en text som parameter.
// Funktionen ska sedan skapa en <p>-tag med den inskickade texten som värde.
// Funktionen ska sedan returnera den skapade <p>-taggen.
// KLAR✅
function createParagraph(text) {
    let paragraph = document.createElement('p'); // Skapar p-tagg

    paragraph.textContent = text; // sätt texten som värde för p

    return paragraph;
}

let myText = 'Jag heter Onur Kayhan';

let myParagraph = createParagraph(myText);

document.body.appendChild(myParagraph);

// 4. Varje gång man ÄNDRAR på phone så ska funktionen createParagraph anropas - 
// du skickar med värdet i phone och p-taggen som returneras ska skrivas till console.log
