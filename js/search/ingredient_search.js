// Ingredient match
const ingredientMatch = (input, recipeMatchArray) => {
  let = recipeMatchResult = recipeMatchArray
    recipeMatchResult = recipeMatchResult.filter((recipe) => {
    !input.ingredient.length ||
      recipe.ingredients.find((ingredient) =>
        ingredient.includes(cleanString(input.ingredient))
      );
  });
};
