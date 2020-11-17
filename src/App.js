import './App.css';
import React from 'react';
import RecipeContext from './RecipeContext';
import RECIPES from './RECIPES';
import Header from './Components/Header/Header';
import RecipeListMain from './Components/RecipeListMain/RecipeListMain';
import { Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    recipeTypes: [RECIPES.recipeTypes],
    recipes: [RECIPES.recipes],
    
  }

  render() {
    const value={RECIPES};
    return (
      <>
        <Header />
        <Route exact path="/" component={RecipeListMain} />
      </>    
    )
  }
}

export default App;
