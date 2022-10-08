const tagArraySearch = (tag, filter, elements) => {
  
  // if(tag.length > 2) {

  switch (filter) {
    case "ingredients":

        console.log('YEAH',elements);
        let isError = [];
            for(i=0; elements.length > i; i++) {
                if(cleanString(elements[i].textContent).includes(cleanString(tag))) {
                    elements[i].style.display = 'block';
                    // console.log(elements[i].childNodes[1].innerText)
                    if(!elements[i].className.includes('filtered')) {
                        elements[i].classList.add('filtered');
                    }
                    isError.push(false);
                }else{
                    elements[i].style.display = 'none';
                    elements[i].classList.remove('filtered');
                    isError.push(true);
                }
            }
            if(isError.includes(true) && !isError.includes(false)) {
                    displayError()
            }else {
                hideError()
            }

    

      break;

    case "appliances":
      console.log(tag, filter)
      break;

    case "ustensils":
      console.log(tag, filter)
      break;

    default:
      break;
  }









// /**
//  *
//  * @param {*} selectedFiltersUnduplicated
//  * @param {*} recipes
//  */
//  const createFiltersBar = (selectedFiltersUnduplicated, recipes) => {
// 	filtersBar.innerHTML = "";
// 	selectedFiltersUnduplicated.forEach((filter) => {
// 		return filtersBar.append(
// 			createDom(
// 				"div",
// 				`${filter}`,
// 				{ class: "filter__query" },
// 				createDom("i", { class: "fal fa-times-circle filter__query__icon" })
// 			)
// 		);
// 	});
// 	researchOnFilters(recipes, selectedFiltersUnduplicated);
// };

// const researchOnFilters = (recipes, selectedFiltersUnduplicated) => {
// 	const filterQuery = document.querySelectorAll(".filter__query");
// 	const filters = Array.from(filterQuery);
// 	const result = recipes.filter((recipe) => {
// 		return filters.every((item) => {
// 			const formatedItem = item.textContent.toLowerCase();
// 			return (
// 				recipe.ingredients.some((i) => {
// 					return i.ingredient.toLowerCase().includes(formatedItem);
// 				}) ||
// 				recipe.appliance.toLowerCase().includes(formatedItem) ||
// 				recipe.ustensils.some((ustensil) => {
// 					return ustensil.toLowerCase() === formatedItem;
// 				})
// 			);
// 		});
// 	});
// 	if (result.length) {
// 		recipesSection.innerHTML = "";
// 		createRecipesCard(result);
// 		listenOnFilterBar(filters, recipes);
// 	} else if (!result.length) {
// 		listenOnFilterBar(filters, recipes);
// 		recipesSection.innerHTML = "";
// 		recipesSection.append(
// 			createDom(
// 				"div",
// 				`Aucune recette ne correspond à votre critère… vous pouvez
// 		chercher « tarte aux pommes », « poisson », etc.`,
// 				{ class: "no__results" }
// 			)
// 		);
// 	}
// };

// const listenOnFilterBar = (filters, recipes) => {
// 	filters.forEach((filter) => {
// 		filter.addEventListener("click", () => {
// 			removeFilter(filter, filters, recipes);
// 		});
// 	});
// };

// const removeFilter = (selectedFilter, arrayOfFilters, recipes) => {
// 	const index = arrayOfFilters.indexOf(selectedFilter);
// 	arrayOfFilters.slice(index, 0);
// 	selectedFilter.remove();
// 	selectedFilters.splice(0, selectedFilters.length)
// 	if (!arrayOfFilters.length) {
// 		recipesSection.innerHTML = "";
// 		createRecipesCard(recipes);
// 	} else {
// 		researchOnFilters(recipes, arrayOfFilters);
// 	}
// };











  // for (i = 0; elements.length > i; i++) {
  //   if (cleanString(elements[i].textContent).includes(cleanString(letters))) {
  //     elements[i].style.display = "block";
  //     console.log(elements[i].childNodes[1].innerText);
  //     if (!elements[i].className.includes("filtered")) {
  //       elements[i].classList.add("filtered");
  //     }
  //     isError.push(false);
  //   } else {
  //     elements[i].style.display = "none";
  //     elements[i].classList.remove("filtered");
  //     isError.push(true);
  //   }
  // }
  // if (isError.includes(true) && !isError.includes(false)) {
  //   displayError();
  // } else {
  //   hideError();
  // }
  // }

  // else if(letters.length <=2) {
  //     for(i=0; elements.length > i; i++) {
  //         hideError()
  //             elements[i].style.display = 'block';
  //     }
  // }
};
