// OBJECT IN FUNCTIONS -----------

function myFunc(theObject) {
  theObjekt.make = 'Toyota';
  return;
}

const myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
};

const mySecondCar = {
  make: 'Tesla',
  model: 'One',
  year: 2020,
};

const x = myCar.model;

console.log(x);

// 2. ARRAY IN FUNCTION -----------

const y = mySecondCar.year;
console.log(y);

function myFunk2(theArr) {
  theArr[3] = 'FAN!';
}

const arr = [45, 'hej', 34, 6];
console.log(arr[3]);

myFunk2(arr);
console.log(arr[3]);

// 3. NESTED SCOPE ------

// A nested function example

function getScore() {
  const num1 = 2;
  const num2 = 3;
  function add() {
    return `You scored ${num1 + num2}`;
  }
  return add();
}
let score = getScore(); // Då får vi att score = "You

console.log(score);
