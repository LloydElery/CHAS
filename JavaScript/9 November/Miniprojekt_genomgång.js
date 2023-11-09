const dataOutputSection = document.getElementById('dataOutputSection'); // (7) Variabel för parent-element till 'p'
const buttonSection = document.getElementById('swapiInputButtons'); // (8) Skapar knappar
let paragraph; // (14)

function fetchPeople() {
  // (1) Skapar en funktion som hämtar information från ett API
  const url = 'https://swapi.dev/api/people';
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Gör vi någonting med den data vi hämtat

      // (3) Skapar en array lista mer resultaten i json filen
      const result = data.results; // Skapas inom funktionen då den bara behöver finnas i den här funktionen.
      displayPeople(result); // (5) (Skickar) Kallar på funktionen som ska visa upp information för användaren
      console.log(result); // Visar resultatet i consolen
    })
    .catch(function (error) {
      // Vad gör funktionen om den inte kan hitta ngn info
      console.log('Error: ', error);
    });
}

/* function displayPeople(result) {
  // (5.1) Visar 'people' för användaren
  for (let i = 0; i < result.length; i++) {
    const paragraph = document.createElement('p'); // Skapar en p-tag för varje object i arrayen
    paragraph.innerHTML = result[i].name; // Lägger till innehållet i 'p'-taggen
    dataOutputSection.appendChild(paragraph); // (7.1) Lägger till 'p' elementet med innehåll i ett parent-element
    console.log(result[i].name);
  }
} */

function displayPeople(result) {
  // (8.1) En kopia av functionen ovan men nu gör vi knappar
  // Visar 'people' för användaren
  for (let i = 0; i < result.length; i++) {
    // Skriver ut 'antal' resultat
    const button = document.createElement('button'); // Skapar en button-tag för varje object i arrayen
    // button.innerHTML = result[i].name; // Lägger till innehåll i det nya button-elementet
    button.innerHTML = i + 1 + '. ' + result[i].name; // (11.1) Lägger till '#.' framför varje knapp-text
    buttonSection.appendChild(button); // Lägger till 'button' elementet med innehåll i ett parent-element
    // -> Skapar 4 knappar med namnet från de fyra första objekten

    button.addEventListener('click', function () {
      fetchSinglePersonData(i + 1);
    }); // (10) Skapar ett event som ska lyssna efter klick
  }
}

function fetchSinglePersonData(number) {
  // (11) Skapar en funktion som ska hämta all information från ett objekt
  console.log('Result: '); // Kollar om functionen skriver ut eller ej

  // (12.1) Copy paste från med några undantag (1)
  fetch(`https://swapi.dev/api/people/${number}`) // Tar emot samma objekt men letar efter deras numerordning
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displaySinglePersonData(data); // (13.1) // Byter ut vilken data vi vill ta emot i funktionen 'displatSinglePersonData'
      console.log(data); // data istället för result
    })
    .catch(function (error) {
      console.log('Error: ', error);
    });
}

function displaySinglePersonData(data) {
  if (!paragraph) {
    // (14.1) Om paragraph INTE exicterar, skapa en paragraph
    paragraph = document.createElement('p'); // (14.2) Gör om till en global variabel och ger den sitt värde här
  }
  // (13.2) Hämtar data från ett individuellt objekt i json filen/api:t
  paragraph.innerHTML = `
  Name: ${data.name} <br>
  Height: ${data.height} cm <br>
  Gender: ${data.gender}<br>
  Skin Color: ${data.skin_color} <br>
  `; // Skapar innehåll får vårt paragraf element
  dataOutputSection.appendChild(paragraph); // Berättar vart paragrafen ska finnas i vårt dokument
}

const fetchButton = document.getElementById('fetchButton'); // (2) Global variabel för knapp // Denna finns i html

fetchButton.addEventListener('click', fetchPeople); // (4) Lägger till ett event på 'fetchButton' som lyssnar på 'click'
// Och därefter kör funktionen 'fetchPeople' // -> Visar en array med objekten i consolen
// console.log('Click Click!'); // (10.2) Kollar om eventListenern reagerar
