import React from 'react';
import RecipeContext from '../../RecipeContext';
import Recipe from '../Recipe/Recipe';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  static contextType=RecipeContext;

  render() {
    const results = this.context.results;
    console.log(results);
    return(
      <section className='recipe-list'>
        <Link to='/'><button>Back</button></Link>
          <ul>
            {results.map((recipe, index) => {
          
          return(
            <li className='recipe-li' key={index}>
              <Recipe key={index} recipe={recipe} />
            </li>
            

          )
            
        })}
          </ul>
      </section>
      )
  }
}

export default SearchResults;