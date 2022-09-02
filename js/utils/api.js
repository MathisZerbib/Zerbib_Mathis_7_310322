

    let recipes = [];
    const allIngredients = [];
    const allAppliances = [];
    const allUstensils = [];

    
    /**
     * Simule une connection à une base de donnée avec un fichier json
     */
    const init = async () => {
        const req = await fetch('http://localhost:5500/public/recipes.json');
        if (!req.ok) {
            throw "Données momentanément indisponible";
        }
        const data = await req.json();
        console.log(data)
        recipes = data;
        displayData(recipes)
    }

    /**
     * Récupère tous les ingrédients de toutes les recettes
     * @returns {array} Tableau contenant tous les ingrédients de toutes les recettes
     */
    const getAllIngredients = () => {

        if (allIngredients.length === 0) {
            recipes.forEach(recipe => {
                recipe.ingredients.map( ingredients => {
                    const ingredient =  ingredients.ingredient;

                    if (!allIngredients.includes(ingredient.toLowerCase())) {
                        allIngredients = [...allIngredients, ingredient.toLowerCase()];
                    }
                })
            })
        }

        return allIngredients;
    }

    /**
     * Récupère tous les appareils de toutes les recettes
     * @returns {array} Tableau contenant tous les appareils de toutes les recettes
     */
    const getAllAppliances = () => {

        if (allAppliances.length === 0) {
            recipes.forEach(recipe => {
                if (!allAppliances.includes(recipe.appliance.toLowerCase())) {
                    allAppliances = [...allAppliances, recipe.appliance.toLowerCase()];
                }
            })
        }

        return allAppliances;
    }

    /**
     * Récupère tous les ustensiles de toutes les recettes
     * @returns {array} Tableau contenant tous les ustensiles de toutes les recettes
     */
    const getAllUstensils = () => {
        if (allUstensils.length === 0) {
            recipes.forEach(recipe => {
                recipe.ustensils.map( ustensile => {

                    if (!allUstensils.includes(ustensile.toLowerCase())) {
                        allUstensils = [...allUstensils, ustensile.toLowerCase()];
                    }
                })
            })
        }

        return allUstensils;
    }

    /**
     * Récupère toutes les recettes existantes
     */
    const getAllRecipes = () => {
        return recipes;
    }

    /**
     * Récupère une recette avec son id
     * @param {number} id 
     * @returns {object} Objet contenant tous les détails de la recette
     */
    const getRecipe = (id) => {
        const recipe = recipes.filter(recipe => recipe.id === id);

        if (recipe.length !== 1) {
            console.error("Recette introuvable.");
            return;
        }
        return recipe[0];
    }
