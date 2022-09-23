// Ustensils match

const ustensilsMatch = (input, recipeMatchArray) => {

    if(recipeMatchArray.length === 0  || undefined  ||   [] ){
        getAllRecipes().map((recipe) => { 
        let ustensMatch = recipe.ustensils.filter(ustensil => cleanString(ustensil).includes(cleanString(input)))
 
     if (ustensMatch.length !== 0) {
         recipeMatchArray.push(recipe)
         console.log(ustensMatch, 'Ustens MATCH')
     }     
     })
    }else{   
        recipeMatchArray.map((recipe) => { 
            let ustensMatch = recipe.ustensils.filter(ustensil => cleanString(ustensil).includes(cleanString(input)))
     
         if (ustensMatch.length !== 0) {
             recipeMatchArray.push(recipe)
             console.log(ustensMatch, 'Ustens MATCH')
         }     
         })
    } 
    
    return recipeMatchArray

}