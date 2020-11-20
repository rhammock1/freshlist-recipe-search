import React from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../../RecipeContext';
import { findRecipe, findRecipeType } from '../../helperFunction';
import './RecipePageNav.css'

class RecipePageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: []
    }
  }

  static contextType=RecipeContext;

  render() {
    const { recipes } = this.context;
    const { recipeId } = this.props.match.params;
    const recipe = findRecipe(recipes, recipeId) || {}
    // const type = findRecipeType(recipeTypes, recipe.recipeType)
    
    return (
      <div className='recipePageNav'>
        <Link to='/'><button>Back</button></Link>
        <h3 className='recipe-page-type'>{recipe.recipeType}</h3>
        
          
      </div>
      )}
}

export default RecipePageNav;