import './App.css';
import React from 'react';
import RecipeContext from './RecipeContext';
import RECIPES from './RECIPES';
import Header from './Components/Header/Header';
import RecipeListMain from './Components/RecipeListMain/RecipeListMain';
import { Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    recipeTypes: RECIPES.recipeType,
    recipes: RECIPES.recipes,
    
  }

  render() {
    const value={
      recipeTypes: this.state.recipeTypes, 
      recipes: this.state.recipes,};
      console.log(this.state.recipes);
      console.log(value);
    return (
      
      <RecipeContext.Provider value={value}>
        <Header />
        <Route exact path="/" component={RecipeListMain} />
      </RecipeContext.Provider>    
    )
  }
}

export default App;
