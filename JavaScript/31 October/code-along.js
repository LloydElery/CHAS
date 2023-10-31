/* class Animal {
  species;
  name;

  constructor(species) {
    this.species = species;
    this.name = name;
  }

  makeSound() {
    console.log(`Mjau sa ${this.species} ${this.name}`);
  }
}

const cat = new Animal('Cat');
console.log(cat.makeSound); */

// Skapa en ny mall (class 'Djur')
class Djur {
  // 'Djur' innehåller 'name'
  name;
  // Constructorn anropar det senaste namnet med 'this.'
  constructor(name) {
    this.name = name;
  }
  // Skapar en metod som console.loggar en string + this.name
  makeSound() {
    console.log(`Grrr, jag heter ${this.name}`);
  }
}

// Skapar en ny mall för hundar
// class Dog [extends(förlänger mallen 'Djur')]
class Dog extends Djur {
  breed;
  // Inkluderar parametern 'name' från 'Djur'.
  constructor(name, breed) {
    // 'super' används för att hämta information från 'Djur'
    super(name);
    this.breed = breed;
  }
}

class Cat extends Djur {
  breed;

  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const lucky = new Dog('Lucky', 'Pitbull');
const findus = new Cat('Werner', 'Bengal');

console.log(lucky);
console.log(findus);

lucky.makeSound();
findus.makeSound();
