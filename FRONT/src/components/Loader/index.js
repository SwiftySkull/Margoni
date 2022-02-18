// == Import npm
import React from 'react';

// == Import
import './loader.scss';

import loader from 'src/assets/images/loader.gif';

// == Composant
const Loader = () => (
  <div id="loader">
    <div>
      <img src={loader} alt="" />
    </div>
  </div>
);

// == Export
export default Loader;
