import React from 'react';
import './menu-styles.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imgs/uxflix-logo-pink.svg';

function Menu() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} className="logo" alt="UXFlix logo" />
      </Link>

      <div className="search-input filled">
        <input type="search" />
        <span />
      </div>
    </header>
  );
}

export default Menu;
