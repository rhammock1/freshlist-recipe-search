import React from 'react';
import RecipeContext from '../../RecipeContext';
import { getRecipesForType } from '../../helperFunction';
import Recipe from '../Recipe/Recipe';
import './RecipeListMain.css';

class RecipeListMain extends React.Component {
  static contextType = RecipeContext;

  render() {
    const { recipeType } = this.props.match.params;
    const recipes = this.context.recipes;
    const recipesForType = getRecipesForType(recipes, recipeType);
    recipesForType.sort(function(a,b) {
      if(a.name < b.name) {
        return -1;
      } else if(a.name > b.name) {
        return 1;
      } else {
        return 0
      }
    })
    return (
      <>
        
        <section className='recipe-list'>
          <ul className='recipe-list-ul'>
            {recipesForType.map((recipe, index) => {
          
          return(
            <li className='recipe-li' key={index}>
              <Recipe key={index} recipe={recipe} />
            </li>
            

          )
            
        })}
          </ul>
        </section>
        
      </>
      
      )
  }
}

export default RecipeListMain;