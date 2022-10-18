const tagArraySearch = (searchedTags, data) => {
  let tempArray = data;

  // let finalLength =
  //   searchedTags.ingredient.length +
  //   searchedTags.appliance.length +
  //   searchedTags.ustensil.length;

  // Define var to check if current item is Included in a recipe
  let isIngIncluded;
  let isAppIncluded;
  let isUstensIncluded;

  for (i = 0; searchedTags.ingredient.length !== i; i++) {
    isIngIncluded = tempArray.filter((recipe) =>
      recipe.ingredients.find((ingredient) =>
        cleanString(ingredient.ingredient).includes(
          cleanString(searchedTags.ingredient[i])
        )
      )
    );
  }

  for (i = 0; searchedTags.appliance.length !== i; i++) {
    isAppIncluded = tempArray.filter((recipe) =>
      cleanString(recipe.appliance).includes(
        cleanString(searchedTags.appliance[i])
      )
    );
  }

  for (i = 0; searchedTags.ustensil.length !== i; i++) {
    isUstensIncluded = tempArray.filter((recipe) =>
      recipe.ustensils.find((ustensil) =>
        cleanString(ustensil).includes(cleanString(searchedTags.ustensil[i]))
      )
    );
  }

  if (isIngIncluded) {
    filteredRecipes = isIngIncluded.concat(isAppIncluded, isUstensIncluded);
  }else if(isAppIncluded) {
    filteredRecipes = isAppIncluded.concat(isIngIncluded, isUstensIncluded);

  }else if( isUstensIncluded) {
    filteredRecipes = isUstensIncluded.concat(isIngIncluded, isAppIncluded);

  }

  // Remove empty in array  
  filteredRecipes = filteredRecipes.filter(n => n)


const duplicates = filteredRecipes.filter((item, index) => index !== filteredRecipes.indexOf(item));

// sort by "id" in ascending, and then by their "default" where  `false` first, then `true` second


  if (duplicates.length !== 0 ) {
    displayData(duplicates)
    return duplicates;

  }else {
    displayData(filteredRecipes)
  }
  if (filteredRecipes.length == 0) {
    showError();
  }
  return filteredRecipes;
};
