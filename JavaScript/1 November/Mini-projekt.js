class Recipe {
  title;
  description;
  time_required;
  list_of_ingredients;
  preparation_steps;

  constructor(title, description, time_required, list_of_ingredients, preparation_steps) {
    this.title = title;
    this.description = description;
    this.time_required = time_required;
    this.list_of_ingredients = list_of_ingredients;
    this.preparation_steps = preparation_steps;
  }

  // Console.log Method
  printRecipe() {
    // Title
    console.log(this.title);
    // Description
    console.log('How to make amazing ' + this.description);
    // Time requirment
    console.log('...in under ' + this.time_required + ' ' + 'Minuter');
    // List of ingredients
    console.log('INGREDIENTS: ');
    this.list_of_ingredients.forEach((ingredient) => {
      console.log('    - ' + ingredient);
    });
    // Step by step instructions
    console.log('INSTRUCTIONS: ');
    this.preparation_steps.forEach((step) => {
      console.log('- ' + step);
    });
  }
}

const pancakes = new Recipe(
  'Pancakes',
  'Swedish Pancakes with blueberries',
  30,
  ['Egg', 'Milk', 'Flour', 'Sugar'],
  ['Mix all ingredients in a bowl & stir', 'Turn stove to medium heat and add a layer of batter to the pan'],
);

pancakes.printRecipe();

//Avslutade vid 29.30min
