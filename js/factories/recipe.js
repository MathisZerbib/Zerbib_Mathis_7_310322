var counter = 0;

function recipeFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;


    function getRecipeCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');

        const headerContainerCard = document.createElement('div');
        const textContainerCard = document.createElement('div');


        const titleRecipe = document.createElement('h2');
        const textTime = document.createElement('p');
        const ulListIngredients = document.createElement('ul');
        const liListIngredients = document.createElement('li');
        const spanQuantity = document.createElement('span');
        const textDescription = document.createElement('p');
        const faTimer = document.createElement('i');


        textDescription.textContent = description

        ingredients.forEach(element => {
            // liListIngredients.textContent =
            if (element.quantity == undefined || element.quantity == '') {
                element.quantity = ''
                element.unit = ''
            }
            if (element.unit == 'cuillière à soupe' || element.unit == 'cuillères à soupe') {
                element.unit = 'Càs'
            }
            if (element.unit == undefined || element.unit == '') {
                element.unit = ''
            }
            ulListIngredients.innerHTML += `<li> ${element.ingredient}: <span>${element.quantity}</span><span>${element.unit}</span> </li>`
        });
        // console.log("Ingredients,", ingredients)


        headerContainerCard.className = 'header-container-card d-flex flex-row';
        textContainerCard.className = 'text-container-card d-flex flex-row';
        titleRecipe.className = 'flex-grow-1 one-line';
        ulListIngredients.className = 'list-unstyled font-weight-bold col-sm';
        textDescription.className = 'col-sm truncate';
        article.className = 'card-container';
        faTimer.className = 'fa-solid fa-timer';

        img.className = "placeholder";

        img.setAttribute("src", './assets/img/placeholder.png');
        img.src = './assets/img/placeholder.png';

        titleRecipe.textContent = name
        textTime.textContent = time.toString();

        article.appendChild(img)
        article.appendChild(headerContainerCard)
        headerContainerCard.appendChild(titleRecipe)
        headerContainerCard.appendChild(textTime)
        textTime.appendChild(faTimer);
        article.appendChild(textContainerCard)
        textContainerCard.appendChild(ulListIngredients)
        ulListIngredients.appendChild(spanQuantity);
        textContainerCard.append(textDescription)

        return (article);
    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipeCardDOM }
}