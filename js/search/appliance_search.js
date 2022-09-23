// Appliance Match 
const applianceMatch = (input, recipeMatchArray) => {
    console.log('recipeMatchArray', recipeMatchArray)
    if(recipeMatchArray.length === 0  || undefined  ||   [] ){
        getAllRecipes().map((recipe) => { 

            if (cleanString(recipe.appliance).includes(cleanString(input))) {
                recipeMatchArray.push(recipe)
                console.log(recipeMatchArray, 'Appliance MATCH')
            }
            })
    }else{
        recipeMatchArray.map((recipe) => { 

            if (cleanString(recipe.appliance).includes(cleanString(input))) {
                recipeMatchArray.push(recipe)
                console.log(recipeMatchArray, 'Appliance MATCH')
            }
            })
    }
 
}