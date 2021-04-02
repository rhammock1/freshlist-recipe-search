import './App.css';
import React from 'react';
import RecipeContext from './RecipeContext';
import Header from './Components/Header/Header';
import RecipeListMain from './Components/RecipeListMain/RecipeListMain';
import RecipeTypeNav from './Components/RecipeTypeNav/RecipeTypeNav';
import RecipeSearchForm from './Components/RecipeSearchForm/RecipeSearchForm';
import RecipePageMain from './Components/RecipePageMain/RecipePageMain';
import RecipePageNav from './Components/RecipePageNav/RecipePageNav';
import { Route } from 'react-router-dom';
import SearchResults from './Components/SearchResults/SearchResults';
import { getRecipeForSearch } from './helperFunction';

class App extends React.Component {
  state = {
    recipeTypes: ['Appetizer', 'Entree', 'Side', 'Sauce', 'Beverage', 'Dessert'],
    recipes: [],
    searchResults: [],
    error: {}
  }

  async handleGetRecipes() {
    const URL = 'https://apricot-crisp-76259.herokuapp.com/api/recipes';
    await fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((error) => this.setState({ error }));
        }
      })
      .then((recipes) => {
        this.setState({ recipes });
      })
      .catch((error) => this.setState({ error }));
  }

  componentDidMount() {
    console.log('App mounted');
    this.handleGetRecipes();  
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchTerm = event.currentTarget['search-bar'].value;
    
    const recipes = this.state.recipes;
    
    let results = getRecipeForSearch(recipes, searchTerm)
    this.setState({searchResults: results})
    this.props.history.push('/searchResults');
    return results
  }

  findRecipe = (recipeId) => {
    const { recipes } = this.state;
  
    const recipe = recipes.find((item) => item.id === parseInt(recipeId));
    console.log(recipe);
    return recipe;
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
      results: this.state.searchResults,
      findRecipe: this.findRecipe,
    };
      
      
    return (
      
      <RecipeContext.Provider value={value}>
        <Header />
        <Route path='/' component={RecipeSearchForm} />
        <div className='big-container'>
          <nav>{this.renderNavViews()}</nav>
          <main>{this.renderMainViews()}</main>
          <footer><a href='https://freshlist.com'>Freshlist &#169; 2021</a></footer>
        </div>
        
      </RecipeContext.Provider>    
    )
  }
}

export default App;
