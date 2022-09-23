// Description match
const descriptionMatch = (input, recipeMatchArray) => {

        if(recipeMatchArray.length === 0  || undefined  ||   [] ){

                let descriptionMatch = getAllRecipes().filter(recipe => cleanString(recipe.description).includes(cleanString(input)))
                if (descriptionMatch.length !== 0) {
                    descriptionMatch.map(el => {
                        recipeMatchArray.push(el)
                    })
                    console.log(recipeMatchArray, 'DESCRIPTION SEARCH MATCH')
                }   
        }else{

                let descriptionMatch = recipeMatchArray.filter(recipe => cleanString(recipe.description).includes(cleanString(input)))
                if (descriptionMatch.length !== 0) {
                    descriptionMatch.map(el => {
                        recipeMatchArray.push(el)
                    })
                    console.log(recipeMatchArray, 'DESCRIPTION SEARCH MATCH')
        }

        return recipeMatchArray

    }
}