// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <div id="header">
    <nav>
      <h1><Link to="/">Denise Margoni</Link></h1>
      <p><Link to="/biographie">Biographie</Link></p>
      <p><Link to="">Galerie</Link></p>
    </nav>
  </div>
);

// == Export
export default Header;
