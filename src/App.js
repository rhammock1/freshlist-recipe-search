import './App.css';
import React from 'react';
import RecipeContext from './RecipeContext';
import RECIPES from './RECIPES';
import Header from './Components/Header/Header';

class App extends React.Component {
  state = {
    recipeTypes: [RECIPES.recipeTypes],
    recipes: [RECIPES.recipes],
    
  }

  render() {
    const value={RECIPES};
    return (
      <Header />
    )
  }
}

export default App;
