import React from 'react';
import Recipe from '../Recipe/Recipe';
import { findRecipe } from '../../helperFunction';
import RecipeContext from '../../RecipeContext';
import './RecipePageMain.css';


const Ingredient = function(props) {
  const rounded = Math.round(props.ing.amount * 100)/100;
  if (rounded === 0) {
    return (
    <p>{props.ing.unit} - {props.ing.ingredient}</p>
    )
  } else {
    return (
    <p>{rounded} {props.ing.unit} - {props.ing.ingredient}</p>
    )
  }
  

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
    
    const {recipeId} = this.props.match.params
    
    const recipe = findRecipe(recipes, recipeId) 
    
    return (
      <section className='recipePageMain'>
        <div className='recipe-titles'>
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
 

