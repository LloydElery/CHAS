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
const newRecipe = new Recipe('Title', 'Description', 30, ['Ing1', 'Ing2', 'Ing3'], ['Prep1', 'Prep2']);
// Add an ingredient
newRecipe.addIngredient('ko');

// Print Recipe
newRecipe.printRecipe();

// Remove ingredient
newRecipe.removeIngredient();

// Print Recipe
newRecipe.printRecipe();
