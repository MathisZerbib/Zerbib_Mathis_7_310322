function recipeFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;


    function getRecipeCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const subContainerCard = document.createElement('div');
        const h2 = document.createElement('h2');
        const subText = document.createElement('p');

        img.setAttribute("src", './assets/img/placeholder.png')
        img.src = './assets/img/placeholder.png';
        img.className = "placeholder"
        h2.textContent = name
        subText.textContent = "cemz";
        article.appendChild(img)
        article.appendChild(subContainerCard)
        subContainerCard.appendChild(h2)
        return (article);
    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipeCardDOM }
}