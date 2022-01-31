/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import SideBar from 'src/containers/SideBar';

import './siteMap.scss';

// == Composant
const SiteMap = () => {
  document.title = 'Plan du site';

  return (
    <div id="siteMap">
      <div className="siteMap">
        <h2>Plan du site</h2>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/biographie">Biographie</Link>
          </li>
          <li>
            <Link to="/galerie">Galerie</Link>
          </li>
          <li>
            <Link to="/avis">Avis</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/credits">Crédits</Link>
          </li>
        </ul>
      </div>
      <SideBar />
    </div>
  );
};

// == Export
export default SiteMap;
