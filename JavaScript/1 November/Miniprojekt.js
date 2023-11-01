class Recipe {
  title;
  description;
  time;
  ingredients;
  preparation;

  constructor(title, description, time, ingredients, preparation) {
    this.title = title;
    this.description = description;
    this.time = time;
    this.ingredients = ingredients;
    this.preparation = preparation;
  }

  printRecipe() {
    console.log(this.title, this.description, this.time, this.ingredients, this.preparation);
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(ingredient) {
    this.ingredients.pop(ingredient);
  }
}
const kladdkaka = new Recipe('Kladdkaka', 'Description', 30, ['Ing1', 'Ing2', 'Ing3'], ['Prep1', 'Prep2']);
const paj = new Recipe('paj', 'Description', 30, ['Ing1', 'Ing2', 'Ing3'], ['Prep1', 'Prep2']);
const saft = new Recipe('saft', 'Description', 30, ['Ing1', 'Ing2', 'Ing3'], ['Prep1', 'Prep2']);
const gryta = new Recipe('gryta', 'Description', 30, ['Ing1', 'Ing2', 'Ing3'], ['Prep1', 'Prep2']);

// Add an ingredient
kladdkaka.addIngredient('ko');

// Print Recipe
kladdkaka.printRecipe();

// Remove ingredient
kladdkaka.removeIngredient();

// Print Recipe
kladdkaka.printRecipe();

Recipe.forEach((Recipe) => {
  title = this.title;
  console.log(this.title);
});
