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
            ingredient.ingredient
              .toLocaleLowerCase()
              .includes(searchedTags.ingredient[i].toLocaleLowerCase()))  &&
              
            (!searchedTags.appliance.length ||
              recipe.appliance
                .toLocaleLowerCase()
                .includes(searchedTags.appliance[i].toLocaleLowerCase())) &&
                
            (!searchedTags.ustensil.length ||
              recipe.ustensils.find((ustensil) =>
                ustensil
                  .toLocaleLowerCase()
                  .includes(searchedTags.ustensil[i].toLocaleLowerCase())
              )))
      );
      console.log("filteredRecipes", filteredRecipes, searchedTags);
  }
  displayData(filteredRecipes);
  return filteredRecipes
};
