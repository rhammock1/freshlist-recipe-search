import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = function() {
  return (
    <header>
      <Link to='/'>
        <img src='https://www.freshlist.com/skin1/design/freshlist/logo.svg' />
        {/* <h1>Freshlist Recipe Search</h1> */}
      </Link>
    </header>
    )
}

export default Header;