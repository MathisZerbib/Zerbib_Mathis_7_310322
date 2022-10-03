const globalSearch = (filter, recipeMatch) => {
  // filterArray
  // if the filter parameter is an arrray
  if (Array.isArray(filter)) {

  } else {
    recipeMatchName(filter, recipeMatch);
    descriptionMatch(filter, recipeMatch);
    ingredientMatch(filter, recipeMatch);
    
  }

};

function affineWithTag(filter, recipeMatch) {
  ingredientMatch(filter, recipeMatch);
  ustensilsMatch(filter, recipeMatch);
  applianceMatch(filter, recipeMatch);
}

