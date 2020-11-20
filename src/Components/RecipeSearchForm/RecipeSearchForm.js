import React from 'react';

import RecipeContext from '../../RecipeContext';
import './RecipeSearchForm.css';

class RecipeSearchForm extends React.Component {

  static defaultProps = {
    history: {
      push: () => {}
    },
  }

  static contextType = RecipeContext;

  
  render() {
    let handleSubmit = this.context.handleSubmit;
    return (
//   The app doesn't really need the search option right now 
//  It is just here so I don't have to do it later
//  It won't really be neccesary until there are a lot more
//  recipes in the dateabase
//  Eventually this will all need to be refactored to use
//  a real db and api and such

      <form className='recipe-search' onSubmit={event => handleSubmit(event)}>
        <fieldset>
          <legend>Search for Recipes</legend>
          <div className='form-group'>
            <label htmlFor='search-bar'>Recipe: </label>
            <input type='text' id='search-bar' name='search-bar' />
          </div>
          {/* <div className='form-group'>
            <label htmlFor='recipeType'>Recipe Type: </label>
            <select id='recipeType' name='recipeType' >
              <option value={null}>filter</option>
              <option value='Appetizer'>Appetizer</option>
              <option value='Entree'>Entree</option>
              <option value='Side'>Side</option>
              <option value='Sauce'>Sauce</option>
              <option value='Beverage'>Beverage</option>
              <option value='Dessert'>Dessert</option>
            </select>
          </div> */}
          <button type='submit'>SEND IT!</button>
        </fieldset>
      </form>
    )
  }

}

export default RecipeSearchForm;