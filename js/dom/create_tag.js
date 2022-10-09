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
    closeTag(tag, color);
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
        break;

      case "bg-green":
        // console.log('bg-green')
        tagArrayToSearch.appliance.push(tag.innerText);
        // removeElementFromArray(tagArrayToSearch, currentAppliances);

        break;

      case "bg-red":
        // console.log('bg-red')
        tagArrayToSearch.ustensil.push(tag.innerText);
        // removeElementFromArray(tagArrayToSearch, currentUstensils);

        break;
      default:
        break;
    }
    if(!filteredRecipes.length) {
        return tagArraySearch(tagArrayToSearch,getAllRecipes());
    }else {
        tagArraySearch(tagArrayToSearch, filteredRecipes);
    }
  }
};
