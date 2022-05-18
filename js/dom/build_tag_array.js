const buildTagArrayDOM = (inputField, tags, id) => {
    for (let i = 0; i < ulLength(tags); i++) {
        let liTag = document.createElement('li');
        let cleanTagName = ''
        liTag.setAttribute('aria-selected', 'false');
        liTag.setAttribute('role', 'option');
        liTag.innerHTML = tags[i];
        cleanTagName = tags[i].replace(/\s/g, '_')
        liTag.id = cleanTagName


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


        switch (id) {
            case 'Ingrédient':
                liTag.classList.add('dropdown-item', 'bg-primary');
                liTag.addEventListener('click', () => {
                    uniqueIngredientsClone = uniqueIngredientsClone.filter(e => e !== cleanTagName)
                    console.log('Litag', uniqueIngredientsClone, cleanTagName)
                    cleanTagListDOM(strIngredient)
                        // TODO REMOVE TAG FROM ARRAY

                    uniqueIngredientsClone = [...new Set(uniqueIngredientsClone.map(element => {
                        return element.toLowerCase();
                    }))]

                    // console.log('UNIQUE INGREDIENT', uniqueIngredientsClone)
                    liTag.setAttribute('aria-selected', 'true');

                    uniqueIngredientsClone = uniqueIngredientsClone.filter(e => e !== tags[i])
                        // console.log('Tags ', tags)
                    createTag(liTag, 'bg-primary')
                    inputField.value = ''
                })
                break;
                // TODO REMOVE TAG FROM ARRAY

            case 'Appareils':
                liTag.classList.add('dropdown-item', 'bg-green');
                liTag.addEventListener('click', () => {
                    uniqueAppliancesClone = uniqueAppliancesClone.filter(e => e !== cleanTagName)
                    cleanTagListDOM(strAppareil)

                    uniqueAppliancesClone = [...new Set(uniqueAppliancesClone.map(element => {
                        return element.toLowerCase();
                    }))]

                    console.log('UNIQUE INGREDIENT', uniqueAppliancesClone)
                    liTag.setAttribute('aria-selected', 'true');

                    uniqueAppliancesClone = uniqueAppliancesClone.filter(e => e !== tags[i])
                    console.log('Tags ', tags)
                    createTag(liTag, 'bg-green')
                    inputField.value = ''

                })


                break;
                // TODO REMOVE TAG FROM ARRAY

            case 'Ustensiles':
                liTag.classList.add('dropdown-item', 'bg-red');
                liTag.addEventListener('click', () => {

                    uniqueUstensilesClone = uniqueUstensilesClone.filter(e => e !== cleanTagName)

                    cleanTagListDOM(strUstensil)

                    uniqueUstensilesClone = [...new Set(uniqueUstensilesClone.map(element => {
                        return element.toLowerCase();
                    }))]

                    console.log('UNIQUE INGREDIENT', uniqueUstensilesClone)
                    liTag.setAttribute('aria-selected', 'true');

                    uniqueUstensilesClone = uniqueUstensilesClone.filter(e => e !== tags[i])
                    console.log('Tags ', tags)
                    createTag(liTag, 'bg-red')
                    inputField.value = ''
                })

                break;

        }


        document.getElementById(id + '__taglist').append(liTag);
    };
}