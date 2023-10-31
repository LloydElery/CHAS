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

class Djur {

    name;

    constructor(name){
        this.name = name;
    }

    makeSound() {
        console.log(`Grrr, jag heter ${this.name}`)
    }
}

class Dog extends Djur {

    breed;

    constructor(breed){
        this.breed = breed;
    }

}

class Cat extends Djur {

    breed;

    constructor(breed){
        this.breed = breed;
    }

}

const lucky = new Dog('Pitbull');
const findus = new Cat('Bengal');