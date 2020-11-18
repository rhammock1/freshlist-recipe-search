import './App.css';
import React from 'react';
import RecipeContext from './RecipeContext';
import RECIPES from './RECIPES';
import Header from './Components/Header/Header';
import RecipeListMain from './Components/RecipeListMain/RecipeListMain';
import RecipeTypeNav from './Components/RecipeTypeNav/RecipeTypeNav';
import RecipeSearchForm from './Components/RecipeSearchForm/RecipeSearchForm';
import RecipePageMain from './Components/RecipePageMain/RecipePageMain';
import RecipePageNav from './Components/RecipePageNav/RecipePageNav';
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
      <Route
          path='/recipes/:recipeId'
          component={RecipePageMain} />
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
        <Route path='/recipes/:recipeId' component={RecipePageNav} />
      </>
    )
  }

  render() {
    const value={
      recipeTypes: this.state.recipeTypes, 
      recipes: this.state.recipes,};
      
      
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
