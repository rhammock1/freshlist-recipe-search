import React from 'react';
import { NavLink } from 'react-router-dom';
import RecipeContext from '../../RecipeContext';

class RecipeTypeNav extends React.Component {
  static contextType = RecipeContext;

  render() {
    const recipeTypes = this.context.recipeTypes;
    return (
      <ul className='recipeTypeNav'>
        {recipeTypes.map((type, index) => {
          return (
            <li className='type-nav' key={index}>
              <NavLink className='type-link' to={`/recipeType/${type.type}`}>{type.type}</NavLink>
            </li>
            )
        })}
      </ul>
      )
  }
}

export default RecipeTypeNav;