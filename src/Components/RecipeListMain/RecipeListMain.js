import React from 'react';
import RecipeContext from '../../RecipeContext';
import RecipeSearchForm from '../RecipeSearchForm/RecipeSearchForm';
import Recipe from '../Recipe/Recipe';

class RecipeListMain extends React.Component {
  static contextType = RecipeContext;

  render() {
    const recipes = this.context.recipes
    console.log(recipes)
    return (
      <main>
        <RecipeSearchForm />
        <section className='recipe-list'>
          <ul>
            {recipes.map((recipe, index) => {
          console.log(recipe);
          
          return(
            <Recipe key={index} recipe={recipe} />

          )
            
        })}
          </ul>
        </section>
        
      </main>
      
      )
  }
}

export default RecipeListMain;