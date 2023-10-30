let x = 9.656;

const fixedX = x.toFixed(1);
console.log(fixedX);

const number = Number(true);
console.log(number);

const nummer = 10;
console.log(nummer.toString());

const theType = typeof nummer.toString();
console.log(theType);

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = text.length; //textens längd

text = 'Please visit Microsoft!';
let newText = text.replace('Microsoft', 'Chas');
console.log(text);

console.log(newText);

text = 'detta är en text';
let storText = text.toUpperCase();

console.log(storText);

storText = text.toLocaleLowerCase();

console.log(storText);

let förnamn = 'John';
let efternamn = 'Doe';
let fulltNamn = förnamn.concat(' ', efternamn);
console.log(fulltNamn);

text = ' Text med extra mellanslag ';
console.log(text);
let trimmadText = text.trim();
console.log(trimmadText);

text = ['apa', 2, 'apa'];
console.log(text);
