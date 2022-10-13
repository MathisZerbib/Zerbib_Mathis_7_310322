const tagListSearch = (e, ul, inputField) => {

  if (e.key >= 65 && e.key <= 90)
  var buffer;
  let searchTagListFromInput = [];
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
  if (e.key == 8 && searchTagListFromInput !== []) {
    searchTagListFromInput.pop();
  }


  if (buffer.length >= 3) {
    switch (idDiv) {
      case "Ingrédient":
        // console.log("New Array from ingredient:", newArrayIngredients)
        for (let i = 0; final_words.length > i; i++) {
          let searchTagIngredient = getCurrentIngredients()
          searchTagIngredient = searchTagIngredient.filter(
            (ingredient) =>
              cleanString(ingredient)
                .includes(cleanString(final_words[i]))
          );

          console.log('searchTagIngredient', searchTagIngredient)
          newArrayIngredients = [...new Set(searchTagIngredient)];
          cleanTagListDOM(idDiv);
          newArrayIngredients = [
            ...new Set(
              searchTagIngredient.map((element) => {
                return cleanString(element)
              })
            ),
          ];

          // console.log(newArrayIngredients, 'newArrayIngredients')
        }
        buildTagArray(inputField, newArrayIngredients, idDiv);

        break;
      case "Appareils":
        for (let j = 0; final_words.length > j; j++) {
          let searchTagAppareils = getCurrentAppliances();
          
          searchTagAppareils = searchTagAppareils.filter((appliance) =>
          cleanString(appliance)
              .includes(cleanString(final_words[j]))
          );
          newArrayAppareils = [...new Set(searchTagAppareils)];
          cleanTagListDOM(idDiv);

          newArrayAppareils = [
            ...new Set(
              newArrayAppareils.map((element) => {
                return cleanString(element);
              })
            ),
          ];
        }

        buildTagArray(inputField, newArrayAppareils, idDiv);

        // console.log("New Array from appareils :", newArrayAppareils)
        break;
      case "Ustensiles":
        for (let k = 0; final_words.length > k; k++) {
          let searchTagUstensils = getCurrentUstensils()
          searchTagUstensils = searchTagUstensils.filter((ustensil) =>
          cleanString(ustensil)
              .includes(cleanString(final_words[k]))
          );
          newArrayUstensils = [...new Set(searchTagUstensils)];
          // console.log("Search trought ingredients", searchTagIngredient)
          cleanTagListDOM(idDiv);
          newArrayUstensils = [
            ...new Set(
              newArrayUstensils.map((element) => {
                return cleanString(element);
              })
            ),
          ];
        }

        buildTagArray(inputField, newArrayUstensils, idDiv);

        // console.log("New Array from ustensils:", newArrayUstensils)
        break;
    }
  } 

};
