import React from 'react';

const Recipe = function(props) {
  
  return (
    <li className='recipe-container'>
      <h3>{props.name}</h3>
    </li>
    )
}

export default Recipe;