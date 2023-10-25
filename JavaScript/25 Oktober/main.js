const cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars);

//console.log(cars[0]);

cars[3] = 'Tesla';

//console.log(cars[3]);

cars[0] = 'Audi';

//console.log(cars);

for (let i = 0; i < cars.length; i++) {
  Console.log(cars[i]);
}

let obj = {
  a: 'Hello World',
  b: 42,
  c: true,
};
console.log(obj.a);

obj.a = 'Good morning World!';
console.log(obj.a);

const person = { firstName: 'John', lastName: 'Doe' };

function addNumbers(a, b) {
  let result = a + b;
  console.log('Result is: ', result);
  return result;
}

let summa = addNumbers(1, 1);

if (summa > 5) {
  console.log('This number is grater than 5!');
} else if (summa == 5) {
  console.log('Nice one! You did it');
} else {
  console.log('Thats a small number, try a bigger one!');
}

// EX 1: KASTA TÄRNING

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Roll five dice and store the results in separate variables
const die1 = rollDie();
const die2 = rollDie();
const die3 = rollDie();
const die4 = rollDie();
const die5 = rollDie();

const totalSum = die1 + die2 + die3 + die4 + die5;

console.log('You rolled five dice:', die1, die2, die3, die4, die5);
console.log('Total sum:', totalSum);

// EX 2: Totalsum

// if (totalSum > 14) {
//   console.log('The total sum is greater than 14.');
// } else {
//   console.log('The total sum is NOT greater than 14.');
// }

// EX 3: Switch for checking day of week

const dayOfWeek = 2;

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday");
    break;
  case 2:
    console.log("It's Tuesday");
    break;
  case 3:
    console.log("It's Wednesday");
    break;
  case 4:
    console.log("It's Thursday");
    break;
  case 5:
    console.log("It's Friday");
    break;
  case 6:
    console.log("It's Saturday");
    break;
  case 7:
    console.log("It's Sunday");
    break;
  default:
    console.log('Invalid day of the week');
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

for (const letters in { a: '1', b: '2', c: '3' }) {
  console.log(`${letter}: ${object[letter]}`);
}
