import './App.css';
import React from 'react';
import RecipeContext from './RecipeContext';
import RECIPES from './RECIPES';

class App extends React.Component {
  state = {
    recipeTypes: [RECIPES.recipeTypes],
    recipes: [RECIPES.recipes],
    
  }

  render() {
    const value={RECIPES};
    
  }
}

export default App;
