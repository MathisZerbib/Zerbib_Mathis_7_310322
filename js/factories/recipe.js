var counter = 0;

function recipeFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;


    function getRecipeCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');

        const headerContainerCard = document.createElement('div');
        const textContainerCard = document.createElement('div');
        const headerIconContainer = document.createElement('div');


        const titleRecipe = document.createElement('h2');
        const textTime = document.createElement('p');
        const listIngredients = document.createElement('div');
        const spanQuantity = document.createElement('span');
        const textDescription = document.createElement('p');
        const faTimer = document.createElement('i');


        textDescription.textContent = description

        ingredients.forEach(element => {
            var p = document.createElement('p')
            p.className = 'mb-0';
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
            p.innerHTML = `${element.ingredient}: <span>${element.quantity}</span><span>${element.unit}</span>`
            listIngredients.appendChild(p);
        });
        // console.log("Ingredients,", ingredients)


        headerContainerCard.className = 'header-container-card d-flex justify-content-between mt-3 px-3';
        textContainerCard.className = 'card-body d-flex justify-content-between card-content';
        titleRecipe.className = 'card-title w-50 card-content-title';
        listIngredients.className = 'ingredient-container';
        textDescription.className = 'description w-50';
        article.className = 'card recipe-card pb-3 mb-5';
        headerIconContainer.className = 'd-flex font-weight-bold';
        faTimer.className = 'fa-solid fa-clock';

        img.className = "placeholder";

        img.setAttribute("src", './assets/img/placeholder.png');
        img.src = './assets/img/placeholder.png';

        titleRecipe.textContent = name;
        textTime.textContent = time.toString()
        textTime.textContent += ' minutes';
        // textTime.textContent += 'far fa-clock'

        article.appendChild(img);
        article.appendChild(headerContainerCard);
        headerContainerCard.appendChild(titleRecipe);
        headerContainerCard.appendChild(headerIconContainer);
        headerIconContainer.appendChild(faTimer)
        headerIconContainer.appendChild(textTime);


        article.appendChild(textContainerCard);
        textContainerCard.appendChild(listIngredients);
        listIngredients.appendChild(spanQuantity);

        textContainerCard.append(textDescription);

        return (article);
    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipeCardDOM }
}