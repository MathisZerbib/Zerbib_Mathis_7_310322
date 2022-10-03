const tagArraySearch = (tag, filter) => {
  // console.log('tagArrayToSearch', tagArrayToSearch, 'lenght:', tagArrayToSearch.length)

//   if (recipeMatchArray.length !== 0) {
//     switch (filter) {
//       case "ingredients":
//         ingredientMatch(tag, currentMatchArray);
//         break;

//       case "appliances":
//         applianceMatch(tag, currentMatchArray);

//         break;

//       case "ustensils":
//         ustensilsMatch(tag, currentMatchArray);

//         break;
//       default:
//         break;
//     }

//     // affineWithTag(tag, currentMatchArray, filter)

//     currentMatchArray = [...new Set(currentMatchArray)];
//     displayData(currentMatchArray);
//   } else {
    switch (filter) {
      case "ingredients":
        ingredientMatch(tag, newRecipeMatch);
        newRecipeMatch = [...new Set(newRecipeMatch)];

        cleanDOM();
        displayData(newRecipeMatch);

        break;

      case "appliances":
        applianceMatch(tag, newRecipeMatch);
        newRecipeMatch = [...new Set(newRecipeMatch)];
        cleanDOM();
        displayData(newRecipeMatch);

        break;

      case "ustensils":
        ustensilsMatch(tag, newRecipeMatch);
        newRecipeMatch = [...new Set(newRecipeMatch)];
        cleanDOM();
        displayData(newRecipeMatch);

        break;
      default:
        break;
    }
    // displayData(newRecipeMatch);
  }

  // if (tagArrayToSearch.length == 1 && searchInput.value.length >= 3) {
  //     // tagArrayToSearch.push(searchInput.value)
  //     console.log('tagArrayToSearch', tagArrayToSearch, 'lenght is', tagArrayToSearch.length, 'Search Input value', searchInput.value)
  //     multiTagSearch(tagArrayToSearch)
  //     // displayData(recipeMatchArray);
  // }

  // if (tagArrayToSearch.length === 0 && searchInput.value.length <= 2) {
  //     console.log('default View');
  //     defaultView();

  // }
  // if (searchInput.value.length >= 3 && tagArrayToSearch.length === 0) {
  //     cleanDOM();

  //     let searchMatchArray = []
  //     if (searchInput.value.includes(' ')) {
  //         console.log('Going to multimatch', searchInput.value.split(' '))
  //         arrayFromInputSearch = searchInput.value.split(' ')
  //         multiTagSearch(arrayFromInputSearch)

  //     } else {
  //         for (let i = 0; recipes.length > i; i++) {
  //             recipeMatchName(searchInput.value, searchMatchArray);
  //             ingredientMatch(recipes[i], searchInput.value, searchMatchArray);
  //             descriptionMatch(searchInput.value, searchMatchArray);
  //         }
  //         searchMatchArray = [...new Set(searchMatchArray)];
  //         console.table(searchMatchArray);

  //         cleanDOM();
  //         displayData(searchMatchArray);
  //     }

  // }
// };
