// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

// == Composant
const Header = ({
  menuStatus,
  displayMenu,
}) => (
  <div id="header">
    <nav className="nav-big">
      <h1><Link to="/">Denise Margoni</Link></h1>
      <p><Link to="/">Accueil</Link></p>
      <p><Link to="/biographie">Biographie</Link></p>
      <p><Link to="/galerie">Galerie</Link></p>
      <p><Link to="/avis">Avis</Link></p>
    </nav>
    <div className="navigation-menu">
      {menuStatus && (
        <>
          <nav className="nav-small">
            <h1><Link to="/">Denise Margoni</Link></h1>
            <p><Link to="/">Accueil</Link></p>
            <p><Link to="/biographie">Biographie</Link></p>
            <p><Link to="/galerie">Galerie</Link></p>
            <p><Link to="/avis">Avis</Link></p>
          </nav>
          <div>
            <div className="closeMenu" onClick={displayMenu}>
              <p />
              <p />
            </div>
          </div>
        </>
      )}
      {!menuStatus && (
        <>
          <h1><Link to="/">Denise Margoni</Link></h1>
          <div>
            <div className="openMenu" onClick={displayMenu}>
              <p />
              <p />
              <p />
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

Header.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
  displayMenu: PropTypes.func.isRequired,
};

// == Export
export default Header;
