import React from 'react';
import { Link } from 'react-router-dom';

const Header = function() {
  return (
    <header>
      <Link to='/'>
        <h1>Freshlist Recipe Search</h1>
      </Link>
    </header>
    )
}

export default Header;