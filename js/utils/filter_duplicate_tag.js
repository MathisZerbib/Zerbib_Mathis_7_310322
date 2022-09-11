// Filter duplicate tags 
let uniqueIngredients = [...new Set(getAllIngredients().map(element => {
    element = element.replace('.', '')
}))];
let uniqueAppliances = [...new Set(getAllAppliances().map(element => {
    element = element.replace('.', '')
}))];
let uniqueUstensiles = [...new Set(getAllUstensils().map(element => {
    element = element.replace('.', '')
}))];


let uniqueIngredientsClone = uniqueIngredients;
let uniqueAppliancesClone = uniqueAppliances;
let uniqueUstensilesClone = uniqueUstensiles;


// if (recipesDOM.length !== 50)

document.addEventListener('change', () => {
    // let uniqueIngredientsClone = matchArray.map(e => e.ingredients)
    // uniqueIngredientsClone = matchArray.map(recipe => (recipe.ingredients));
    // uniqueIngredientsClone = uniqueIngredientsClone.map(ingredients => (ingredients));
    let currentIngredientsArray = [];
    let currentUstensilesArray = [];
    let currentAppliancesArrray = [];


    matchArray.map(el => {
        el.ustensils.map(current => {
            if (currentUstensilesArray.indexOf(current) == -1)

                currentUstensilesArray.push(current)
        })
        el.ingredients.map(current => {
            if (currentIngredientsArray.indexOf(current) == -1)
                currentIngredientsArray.push(current.ingredient.toLocaleLowerCase())
        })

        if (currentAppliancesArrray.indexOf(el.appliance) == -1)
            currentAppliancesArrray.push(el.appliance)
    })



    uniqueIngredientsClone = [...new Set(currentIngredientsArray)];
    uniqueUstensilesClone = [...new Set(currentUstensilesArray)];
    uniqueAppliancesClone = [...new Set(currentAppliancesArrray)];


    // console.log('uniqueIngredient If recipes DOM', uniqueIngredientsClone)
    // console.log('CLONE CLONE CLONE CLONE', 'uniqueIngredient =>', uniqueIngredientsClone, 'Ustensiles => ', uniqueUstensilesClone, 'Appliance', uniqueAppliancesClone)
})