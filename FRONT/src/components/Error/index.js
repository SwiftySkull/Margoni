// == Import npm
import React from 'react';

// == Import
import SideBar from 'src/containers/SideBar';

import Error404Img from 'src/assets/images/fond_error.JPG';

import './error.scss';

// == Composant
const Error = () => (
  <div id="error">
    <div className="resume">
      <div className="entete">
        <img src={Error404Img} alt="Dessin de tissu pour fond de page erreur" />
        <h2>Page Non Trouvée Error 404</h2>
      </div>
    </div>
    <SideBar />
  </div>
);

// == Export
export default Error;
