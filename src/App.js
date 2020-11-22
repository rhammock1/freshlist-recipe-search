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
import { Link, Route } from 'react-router-dom';
import SearchResults from './Components/SearchResults/SearchResults';
import { getRecipeForSearch } from './helperFunction';

class App extends React.Component {
  state = {
    recipeTypes: RECIPES.recipeType,
    recipes: RECIPES.recipes,
    searchResults: [],
  }
  handleSubmit = event => {
    event.preventDefault();
    const searchTerm = event.currentTarget['search-bar'].value;
    
    const recipes = this.state.recipes;
    
    let results = getRecipeForSearch(recipes, searchTerm)
    this.setState({searchResults: results})
    console.log('hello');
    this.props.history.push('/searchResults');
    return results
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
        <Route 
          path='/searchResults'
          component={SearchResults} />
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
      recipes: this.state.recipes,
      handleSubmit: this.handleSubmit,
      results: this.state.searchResults};
      
      
    return (
      
      <RecipeContext.Provider value={value}>
        <Header />
        <Route path='/' component={RecipeSearchForm} />
        <div className='big-container'>
          <nav>{this.renderNavViews()}</nav>
          <main>{this.renderMainViews()}</main>
          <footer><a href='https://freshlist.com'>&#169; Freshlist 2020</a></footer>
        </div>
        
      </RecipeContext.Provider>    
    )
  }
}

export default App;
