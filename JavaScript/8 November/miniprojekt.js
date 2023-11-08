// 1. Skapa en funktion som fetchar från API
// - async/await
// - try

// 2. Hämtar character från API
// 3. Vi vill loopa igenom och hämta och visa alla characters

let buttonClicked = false;

async function fetchData() {
  const url = 'https://swapi.dev/api/people';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response}`);
    }
    const data = await response.json();
    // console.log(data.results);
    displayButton(data);

    if (buttonClicked == true) {
      displayButton(data);
    }
    displayData(data);
    console.log(data);
  } catch (error) {
    console.error('Error occured:', error);
  }
}

function displayButton(data) {
  const results = data.results;

  for (let i = 0; i < results.length; i++) {
    const buttonLabel = results[i].name;
    const characterButton = document.createElement('button');
    const buttonContainer = document.getElementById('button-container');

    characterButton.textContent = buttonLabel;
    buttonContainer.appendChild(characterButton);

    characterButton.addEventListener('click', displayData);
  }
}

function displayData(data) {
  const characters = data.results;

  for (let i = 0; i < characters.length; i++) {
    const characterName = characters[i].name;
    const section = document.querySelector('section');
    const characterCard = document.createElement('div');
    const characterTitle = document.createElement('h3');
    const characterAge = document.createElement('p');

    section.appendChild(characterCard);
    characterCard.appendChild(characterTitle);
    characterCard.appendChild(characterAge);

    characterTitle.textContent = characterName;

    /*     if (characterName === 'Luke Skywalker') {
      console.log('I am your father');
      const headerTitle = document.querySelector('.header-title');
      const nameParagraph = document.createElement('p');
      nameParagraph.textContent = characterName;
      headerTitle.appendChild(nameParagraph);
    } */
  }
}

function showCharacter() {
  buttonClicked = true;
}

fetchData();
