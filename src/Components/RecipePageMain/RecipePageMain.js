import React from 'react';
import Recipe from '../Recipe/Recipe';
import { findRecipe } from '../../helperFunction';
import RecipeContext from '../../RecipeContext';


const Ingredient = function(props) {
  
  return (
    <p>{props.ing.amount} {props.ing.unit} - {props.ing.ingredient}</p>
    )

}

class RecipePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    },
    recipe: {
      ingredients: [],
    }
  }

  static contextType = RecipeContext
  
  render() {
    const recipes = this.context.recipes;
    
    const recipeId = this.props.match.params.recipeId
    
    const recipe = findRecipe(recipes, recipeId) || {content: ''}
    console.log(recipe);
    
    return (
      <section className='recipePageMain'>
        <div className='recipe-title'>
          <Recipe recipe={recipe} />
        </div>
        <div className='recipe-ing'>
          <ul>
            
              {recipe.ingredients.map((ing, index) => {
                return (
                  <li key={index}>
                    <Ingredient key={index} ing={ing} />
                  </li>
                  
                )
              })}
            
            
          </ul>
        </div>
        <div className='recipe-content'>
          <p>{recipe.content}</p>
        </div>
        
        
      </section>
      
    )
  }


}

export default RecipePageMain;
 

