import React from 'react';
import RecipeContext from '../../RecipeContext';
import Recipe from '../Recipe/Recipe';
import { Link } from 'react-router-dom';
import './SearchResults.css';

class SearchResults extends React.Component {
  static contextType = RecipeContext;

  render() {
    const { results } = this.context;
    console.log(results);
    const message = (results.length === 0) ? 'Sorry about that! There aren\'t any recipes matching that search term.' : null;
    return(
      <section className='recipe-list'>
        <Link to='/'><button>Back</button></Link>
        <h2 className='results'>Results:</h2>
        <p>{message}</p>
          <ul className='search-results'>
            {results.map((recipe, index) => {
          
          return(
            <li className='recipe-li results-li' key={index}>
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