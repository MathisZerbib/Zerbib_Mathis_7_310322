const globalSearch = (filter, recipeMatch) => {
    // filterArray
    recipeMatchName(filter, recipeMatch)
    descriptionMatch( filter, recipeMatch)
    

}


const affineSearch = (filterArray, oldArray, recipeMatch) => {
  
    console.log("filterArray", filterArray, "recipeMatch", recipeMatch,
    'recipeMatchName(filter, recipeMatch) descriptionMatch( filter, recipeMatch)',
    recipeMatchName(filterArray[0], recipeMatch),
        descriptionMatch( filterArray[0], recipeMatch)
    )
    // filterArray

//     let result = filterArray.map( filter => {
        
        
// });
// return result

}
// function affineSearch(currentMatchArray, filter ) {
//     currentMatchArray.map((recipe) => {
//         ingredientMatch( filterValue, currentMatchArray, recipe)
//         applianceMatch( filterValue, currentMatchArray, recipe)
//         ustensileMatch( filterValue, currentMatchArray, recipe)
//     })
//     recipeMatch = currentMatchArray;

// }