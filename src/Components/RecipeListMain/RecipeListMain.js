import React from 'react';
import RecipeContext from '../../RecipeContext';
import { getRecipesForType } from '../../helperFunction';
import Recipe from '../Recipe/Recipe';

class RecipeListMain extends React.Component {
  static contextType = RecipeContext;

  render() {
    const { recipeType } = this.props.match.params;
    const recipes = this.context.recipes;
    const recipesForType = getRecipesForType(recipes, recipeType)
    
    return (
      <>
        
        <section className='recipe-list'>
          <ul>
            {recipesForType.map((recipe, index) => {
          
          return(
            <Recipe key={index} recipe={recipe} />

          )
            
        })}
          </ul>
        </section>
        
      </>
      
      )
  }
}

export default RecipeListMain;