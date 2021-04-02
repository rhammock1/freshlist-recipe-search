import React from 'react';
import Recipe from '../Recipe/Recipe';
import RecipeContext from '../../RecipeContext';
import './RecipePageMain.css';


const Ingredient = function(props) {
  const rounded = Math.ceil(props.ing.amount);
  if (rounded === 0) {
    return (
    <p className='recipe-ing'><span className='unit'>{props.ing.unit}</span> <span className='ingredient'>{props.ing.ingredient}</span></p>
    )
  } else {
    return (
    <p className='recipe-ing'><span className='amount'>{props.ing.amount}</span> <span className='unit'>{props.ing.unit}</span> <span className='ingredient'>{props.ing.ingredient}</span></p>
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
    const { findRecipe } = this.context;
    const { recipeId } = this.props.match.params;
    const recipe = findRecipe(recipeId) || { ingredients: []};
    
    return (
      <section className='recipePageMain'>
        <div className='recipe-titles'>
          <Recipe recipe={recipe} />
        </div>
        <div className='recipe-ing'>
          <ul>
            
              {recipe.ingredients.map((ing, index) => {
                return (
                  <li className='ing-container' key={index}>
                    <Ingredient key={index} ing={ing} />
                  </li>
                  
                )
              })}
            
            
          </ul>
        </div>
        <div className='recipe-content'>
          <p className='content'>{recipe.content}</p>
        </div>
        
        
      </section>
      
    )
  }


}

export default RecipePageMain;
 

