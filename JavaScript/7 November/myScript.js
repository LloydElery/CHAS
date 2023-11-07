// sect = den första sectionen
const sect = document.querySelector('section');
// para = skapar ett nytt p-element
const para = document.createElement('p');
// lägg till mer innehåll i 'para' =
para.textContent = 'We hope you enjoyed the ride.';
// lägg till innehållet av 'para' som är ett childelement till 'sect'
sect.appendChild(para);
// Skapar en ny variabel som innehåller ett nytt element, h2
const header2 = document.createElement('h2');
// lägg till innehåll i form av text
header2.textContent = 'Detta är en tillagd header';
// anropa det nya innehållet där du vill ha det
sect.appendChild(header2);

const buttonText = document.createElement('p');
sect.appendChild(buttonText);

let showDate = false;

let button = document.querySelector('button');

button.addEventListener('click', displayDate);

function displayDate() {
  if (showDate == false) {
    const paragraf = document.querySelector('p');
    paragraf.innerHTML = '';
    showDate = true;
  } else if (showDate == true) {
    paragraf = document.querySelector('p');
    paragraf.innerHTML = Date();
    showDate = false;
  }
}
