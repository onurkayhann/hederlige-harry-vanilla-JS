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
}

// 4. Varje gång man ÄNDRAR på phone så ska funktionen createParagraph anropas -
// du skickar med värdet i phone och p-taggen som returneras ska skrivas till console.log - både p och phone?
const phoneElements = document.getElementsByClassName(
    'contact__form__box__input'
);
const phone = phoneElements[2];

phone.addEventListener('input', function () {
    const phoneText = 'Filling the phone field';

    if (phone.value.trim() !== '') {
        createParagraph(phone.value);
        console.log(phone.value, phoneText);
    } else {
        console.log('Please dont leave it empty, fill in the phone field');
    }
});

// 5. Skapa ett PRIVAT repository på Github, alla nödvändiga filer skall pushas dit.
// Bjud in marcus.brederfalt@systementor.se som Collaborator✅

// 6. Skriv in URL till ditt github som svar här i Learnpoint

// Krav för VG:

// 6. Skapa en ny branch som du kallar för VG✅

// 7. När man ändrar email-fältet: Om man skrivit in en ".se"-address så ska du:
// skapa/visa ett fält som heter swedishpostalcode med klass bx-code.
// Annars ska den INTE visas
const newEmail = document.getElementById('email');

const i = document.createElement('i');

const br = document.createElement('br');

let parentNode = document.querySelector('.contact__form__box');

// Function to check email and add input
function checkEmail() {
    if (newEmail.value.includes('.se')) {
        const i = document.createElement('i');
        let input = document.createElement('input');
        let newDiv = document.createElement('div');

        i.setAttribute('class', 'bx-code');
        input.setAttribute('class', 'contact__form__box__input');
        newDiv.setAttribute('class', 'contact__form__box');
        input.placeholder = 'Swedish postal code';

        const phoneInput = document.querySelector(
            '.contact__form__box input[type="tel"]'
        );

        i.appendChild(input);
        newDiv.appendChild(i);
        newDiv.appendChild(br);

        // Insert the new div after the existing contact__form__box div
        parentNode.insertAdjacentElement('afterend', newDiv);
    }
}

newEmail.addEventListener('input', checkEmail);

// 8. Skapa en array med 10 bilar - varje bil ska ha bildurl + id  + typ + årtal. Dessa ska renderas så som dom görs idag
// id = löpnummer bildurl = det finns ca 100 bilar på

// https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F13.png
// osv där 13 på slutet är ett löpnummer
// Pris = sätt till vad du vill
