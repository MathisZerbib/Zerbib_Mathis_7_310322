const tagListSearch = (e, ul, inputField) => {
  if (e.key == 8 && searchTagListFromInput !== []) {
    searchTagListFromInput.pop();
  } else if (e.key == 8 && searchTagListFromInput == []) {
    console.log("Afficheles bon ingrédients MERDE !");
  }
  if (e.key >= 65 && e.key <= 90) var buffer;
  buffer = inputField.value;
  searchTagListFromInput.push(buffer);
  // console.log(searchTagListFromInput);
  var final_words = [];
  final_words.push(searchTagListFromInput[searchTagListFromInput.length - 1]);
  // console.log(final_words);
  let newArrayIngredients = [];
  let newArrayUstensils = [];
  let newArrayAppareils = [];
  let parentInput = ul.closest("div").id;
  let idDiv = parentInput.replace("sub-search__", "");

  if (buffer.length >= 3) {
    switch (idDiv) {
      case "Ingrédient":
        for (let i = 0; final_words.length > i; i++) {
          let searchTagIngredient = getAllIngredients().filter(
            (ingredient) =>
              ingredient
                .toLocaleLowerCase()
                .includes(final_words[i].toLocaleLowerCase())
          );

          // newArrayIngredients = [...new Set(searchTagIngredient)];
          cleanTagListDOM(idDiv);
          newArrayIngredients = [
            ...new Set(
              searchTagIngredient.map((element) => {
                return element.toLowerCase();
              })
            ),
          ];

          // console.log(newArrayIngredients, 'newArrayIngredients')
        }
        // console.log("New Array from ingredient:", newArrayIngredients)

        buildTagArray(inputField, newArrayIngredients, idDiv);

        break;
      case "Appareils":
        for (let j = 0; final_words.length > j; j++) {
          let searchTagAppareils = getAllAppliances().filter((appliance) =>
            appliance
              .toLocaleLowerCase()
              .includes(final_words[j].toLocaleLowerCase())
          );
          newArrayAppareils = [...new Set(searchTagAppareils)];
          cleanTagListDOM(idDiv);

          newArrayAppareils = [
            ...new Set(
              newArrayAppareils.map((element) => {
                return element.toLowerCase();
              })
            ),
          ];
        }

        buildTagArray(inputField, newArrayAppareils, idDiv);

        // console.log("New Array from appareils :", newArrayAppareils)
        break;
      case "Ustensiles":
        for (let k = 0; final_words.length > k; k++) {
          let searchTagUstensils = getAllUstensils().filter((ustensil) =>
            ustensil
              .toLocaleLowerCase()
              .includes(final_words[k].toLocaleLowerCase())
          );
          newArrayUstensils = [...new Set(searchTagUstensils)];
          // console.log("Search trought ingredients", searchTagIngredient)
          cleanTagListDOM(idDiv);
          newArrayUstensils = [
            ...new Set(
              newArrayUstensils.map((element) => {
                return element.toLowerCase();
              })
            ),
          ];
        }

        buildTagArray(inputField, newArrayUstensils, idDiv);

        // console.log("New Array from ustensils:", newArrayUstensils)
        break;
    }
  } 
  // else {
  //   // toggleList(ul, filterArrow, false)
  //   cleanTagListDOM(idDiv);

  //   switch (idDiv) {
  //     case "Ingrédient":
  //       // uniqueIngredients = [...new Set(uniqueIngredients.map(element => {
  //       //     return element.toLowerCase();
  //       // }))]
  //       buildTagArray(inputField, allIngredients, idDiv);
  //       break;
  //     case "Appareils":
  //       buildTagArray(inputField, allAppliances, idDiv);
  //       break;

  //     case "Ustensiles":
  //       buildTagArray(inputField, allUstensils, idDiv);
  //   }
  // }
};
