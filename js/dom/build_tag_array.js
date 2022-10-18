const buildTagArray = (inputField, tags, id) => {
  for (let i = 0; ulLength(tags) > i; i++) {
    let liTag = document.createElement("li");
    let cleanTagName = "";
    liTag.setAttribute("aria-selected", "false");
    liTag.setAttribute("role", "option");
    liTag.innerHTML = tags[i];

    if (tags[i].includes("_")) {
      cleanTagName = tags[i].replace(/\s/g, "_");
    } else {
      cleanTagName = tags[i];
    }

    liTag.id = cleanTagName;

    let filtersboxIngredient = document.querySelector(
      "#sub-search__Ingrédient"
    );

    let ulIngredient = filtersboxIngredient.querySelector(
      ".sub-search__taglist"
    );

    let parentInputIngredient = ulIngredient.closest("div").id;
    let strIngredient = parentInputIngredient.replace("sub-search__", "");

    let filtersboxUstensil = document.querySelector("#sub-search__Ustensiles");

    let ulUstensil = filtersboxUstensil.querySelector(".sub-search__taglist");

    let parentInputUstensil = ulUstensil.closest("div").id;
    let strUstensil = parentInputUstensil.replace("sub-search__", "");

    let filtersboxAppliance = document.querySelector("#sub-search__Appareils");

    let ulAppliance = filtersboxAppliance.querySelector(".sub-search__taglist");

    let parentInputAppliance = ulAppliance.closest("div").id;
    let strAppareil = parentInputAppliance.replace("sub-search__", "");

    function build(type) {
      function isIngredient() {
        liTag.classList.add("dropdown-item", "bg-primary");
        liTag.addEventListener("click", () => {
          cleanTagListDOM(strIngredient);
          liTag.setAttribute("aria-selected", "true");
          createTag(liTag, "bg-primary");
          inputField.value = "";
        });
      }
      function isAppliance() {
        liTag.classList.add("dropdown-item", "bg-green");
        liTag.addEventListener("click", () => {
          cleanTagListDOM(strAppareil);
          liTag.setAttribute("aria-selected", "true");
          createTag(liTag, "bg-green");
          inputField.value = "";
        });
      }
      function isUstensiles() {
        liTag.classList.add("dropdown-item", "bg-red");
        liTag.addEventListener("click", () => {
          cleanTagListDOM(strUstensil);
          liTag.setAttribute("aria-selected", "true");
          createTag(liTag, "bg-red");
          inputField.value = "";
        });
      }
      var array = {
        Ingrédient: isIngredient,
        Appareils: isAppliance,
        Ustensiles: isUstensiles,
      };
      return array[type]();
    }

    build(id);

    let finalLength =
      tagArrayToSearch.ingredient.length +
      tagArrayToSearch.appliance.length +
      tagArrayToSearch.ustensil.length;

    for (let y = 0; tagArrayToSearch.ingredient.length !== y; y++) {
      if (
        cleanString(tagArrayToSearch.ingredient[y]).includes(
          cleanString(liTag.innerText)
        )
      ) {
       
      } else {
        document.getElementById(id + "__taglist").append(liTag);
      }
    }

    for (let y = 0; tagArrayToSearch.appliance.length !== y; y++) {
      if (
        cleanString(tagArrayToSearch.appliance[y]).includes(
          cleanString(liTag.innerText)
        )
      ) {
      } else {
        document.getElementById(id + "__taglist").append(liTag);
      }
    }

    for (let y = 0; tagArrayToSearch.ustensil.length !== y; y++) {
      if (
        cleanString(tagArrayToSearch.ustensil[y]).includes(
          cleanString(liTag.innerText)
        )
      ) {
      } else {
        document.getElementById(id + "__taglist").append(liTag);
      }
    }

    if (!finalLength) document.getElementById(id + "__taglist").append(liTag);

    // }
    // else

    // if (tagArrayToSearch.length == 0) {
    //     document.getElementById(id + '__taglist').append(liTag);
    // }
  }
};
