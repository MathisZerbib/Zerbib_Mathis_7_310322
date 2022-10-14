// Create a tag in advancedSearch field
const createTag = (el, color) => {
  let tag = document.createElement("span");
  let tagClose = document.createElement("button");

  tagClose.className = "far fa-times-circle btn text-white";
  tagClose.setAttribute("role", "button");

  tag.innerHTML = el.innerHTML;
  tag.className = color + " tag btn text-white px-2 mx-2  btn-sm mb-1";
  tag.classList.add("tag-posted");

  tagArea.appendChild(tag);
  tag.appendChild(tagClose);
  tagClose.addEventListener("click", () => {
    closeTag(tag, color, tag.innerText);
    console.log("tagArrayToSearch", tagArrayToSearch);
    for (let i = 0; tagArrayToSearch.length > i; i++) {
      const index = tagArrayToSearch[i].text.indexOf(tag.innerText);
      if (index > -1) {
        // only splice array when item is found
        tagArrayToSearch.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    // array = [2, 9]
  });

  triggerSearch(color);

  function triggerSearch(color) {
    switch (color) {
      case "bg-primary":
        // console.log('bg-primary')
        console.log(
            "currentIngredients.filter(e => e !== tagArrayToSearch);",
            tagArrayToSearch
          );

          
        tagArrayToSearch.ingredient.push(tag.innerText);

        for(let i =0; tagArrayToSearch.ingredient.length !== i; i++) {
          currentIngredients = currentIngredients.filter(e=> e!== tagArrayToSearch.ingredient[i])
      }
        break;

      case "bg-green":
        // console.log('bg-green')
        tagArrayToSearch.appliance.push(tag.innerText);
        // removeElementFromArray(tagArrayToSearch, currentAppliances);
        for(let i =0; tagArrayToSearch.appliance.length !== i; i++) {
          currentAppliances = currentAppliances.filter(e=> e!== tagArrayToSearch.appliance[i])
      }
        break;

      case "bg-red":
        // console.log('bg-red')
        tagArrayToSearch.ustensil.push(tag.innerText);
        // removeElementFromArray(tagArrayToSearch, currentUstensils);
        for(let i =0; tagArrayToSearch.ustensil.length !== i; i++) {
          currentUstensils = currentUstensils.filter(e=> e!== tagArrayToSearch.ustensil[i])
      }
        break;
      default:
        break;
    }


      console.log("FILTER PRINCIPAL SEARCH ===> ")
        tagArraySearch(tagArrayToSearch, filteredRecipes);
  }
};
