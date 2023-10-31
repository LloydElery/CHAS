// Klassen 'Person' skapas för att skapa nya 'Object'
// Person kommer alltså fylla funktionen av en Mall

//Mallens namn: Person
class Person {
  // Den ska ta emot tre parametrar:
  // Dessa skrivs enbart ut för att skapa tydlighet i kod och fyller ingen funktion.
  name;
  lastname;
  age;
  // En metod skapas för att ta emot parametrarna 'name, lastname, age'
  constructor(name, lastname, age) {
    // this. metoden används för att ta emot det senaste värdet som angivits i constructorn.
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  // En metod vars funktion är att console.logga input(this.) och parametrarna(name, lastname och age)
  introduceSelf() {
    console.log(`Hi! I'm ${this.name} ${this.lastname} & i am ${this.age} years old`);
  }
}

// Skapandet av en ny 'Person' görs med hjälp av nyckelordet 'new'
const person1 = new Person('Dennis', 'Jensen', 31);
const person2 = new Person('Werner', 'Cardestam', 2);

console.log(person1.name);

console.log(person1.introduceSelf());

console.log(person1);

console.log(person2.name);

console.log(person2.introduceSelf());

console.log(person2);
