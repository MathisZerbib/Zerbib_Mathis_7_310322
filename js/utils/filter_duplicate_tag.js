// Filter duplicate tags 
let uniqueIngredients = [...new Set(ingredientsArray.map(element => {
    element = element.replace('.', '')
    return element.toLowerCase();
}))];
let uniqueAppliances = [...new Set(appliancesArray.map(element => {
    element = element.replace('.', '')
    return element.toLowerCase();
}))];
let uniqueUstensils = [...new Set(ustensilsArray.map(element => {
    element = element.replace('.', '')
    return element.toLowerCase();
}))];

uniqueIngredients.sort((a, b) => a.localeCompare(b))
uniqueAppliances.sort((a, b) => a.localeCompare(b))
uniqueUstensils.sort((a, b) => a.localeCompare(b))

let uniqueIngredientsClone = uniqueIngredients;
let uniqueAppliancesClone = uniqueAppliances;
let uniqueUstensilesClone = uniqueUstensils;


// if (recipesDOM.length !== 50)

document.addEventListener('change', () => {
    // let uniqueIngredientsClone = matchArray.map(e => e.ingredients)
    // uniqueIngredientsClone = matchArray.map(recipe => (recipe.ingredients));
    // uniqueIngredientsClone = uniqueIngredientsClone.map(ingredients => (ingredients));
    let currentIngredientsArray = [];
    let currentUstensilesArray = [];
    let currentAppliancesArrray = [];


    matchArray.forEach(el => {
        el.ustensils.forEach(cUstensiles => {
            if (currentUstensilesArray.indexOf(cUstensiles) == -1)

                currentUstensilesArray.push(cUstensiles)
        })
        el.ingredients.forEach(cIngredient => {
            if (currentIngredientsArray.indexOf(cIngredient) == -1)
                currentIngredientsArray.push(cIngredient.ingredient.toLocaleLowerCase())
        })

        if (currentAppliancesArrray.indexOf(el.appliance) == -1)
            currentAppliancesArrray.push(el.appliance)
    })



    uniqueIngredientsClone = [...new Set(currentIngredientsArray)];
    uniqueUstensilesClone = [...new Set(currentUstensilesArray)];
    uniqueAppliancesClone = [...new Set(currentAppliancesArrray)];


    // console.log('uniqueIngredient If recipes DOM', uniqueIngredientsClone)
    console.log('CLONE CLONE CLONE CLONE', 'uniqueIngredient =>', uniqueIngredientsClone, 'Ustensiles => ', uniqueUstensilesClone, 'Appliance', uniqueAppliancesClone)
})