// == Import npm
import React from 'react';

// == Import
import './loader.scss';

// == Composant
const Loader = () => (
  <div id="loader">
    <div className="cube">
      <div className="top" />
      <div>
        <span style={{ transform: 'rotateY(calc(90deg * 0)) translateZ(50px)' }} />
        <span style={{ transform: 'rotateY(calc(90deg * 1)) translateZ(50px)' }} />
        <span style={{ transform: 'rotateY(calc(90deg * 2)) translateZ(50px)' }} />
        <span style={{ transform: 'rotateY(calc(90deg * 3)) translateZ(50px)' }} />
      </div>
      <div className="bottom" />
    </div>
  </div>
);

// == Export
export default Loader;
