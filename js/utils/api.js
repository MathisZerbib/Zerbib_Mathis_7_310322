let recipes = [];
let currentRecipes = [];
let currentIngredients = [];
let currentAppliances = [];
let currentUstensils = [];

let allIngredients = [];
let allAppliances = [];
let allUstensils = [];
let newRecipeMatch = [];

/**
 * Simule une connection à une base de donnée avec un fichier json
 */

const init = async () => {
  const req = await fetch("./public/recipes.json");
  if (!req.ok) {
    throw "Données momentanément indisponible";
  }
  const data = await req.json();
  // console.log(data)
  recipes = data;
  displayData(recipes);
};

/**
 * Récupère tous les ingrédients de toutes les recettes
 * @returns {array} Tableau contenant tous les ingrédients de toutes les recettes
 */
const getAllIngredients = () => {
  if (allIngredients.length === 0) {
    recipes.map((recipe) => {
      recipe.ingredients.map((ingredients) => {
        const ingredient = ingredients.ingredient;

        if (!allIngredients.includes(ingredient.toLowerCase())) {
          allIngredients = [...allIngredients, ingredient.toLowerCase()];
        }
      });
    });
  }

  return allIngredients.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère tous les appareils de toutes les recettes
 * @returns {array} Tableau contenant tous les appareils de toutes les recettes
 */
const getAllAppliances = () => {
  if (allAppliances.length === 0) {
    recipes.map((recipe) => {
      if (!allAppliances.includes(recipe.appliance.toLowerCase())) {
        allAppliances = [...allAppliances, recipe.appliance.toLowerCase()];
      }
    });
  }

  return allAppliances.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère tous les ustensiles de toutes les recettes
 * @returns {array} Tableau contenant tous les ustensiles de toutes les recettes
 */
const getAllUstensils = () => {
  if (allUstensils.length === 0) {
    recipes.map((recipe) => {
      recipe.ustensils.map((ustensile) => {
        if (!allUstensils.includes(ustensile.toLowerCase())) {
          allUstensils = [...allUstensils, ustensile.toLowerCase()];
        }
      });
    });
  }

  return allUstensils.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère toutes les recettes existantes
 */
const getAllRecipes = () => {
  return recipes;
};

const setCurrentRecipes = (data) => {
  data = [...new Set(data)];
  currentRecipes = data;
};

const getCurrentRecipes = () => {
  return currentRecipes;
};

const getCurrentIngredients = () => {
  if (currentIngredients.length === 0) {
    currentRecipes.map((recipe) => {
      recipe.ingredients.map((ingredients) => {
        const ingredient = ingredients.ingredient;

        if (!currentIngredients.includes(ingredient.toLowerCase())) {
          currentIngredients = [
            ...currentIngredients,
            ingredient.toLowerCase(),
          ];
        }
      });
    });
  }

  return currentIngredients.sort((a, b) => a.localeCompare(b));
};




const getCurrentAppliances = () => {
    if (currentAppliances.length === 0) {
        currentRecipes.map((recipe) => {
          if (!currentAppliances.includes(recipe.appliance.toLowerCase())) {
            currentAppliances = [...currentAppliances, recipe.appliance.toLowerCase()];
          }
        });
      }
    
      return currentAppliances.sort((a, b) => a.localeCompare(b));
    };



    const getCurrentUstensils = () => {
        if (currentUstensils.length === 0) {
            currentRecipes.map((recipe) => {
            recipe.ustensils.map((ustensile) => {
              if (!currentUstensils.includes(ustensile.toLowerCase())) {
                currentUstensils = [...currentUstensils, ustensile.toLowerCase()];
              }
            });
          });
        }
      
        return currentUstensils.sort((a, b) => a.localeCompare(b));
      };
      
/**
 * Récupère une recette avec son id
 * @param {number} id
 * @returns {object} Objet contenant tous les détails de la recette
 */
const getRecipe = (id) => {
  const recipe = recipes.filter((recipe) => recipe.id === id);

  if (recipe.length !== 1) {
    console.error("Recette introuvable.");
    return;
  }
  return recipe[0];
};
