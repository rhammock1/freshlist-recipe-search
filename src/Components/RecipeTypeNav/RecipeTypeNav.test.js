import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RecipeTypeNav from './RecipeTypeNav';

describe('RecipeTypeNav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeTypeNav />, div);
  })
})