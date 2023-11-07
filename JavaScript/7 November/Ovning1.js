const section = document.querySelector('section');
const button = document.querySelector('button');
let buttonText = document.createElement('p');
buttonText.textContent = '';
section.appendChild(buttonText);

button.addEventListener(MouseEvent, greetings);

button.addEventListener('mouseover', greetingsMouseOver);
button.addEventListener('mouseout', greetingsMouseOut);
button.addEventListener('click', greetingsClick);

function greetingsMouseOver() {
  buttonText.textContent = 'Hej!';
}
function greetingsMouseOut() {
  buttonText.textContent = 'Hej då!';
}
function greetingsClick() {
  buttonText.textContent = "Oh, YES! That's the stuff!";
}
