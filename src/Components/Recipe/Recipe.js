import React from 'react';
import './Recipe.css';
import { Link } from 'react-router-dom';

const Recipe = function(props) {
  const recipe = props.recipe
  return (
    <div className='recipe-container'>
      <Link to={`/recipes/${recipe.id}`} >
        <h3>{recipe.name}</h3>
      </Link>
    
    </div>
      
    )
}

export default Recipe;