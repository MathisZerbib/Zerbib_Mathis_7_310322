const createFiltersDOM = (filtersList) => {

    filtersList.map(el => {
        let filtersbox = document.createElement('div');
        let filterDiv = document.createElement('div')
        let filterButton = document.createElement('input');
        let filterUl = document.createElement('ul');
        let filterArrow = document.createElement('i')

        filterDiv.setAttribute('data-bs-toggle', 'dropdown');
        filterDiv.setAttribute('aria-expended', false);
        filterDiv.className = "sub-search__button d-flex w-100 mw-100 col btn  justify-content-between align-items-center"

        filtersbox.setAttribute('id', 'sub-search__' + el);
        filtersbox.setAttribute('data-name', el);
        filtersbox.classList.add('sub-search__bloc', 'col-12', 'col-lg-2', 'm-2', 'dropdown', 'd-flex', 'flex-column', 'justify-content-between', 'align-items-center');

        filterButton.className = 'col btn  text-black text-left font-weight-bold border-0 sub-search__button'
        filterButton.setAttribute('value', el);
        filterButton.setAttribute('type', 'button');
        filterButton.autofocus = true;
        filterArrow.className = 'fa-solid fa-angle-down col-1 end-0 text-white';

        filterUl.className = 'sub-search__taglist w-100 mw-100 btn text-white border-0 rounded-bottom flex-wrap dropdown-menu ' + el;
        filterUl.setAttribute('role', 'listbox');
        filterUl.setAttribute('id', el + '__taglist');


        document.getElementById('sub-searchs').append(filtersbox);
        filtersbox.appendChild(filterDiv);
        filterDiv.appendChild(filterButton);
        filterDiv.appendChild(filterArrow)
        filtersbox.appendChild(filterUl);


        document.getElementById('sub-searchs').append(filtersbox)
        // Show tag list in sub searchs and transform the button into search input field
        const currentSubSearchButton = filtersbox.querySelector('.sub-search__button');
        let inputField = filtersbox.querySelector('.sub-search__button input');
        let ul = filtersbox.querySelector('.sub-search__taglist')

        inputField.addEventListener('keyup', (e) => tagListSearch(e, ul, inputField));


        // First click on input Tag
        currentSubSearchButton.addEventListener('click', () => {

            let filtersboxIngredient = document.querySelector('#sub-search__Ingrédient');
            let ulIngredient = filtersboxIngredient.querySelector('.sub-search__taglist')
            let parentInputIngredient = ulIngredient.closest('div').id
            let strIngredient = parentInputIngredient.replace('sub-search__', '');
            let filtersboxUstensil = document.querySelector('#sub-search__Ustensiles');
            let ulUstensil = filtersboxUstensil.querySelector('.sub-search__taglist')
            let parentInputUstensil = ulUstensil.closest('div').id
            let strUstensil = parentInputUstensil.replace('sub-search__', '');
            let filtersboxAppliance = document.querySelector('#sub-search__Appareils');
            let ulAppliance = filtersboxAppliance.querySelector('.sub-search__taglist')
            let parentInputAppliance = ulAppliance.closest('div').id
            let strAppareil = parentInputAppliance.replace('sub-search__', '');


            // build DOM tag

            cleanTagListDOM(strIngredient)
            cleanTagListDOM(strUstensil)
            cleanTagListDOM(strAppareil)




            if (tagFilters.innerText == '' && searchInputSelector.value == '') {
                buildTagArray(inputField, getAllIngredients(), strIngredient);
                buildTagArray(inputField, getAllUstensils(), strUstensil);
                buildTagArray(inputField, getAllAppliances(), strAppareil);
            } 
            else {

                    


                let currentIngredients = getCurrentIngredients()
                let currentAppliances = getCurrentAppliances()
                let currentUstensils = getCurrentUstensils()

                let tags_list = document.querySelectorAll('.tag.btn')
                let tags_list_array = []
                for (let i =0 ; tags_list.length !== i; i++) {
                    tags_list_array.push(tags_list[i].innerText)
                }
                

                currentIngredients = currentIngredients.filter(el => el !== searchInputSelector.value || tags_list_array.indexOf(el) !== -1 )
                currentAppliances = currentAppliances.filter(el => el !== searchInputSelector.value || tags_list_array.indexOf(el) !== -1 )
                currentUstensils = currentUstensils.filter(el => el !== searchInputSelector.value || tags_list_array.indexOf(el) !== -1 )

                buildTagArray(inputField, currentIngredients, strIngredient);
                buildTagArray(inputField, currentUstensils, strUstensil);
                buildTagArray(inputField, currentAppliances, strAppareil);
            }




            toggleList(ul, filterArrow, true);

            if (currentSubSearchButton.classList.contains('open')) {
                // show mode => remove open class and reset state
                ul.classList.remove('d-flex')

                removeOpen(el, filtersbox, inputField, currentSubSearchButton);
            } else {
                // closed mode => add open class and transform input type in search
                filtersList.map(element => {
                    let filtersbox = document.getElementById('sub-search__' + element);
                    const currentSubSearchButton = filtersbox.querySelector('.sub-search__button');
                    const inputField = filtersbox.querySelector('.sub-search__button input');
                    let ul = filtersbox.querySelector('.sub-search__taglist')
                    ul.classList.remove('d-flex')


                    removeOpen(element, filtersbox, inputField, currentSubSearchButton);
                });
                currentSubSearchButton.classList.add('open');
                inputField.removeAttribute('value');
                inputField.setAttribute('type', 'search');
                inputField.setAttribute('placeholder', `Rechercher un ${el}`);
                inputField.focus();
                filtersbox.classList.remove('col-lg-2');
                filtersbox.classList.add('col-lg-5');

                toggleList(ul, filterArrow, true)
            };

        });
    });
}

//Create sub search button & list
let subsearchNames = ["Ingrédient", "Appareils", "Ustensiles"];
createFiltersDOM(subsearchNames);

// Add Tag to Tag Array Search
let tagArrayToSearch = {
    ingredient: [],
    appliance: [],
    ustensil: []
};
