// Title match
const recipeMatchName = (input, recipeMatchArray) => {
 recipeMatchArray.filter((recipe) =>
    cleanString(recipe.name).includes(cleanString(input))
  );

  // if (recipeMatch.length !== 0) {
  //   recipeMatch.map((el) => {
  //     recipeMatchArray.push(el);
  //   });
  // }

  return recipeMatchArray;
};
