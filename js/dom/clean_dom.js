//Clean DOM
const cleanDOM = () => {

    const recipesSection = document.querySelector("#recipes");
    if (recipesSection.lastChild == null) {
        textDefault.style.opacity = '0';
        textEmpty.style.opacity = '1'

    }
    while (recipesSection.lastChild) {
        recipesSection.removeChild(recipesSection.lastChild);
    }



}