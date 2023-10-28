console.log('MINIPROJEKT JAVASCRIPT');
console.log('Övning 1');

console.log('1');

// An array of food items
let shoppingList = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

shoppingList[2] = '';

// A for-loop that goes through the shoppinglist printing them one by one
for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}

console.log('2.');

// Takes the array [Shoppinglist] and filters it using a function that gets rid of 'item'.
shoppingList = shoppingList.filter(function (item) {
  return item !== 'cheese';
});

console.log(shoppingList);

console.log(3);

// Adds a new index at the end of the array called 'bread'
shoppingList.push('bread');

console.log(shoppingList);

console.log('ÖVNING 2');

// A function that takes in two parameters and adds them together.
function plus(value1, value2) {
  let add = value1 + value2;
  console.log('Resultat: ', add);
}

// Callback function plus two parameters
plus(2, 5);

console.log('ÖVNING 3');

function compare(a, b) {
  if (a > b) {
    console.log('🥇');
  } else if (a < b) {
    console.log('🥈');
  } else {
    console.log('🥉');
  }
}

compare(3, 4);

console.log('ÖVNING 4');

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 34, 5, 99, 4, 2, 7]));
