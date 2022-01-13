// == Import npm
import React from 'react';

// == Import
import Avis from 'src/containers/Avis';
import Expositions from 'src/containers/Expositions';
import Galerie from 'src/containers/Galerie';

import './home.scss';

// == Composant
const Home = () => (
  <div id="home">
    <div className="entete">
      <p>Texte</p>
    </div>
    <Avis />
    <Expositions />
    <Galerie />
  </div>
);

// == Export
export default Home;
