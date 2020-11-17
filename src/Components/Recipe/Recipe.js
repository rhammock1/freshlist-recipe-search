import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = function(props) {
  
  return (
    <li className='recipe-container'>
      <Link to={`/recipes/${props.recipe.id}`} >
        <h3>{props.recipe.name}</h3>
      </Link>
    </li>
    )
}

export default Recipe;