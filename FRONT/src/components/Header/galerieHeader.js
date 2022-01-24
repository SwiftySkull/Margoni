// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
const GalerieHeader = () => (
  <div id="header">
    <nav>
      <h1><Link to="/">Denise Margoni</Link></h1>
      <p><Link to="/biographie">Biographie</Link></p>
      <p><Link to="/">Accueil</Link></p>
    </nav>
  </div>
);

// == Export
export default GalerieHeader;
