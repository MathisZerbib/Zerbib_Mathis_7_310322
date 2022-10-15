const tagArraySearch = (searchedTags, data) => {
  // console.log(searchedTags)
  let tempArray = data;
  console.log(searchedTags.ingredient.length, "length");

  // let finalLength =
  //   searchedTags.ingredient.length +
  //   searchedTags.appliance.length +
  //   searchedTags.ustensil.length;

  for (i = 0; searchedTags.ingredient.length !== i; i++) {
    filteredRecipes = tempArray.filter(
      (recipe) =>
        !searchedTags.ingredient[i] ||
        recipe.ingredients.find((ingredient) =>
          cleanString(ingredient.ingredient).includes(
            cleanString(searchedTags.ingredient[i])
          )
        )
    );
    console.log("filteredRecipes", filteredRecipes, searchedTags);
  }

  for (i = 0; searchedTags.appliance.length !== i; i++) {
    filteredRecipes = tempArray.filter(
      (recipe) =>
        !searchedTags.appliance[i] ||
        cleanString(recipe.appliance).includes(
          cleanString(searchedTags.appliance[i])
        )
    );
  }

  for (i = 0; searchedTags.ustensil.length !== i; i++) {
    filteredRecipes = tempArray.filter(
      (recipe) =>
        !searchedTags.ustensil[i] ||
        recipe.ustensils.find((ustensil) =>
          cleanString(ustensil).includes(cleanString(searchedTags.ustensil[i]))
        )
    );
  }

    // if (
    //   (filteredRecipes &&
    //     filteredRecipes.length !== 0 &&
    //     searchBar.value.length > 2 &&
    //     tempArray == undefined) ||
    //   filteredRecipes == []
    // ) {
    //   console.log("temp array", tempArray);
    //   tempArray = filteredRecipes;
    //   console.log("temp array", tempArray);
    // }
  displayData(filteredRecipes);
  if (filteredRecipes.length == 0) {
    showError();
  }
  return filteredRecipes;
};
