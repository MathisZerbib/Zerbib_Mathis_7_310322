const globalSearch = (filter, searchMatchArray) => {
    // filterArray
    recipeMatchName(filter, searchMatchArray),
    descriptionMatch( filter, searchMatchArray)

}


const affineGlobalSearch = (filterArray, searchMatchArray) => {
    // filterArray
    filterArray.filter( filter => {
   
        const results = searchMatchArray.filter(recipe => {
            // 👇️ using AND (&&) operator
            return recipeMatchName(filter, recipe) && descriptionMatch( filter, recipe)
          });
          console.log("results" , results)
          return results
    })
}

function affineSearch(currentMatchArray, filter ) {
    currentMatchArray.map((recipe) => {
        ingredientMatch( filterValue, currentMatchArray, recipe)
        applianceMatch( filterValue, currentMatchArray, recipe)
        ustensileMatch( filterValue, currentMatchArray, recipe)
    })
    searchMatchArray = currentMatchArray;

}