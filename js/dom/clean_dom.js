//Clean DOM
const cleanDOM = () => {
    const recipesSection = document.querySelector("#recipes");
    while (recipesSection.lastChild) {
        recipesSection.removeChild(recipesSection.lastChild);
    }
}