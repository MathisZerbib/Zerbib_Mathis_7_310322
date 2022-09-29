// Title match
const recipeMatchName = (input, recipeMatchArray) => {
  let recipeMatch = [];
  recipeMatch = recipeMatchArray.filter((recipe) =>
    cleanString(recipe.name).includes(cleanString(input))
  );

  if (recipeMatch.length !== 0) {
    recipeMatch.map((el) => {
      recipeMatchArray.push(el);
      console.log("NAME SEARCH MATCH", el);

    });
  }

  return recipeMatchArray;
};
