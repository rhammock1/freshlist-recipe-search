import React from 'react';


const RecipeContext = React.createContext({
  recipeTypes: [],
  recipes: [],
  handleSubmit: () => {},
  results: [],
  findRecipe: () => {},
  getRecipesForType: () => {},
});

export default RecipeContext;