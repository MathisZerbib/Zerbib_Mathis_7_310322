// Ingredient match
const ingredientMatch = (input, recipeMatchArray) => {
    recipeMatchArray = recipeMatchArray.filter((recipe) => {
    !input.ingredient.length ||
      recipe.ingredients.find((ingredient) =>
        ingredient.includes(cleanString(input.ingredient))
      );
  });
};
