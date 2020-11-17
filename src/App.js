import './App.css';
import React from 'react';
import RecipeContext from './RecipeContext';
import RECIPES from './RECIPES';
import Header from './Components/Header/Header';
import RecipeListMain from './Components/RecipeListMain/RecipeListMain';
import RecipeTypeNav from './Components/RecipeTypeNav/RecipeTypeNav';
import RecipeSearchForm from './Components/RecipeSearchForm/RecipeSearchForm';
import { Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    recipeTypes: RECIPES.recipeType,
    recipes: RECIPES.recipes,
    
  }

  renderMainViews() {

    return (
      <>
        {['/', '/recipeType/:recipeType'].map(path => {
          return(
            <Route exact key={path} path={path} component={RecipeListMain} />
          )
        
      })}
      </>
  
  )
  }
  renderNavViews() {
    
    return (
      <>
        {['/', '/recipeType/:recipeType'].map(path => {
          return (
            <Route exact key={path} path={path} component={RecipeTypeNav} />
          )
          
        })}
      </>
    )
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
        <RecipeSearchForm />
        <nav>{this.renderNavViews()}</nav>
        <main>{this.renderMainViews()}</main>
      </RecipeContext.Provider>    
    )
  }
}

export default App;
