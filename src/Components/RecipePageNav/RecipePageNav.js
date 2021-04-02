import React from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../../RecipeContext';
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

  static contextType = RecipeContext;

  render() {
    const { findRecipe } = this.context;
    const { recipeId } = this.props.match.params;
    const recipe = findRecipe(recipeId) || {};
    
    return (
      <div className='recipePageNav'>
        <Link to='/'><button className='back-button'>Back</button></Link>
        <h3 className='recipe-page-type'>{recipe.type}</h3>
      </div>
      )}
}

export default RecipePageNav;