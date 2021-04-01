import React from 'react';
import { NavLink } from 'react-router-dom';
import RecipeContext from '../../RecipeContext';
import './RecipeTypeNav.css';

class RecipeTypeNav extends React.Component {
  static contextType = RecipeContext;

  handleAddClass(event) {
    
    let id = event.currentTarget.id;
    let active = document.getElementById(id);
    active.classList.add('active');
  }

  render() {
    const { recipeTypes } = this.context;
    return (
      <ul className='recipeTypeNav'>
        {recipeTypes.map((type, index) => {
          return (
            <li className='type-nav'  key={index}>
              <NavLink onClick={event => this.handleAddClass(event)}className='type-link' id={type} to={`/recipeType/${type}`}>{type}</NavLink>
            </li>
            )
        })}
      </ul>
      )
  }
}

export default RecipeTypeNav;