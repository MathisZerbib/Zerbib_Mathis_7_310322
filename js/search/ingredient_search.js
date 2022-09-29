// Ingredient match
const ingredientMatch = (input, recipeMatchArray) => {
  getCurrentRecipes().map((recipe) => {
    recipe.ingredients.map((el) => {
      // Escape accents and Capital letters
      el.ingredient = cleanString(el.ingredient);
      input = cleanString(input);
        // console.log('recipeMatchArray', recipeMatchArray, 'ingredient section')
      if (el.ingredient.includes(input)) {
        // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        recipeMatchArray.push(recipe);
        console.log(el.ingredient, "Ingredient in", recipe);
      }
    });
  });
};
