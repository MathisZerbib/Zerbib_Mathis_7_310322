const tagArraySearch = (searchedTags, filteredRecipes) => {
  // console.log(searchedTags)

  // console.log(searchedTags)



  for (i = 0; searchedTags.ingredient.length !== i; i++) {

    if(searchedTags.ingredient[i]) {
      console.log("filteredRecipes", filteredRecipes, searchedTags.ingredient[i].toLocaleLowerCase());

      filteredRecipes = filteredRecipes.filter(
        (recipe) =>
          !searchedTags.ingredient[i].length ||
          (recipe.ingredients.find((ingredient) =>
            ingredient.ingredient.toLocaleLowerCase()
              .includes(searchedTags.ingredient[i].toLocaleLowerCase())
          ) 
          
          // &&
          //   (!searchedTags[i].length ||
          //     recipe.appliance
          //       .toLocaleLowerCase()
          //       .includes(searchedTags[i].toLocaleLowerCase())) &&
          //   (!searchedTags[i].length ||
          //     recipe.ustensils.map((ustensil) =>
          //       ustensil
          //         .toLocaleLowerCase()
          //         .includes(searchedTags[i].toLocaleLowerCase())
          //     ))
              
              )
      );
    }


  }
  displayData(filteredRecipes);
};
