// Sparar ett särskilt element i en variabel
const parentList = document.getElementById('parentList');

// Lägger en eventListener på variabeln
// Som lyssnar på 'click' och kör en funktion
parentList.addEventListener('click', (event) => {
  // Funktionen  kollar om
  if (event.target.tagName === 'LI') {
    const listElement = event.target;
    listElement.innerHTML = 'Hejsan'; // Byter innehållet till 'Hejsan!' när event utförs
    listElement.style.backgroundColor = 'green'; // Lägger till en bakgrundsfärg när event utförs
    console.log(`Clicked on ${event.target.textContent}`);
  }
});

const array = ['be', 'bu', 'bö', 'bä', 'bi', 'ba'];
listElement.textContent = array[Math.floor(Math.random() * array.length)];
