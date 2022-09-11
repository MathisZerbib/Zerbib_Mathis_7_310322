var counter = 0;

function recipeFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

    // Build Recipes DOM
    function buildRecipeCardDOM() {
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

        ingredients.map(element => {
            var p = document.createElement('p')
            p.className = 'mb-0';

            // switch (element.unit) {
            //     case 'cuillère à soupe':
            //         element.unit = 'Càs'
            //         break;
            //     case 'cuillères à soupe':
            //         element.unit = 'Càs'
            //         break
            //     case undefined:
            //         element.unit = 'undefined'

            //         break;

            //     case '':
            //         element.unit = ''

            //         break;
            //     case 'grammes':
            //         element.unit = 'g'

            //         break;

            //     default:

            //         break;
            // }
            // if (element.quantity == undefined || element.quantity == '') {
            //     element.quantity = ''
            //     element.unit = ''
            // }
            p.innerHTML = `<span class="font-weight-bold">${element.ingredient}</span> <span>${element.quantity==undefined ? '1': element.quantity }</span><span>${element.unit == 'grammes' ?'g' : element.unit== 'cl'? element.unit:  element.unit== 'ml'? element.unit:  element.unit == 'cuillère à soupe'? ' Càs': element.unit == 'cuillères à soupe'? ' Càs': '' }</span>`
                //p.innerHTML = ` <span class="font-weight-bold">${element.ingredient}</span> <span>${element.quantity}</span><span>${element.unit}</span>`

            listIngredients.appendChild(p);
        });
        // console.log("Ingredients,", ingredients)


        headerContainerCard.className = 'header-container-card d-flex justify-content-between mt-3 px-3 align-items-center';
        textContainerCard.className = 'card-body d-flex justify-content-between card-content  py-0 my-5';
        titleRecipe.className = 'card-title w-50 card-content-title';
        listIngredients.className = 'ingredient-container';
        textDescription.className = 'description w-50';
        article.className = 'card recipe-card mb-5';
        headerIconContainer.className = 'card-title d-flex font-weight-bold align-items-baseline justify-content-between';
        faTimer.className = 'fa-solid fa-clock mx-2';

        img.className = "placeholder";

        img.setAttribute("src", './assets/img/placeholder.png');
        img.src = './assets/img/placeholder.png';

        titleRecipe.textContent = name;
        textTime.textContent = time.toString()
        textTime.className = 'm-0 one-line'
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

    return { id, name, servings, ingredients, time, description, appliance, ustensils, buildRecipeCardDOM }
}