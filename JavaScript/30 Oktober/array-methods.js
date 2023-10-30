// REDUCE
function myFunc(total, num) {
  return total - num;
}
const numbers = [175, 45, 65, 4];

let result = numbers.reduce(myFunc);

console.log(result);

// PUSH
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);

console.log(animals);

animals.pop();
console.log(animals);

animals.splice(2, 1);
console.log(animals);

const fruits = ['apple', 'orange', 'cherry'];

fruits.forEach(myFunction);

function myFunction(input) {
  console.log(input);
}

const ages = [32, 33, 16, 40];
result = ages.filter((age) => age >= 18);
console.log(result);
