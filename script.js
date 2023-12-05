// Krav för G:
// 1. skapa en script.js-fil som anropas från HTML-filen
// KLAR✅

// 2. Lägg till en eventlyssnare på knappen med id "button-contact" som kör en funktion när man klickar på knappen.
// Funktionen som körs när man klickar på knappen ska läsa texten från text-input:en
// med id "email" och logga den texten i konsolen med console.log
// KLAR✅
const button = document.getElementById('button-contact');

button.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    console.log(email);
});

// 3. Skriv en funktion createParagraph som tar emot en text som parameter.
// Funktionen ska sedan skapa en <p>-tag med den inskickade texten som värde.
// Funktionen ska sedan returnera den skapade <p>-taggen.
// KLAR✅
let myText = 'Jag heter Onur Kayhan';

function createParagraph(text) {
    let paragraph = document.createElement('p'); // Skapar p-tagg

    paragraph.textContent = text; // sätt texten som värde för p
    document.body.appendChild(paragraph);

    // return paragraph;
}

createParagraph(myText);

// 4. Varje gång man ÄNDRAR på phone så ska funktionen createParagraph anropas -
// du skickar med värdet i phone och p-taggen som returneras ska skrivas till console.log - både p och phone?
const phoneElements = document.getElementsByClassName(
    'contact__form__box__input'
);
const phone = phoneElements[2];

phone.addEventListener('input', function () {
    const phoneText = 'Filling the phone field';

    if (phone.value.trim() !== '') {
        createParagraph(phoneText);
        console.log(phone.value, phoneText);
    } else {
        console.log('Fill in the phone field');
    }
});
