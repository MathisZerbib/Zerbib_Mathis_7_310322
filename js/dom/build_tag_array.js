const buildTagArray = (inputField, tags, id) => {



    
    for (let i = 0; ulLength(tags) > i; i++) {
        let liTag = document.createElement('li');
        let cleanTagName = ''
        liTag.setAttribute('aria-selected', 'false');
        liTag.setAttribute('role', 'option');
        liTag.innerHTML = tags[i];
        // console.log(tags[i])

        if (tags[i].includes('_')) {
            cleanTagName = tags[i].replace(/\s/g, '_')
        }else {
            cleanTagName = tags[i]
        }

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
                    // console.log('Litag', allIngredients, cleanTagName)
                    cleanTagListDOM(strIngredient)
                    liTag.setAttribute('aria-selected', 'true');
                        // console.log('Tags ', tags)
                    createTag(liTag, 'bg-primary')
                    inputField.value = ''
                })
                break;

            case 'Appareils':
                liTag.classList.add('dropdown-item', 'bg-green');
                liTag.addEventListener('click', () => {
                    cleanTagListDOM(strAppareil)
                    // console.log('UNIQUE APPLIANCE', uniqueAppliancesClone)
                    liTag.setAttribute('aria-selected', 'true');
                    // console.log('Tags ', tags)
                    createTag(liTag, 'bg-green')
                    inputField.value = ''

                })


                break;

            case 'Ustensiles':
                liTag.classList.add('dropdown-item', 'bg-red');
                liTag.addEventListener('click', () => {
                    cleanTagListDOM(strUstensil)
                    liTag.setAttribute('aria-selected', 'true');
                    createTag(liTag, 'bg-red')
                    inputField.value = ''
                })

                break;

        }

        // remove tag from dom if exist in list 
        if(tagArrayToSearch.length !== 0 ) {

            for(let y = 0; tagArrayToSearch.length !== y; y++) {
                
                if (tagArrayToSearch[y].text.toLowerCase().includes(cleanTagName.toLowerCase())) {
                    console.log('Include dont build', 'tagArrayToSearch',tagArrayToSearch.length, tagArrayToSearch[y], y)
                }else {
                    document.getElementById(id + '__taglist').append(liTag);
                }
            }

        }
        else if (tagArrayToSearch.length == 0) {
            document.getElementById(id + '__taglist').append(liTag);
        }

    };
}