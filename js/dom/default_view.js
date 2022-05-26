// Display default DOM Data
const defaultViewDOM = () => {
    console.log('=====================DOM=========================')
    cleanDOM()
    displayData(recipesDOM)
}


// Display default Data
const defaultView = () => {
    console.log('//////////////////////VIEW/////////////////////////')
    console.log('recipesDOM:', recipesDOM)

    cleanDOM()
    displayData(recipes)
    recipesDOM = recipes
}