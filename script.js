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

const cars = [
    {
        id: 1,
        type: 'BMW',
        year: 2022,
        price: '100 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F1.png',
    },
    {
        id: 2,
        type: 'Tesla',
        year: 2019,
        price: '400 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F2.png',
    },
    {
        id: 3,
        type: 'BMW',
        year: 2022,
        price: '1 000 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F3.png',
    },
    {
        id: 4,
        type: 'Ferrari',
        year: 1955,
        price: '50 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F4.png',
    },
    {
        id: 5,
        type: 'Lamborghini',
        year: 1957,
        price: '300 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F5.png',
    },
    {
        id: 6,
        type: 'Volvo',
        year: 1980,
        price: '10 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F6.png',
    },
    {
        id: 7,
        type: 'Aston Martin',
        year: 2023,
        price: '2 000 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F7.png',
    },
    {
        id: 8,
        type: 'Rolls Royce',
        year: 2010,
        price: '250 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F8.png',
    },
    {
        id: 9,
        type: 'Mazerati',
        year: 2020,
        price: '700 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F9.png',
    },
    {
        id: 10,
        type: 'Fiat',
        year: 1958,
        price: '20 000 kr',
        url: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F10.png',
    },
];

const existingProductCard = document.querySelector('.productcard');

for (const car of cars) {
    console.log(
        `ID: ${car.id}, Type: ${car.type}, Year: ${car.year}, Price: ${car.price}, URL: ${car.url}\n`
    );

    const divCard = document.createElement('div');
    divCard.setAttribute('class', 'productcard');

    const img = document.createElement('img');
    img.setAttribute('src', car.url);

    const divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'information');

    const divName = document.createElement('div');
    divName.setAttribute('class', 'name');
    divName.textContent = car.type;

    const divDescription = document.createElement('div');
    divDescription.setAttribute('class', 'description');
    divDescription.textContent = car.year;

    const cta = document.createElement('a');
    cta.setAttribute('class', 'ctabutton');
    cta.setAttribute('href', '#');
    cta.textContent = car.price;

    divCard.appendChild(img);
    divCard.appendChild(divInfo);

    divInfo.appendChild(divName);
    divInfo.appendChild(divDescription);
    divInfo.appendChild(cta);

    existingProductCard.insertAdjacentElement('afterend', divCard);
}
