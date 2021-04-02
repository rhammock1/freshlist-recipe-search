import React from 'react';


const RecipeContext = React.createContext({
  recipeTypes: [],
  recipes: [],
  handleSubmit: () => {},
  results: []
});

export default RecipeContext;