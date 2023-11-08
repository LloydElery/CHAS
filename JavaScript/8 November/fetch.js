// Sparar ett div element till en variabel.
const dataContainer = document.getElementById('data-container');

// Hämtar JSON data
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      //if error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // if success!
    displayData(data); // Tar data och ger åtkost till de i funktionen displayData
    console.log(data);

    // Display the data on the page
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Skriver ut JSON data
function displayData(data) {
  // Loopar genom funktionen och ger 'i' +1 varje gång den loopar tills att det inte finns mer information att hämta.
  for (let i = 0; i < data.length; i++) {
    const paragraph = document.createElement('p'); // Skapar paragraf
    paragraph.innerHTML = data[i].name; // Hämtar särskild information från 'data' på '[index i]'bara värdet på 'namn'
    paragraph.innerHTML = `Namn: ${data[i].name} <br> Username: ${data[i].username}`; // Hämta mer information samt lägg till information.
    dataContainer.appendChild(paragraph); // Hämtar och skriver ut datan som hämtades
  }
}

fetchData();
