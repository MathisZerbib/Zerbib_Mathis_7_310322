// Appliance Match
const applianceMatch = (input, recipeMatchArray) => {
  console.log("recipeMatchArray", recipeMatchArray);
  getCurrentRecipes().map((recipe) => {
    if (cleanString(recipe.appliance).includes(cleanString(input))) {
      recipeMatchArray.push(recipe);
      console.log(recipeMatchArray, "Appliance MATCH");
    }
  });
  return recipeMatchArray;
};
