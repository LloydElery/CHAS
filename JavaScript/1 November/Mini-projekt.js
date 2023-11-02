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
    console.log('...in under ' + this.time_required + ' ' + 'Minutes');
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

  // Push method
  addIngredient(ingredient) {
    this.list_of_ingredients.push(ingredient);
  }

  // Pop Method
  removeIngredient(ingredient) {
    this.list_of_ingredients.pop(ingredient);
  }
}

// Recept nummer 1
const pancakes = new Recipe(
  'Pancakes',
  'Swedish Pancakes with blueberries',
  20,
  ['Egg', 'Milk', 'Flour', 'Sugar'],
  ['Mix all ingredients in a bowl & stir', 'Turn stove to medium heat and add a layer of batter to the pan'],
);

// Recept nummer 2
const ice = new Recipe(
  'Ice',
  'Frozen water',
  60 * 24,
  ['Water', 'more water', 'even more water'],
  [
    'Add water to the tray',
    'open freezer door',
    'put water-filled tray inside freezer',
    'close freezer door',
    'wait....',
  ],
);

/*
  Del 2
  - Gör en receptlista
*/

// Lista av recept
const recipeList = [pancakes, ice];

// pancakes.printRecipe();
// ice.printRecipe();
// 65-67 ersätter 62-63
recipeList.forEach((recipe) => {
  recipe.printRecipe();
});

// Lägger till 'Butter' till första receptet i 'recipeList.
recipeList[0].addIngredient('Butter');
recipeList[0].printRecipe();

// Tar bort det värdet längst bak i arrayen
recipeList[0].removeIngredient();
recipeList[0].printRecipe();

/*
  Del 3
  - Skapa en RecipeApp klass
*/

class RecipeApp {
  recipeList;

  constructor(recipeList) {
    this.recipeList = recipeList;
  }

  printTitles() {
    this.recipeList.forEach((recipe) => {
      console.log(recipe.title);
    });
  }

  // Skriver ut vilka recept som tar mindra än 30 minuter att tillaga
  printLT30Minutes() {
    // "För varje recept i 'receptList'
    // där 'time_required' är mindre än '30'
    // skriv ut 'recipe.title'" */

    /*this.recipeList.forEach((recipe) => {
       if (recipe.time_required < 30)
       {
         console.log(recipe.title);
       }
     }); */

    /* "'filteredList' = filtrera 'recipeList' och leta efter 'recipe' tar mindre än '30' minuter att tillreda"
      "för varje 'recipe' i den nya variabeln 'fileredList' som tar mindre än 30 minuter att tillreda
      'console.log' receptets 'title'" */

    const filteredList = this.recipeList.filter((recipe) => recipe.time_required < 30);
    filteredList.forEach((recipe) => {
      console.log(recipe.title);
    });
  }

  printLT3PreparationSteps() {
    this.recipeList.forEach((recipe) => {
      if (recipe.preparation_steps.length < 3) {
        console.log(recipe.title);
      }
    });
  }
}

const recipeApp = new RecipeApp(recipeList);
console.log('printTitles: ');
recipeApp.printTitles();
console.log('printLT30Minutes: ');
recipeApp.printLT30Minutes();
console.log('printLT3PreparationSteps: ');
recipeApp.printLT3PreparationSteps();
