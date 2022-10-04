const tagArraySearch = (tag, filter) => {
  console.log("tagArrayToSearch", tag, "lenght:", tag.length);
  cleanDOM()

  switch (filter) {
    case 'ingredients':
      ingredientMatch(tag, newRecipeMatch);
      currentIngredients = currentIngredients.filter(el => el !== tag )
      break;

    case 'appliances':
      applianceMatch(tag, newRecipeMatch);
      break;

    case 'ustensils':
      ustensilsMatch(tag, newRecipeMatch);
      break;
    default:
      break;
  }

   var recipesIds = newRecipeMatch.map(function(recipe){ return recipe.id });

  const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  

  console.log(`The duplicates in ${recipesIds} are ${findDuplicates(recipesIds)}`);

  let number = findDuplicates(recipesIds);
  
  console.log('number', number);
// findDuplicates(duplicatedArray)
newRecipeMatch = [...new Set(newRecipeMatch)];
if (number.length == 0){
    displayData(newRecipeMatch) 
}

else {
    let finalResults = []
    for(let i=0; number.length !== i; i++) {
        let singleMatch = newRecipeMatch.filter((recipe) => recipe.id === number[i]);
        finalResults.push(singleMatch)
    }
    console.log('finam', finalResults)

    finalResults.map(recipe=> displayData(recipe))
    // ==displayData(finalResults);
// if(finalResults == []) {
//     displayError()
// }

}
//   displayData();
};


