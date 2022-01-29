// == Import npm
import React from 'react';

// == Import
import './loader.scss';
import pinceau from 'src/assets/images/pinceau.png';

// == Composant
const Loader = () => (
  <div id="loader">
    <div className="cube">
      <img src={pinceau} alt="" />
    </div>
  </div>
);

// == Export
export default Loader;
