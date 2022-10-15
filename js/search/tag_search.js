const tagArraySearch = (searchedTags, data) => {
  // console.log(searchedTags)
  let tempArray = data;
  console.log(searchedTags.ingredient.length, "length");

  let finalLength =
    searchedTags.ingredient.length +
    searchedTags.appliance.length +
    searchedTags.ustensil.length;

  for (i = 0; finalLength !== i; i++) {
    filteredRecipes = tempArray.filter(
      (recipe) =>
        !searchedTags.ingredient.length ||
        (recipe.ingredients.find((ingredient) =>
          cleanString(ingredient.ingredient).includes(
            cleanString(searchedTags.ingredient[i])
          )
        ) 
        
        
        // &&
        //   (!searchedTags.appliance.length ||
        //     cleanString(recipe.appliance).includes(
        //       cleanString(searchedTags.appliance[i])
        //     )) &&
        //   (!searchedTags.ustensil.length ||
        //     recipe.ustensils.find((ustensil) => {
        //       cleanString(ustensil).includes(
        //         cleanString(searchedTags.ustensil[i])
        //       );
        //     })))
    ));

    console.log("filteredRecipes", filteredRecipes, searchedTags);

    if (
      (filteredRecipes &&
        filteredRecipes.length !== 0 &&
        searchBar.value.length > 2 &&
        tempArray == undefined) ||
      filteredRecipes == []
    ) {
      console.log("temp array", tempArray);
      tempArray = filteredRecipes;
      console.log("temp array", tempArray);
    }
  }
  displayData(filteredRecipes);

  return filteredRecipes;
};
