// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Image from 'src/assets/images/denise_photo_1.jpg';

import Vignette from './vignette';

import './galerie.scss';

// == Composant
const Galerie = ({
  categories,
  pictures,
}) => (
  <div id="galerie">
    <p><a href="">Accueil</a></p>
    <p><a href="">Biographie</a></p>
    <p><a href="">Galerie</a></p>
    <ul>
      {categories.map((categ) => (
        <Vignette
          name={categ.name}
          picture="" // utiliser filter
          altPicture={`Vignette ${categ.name}`}
          href=""
        />
      ))}
    </ul>
  </div>
);

Galerie.propTypes = {
  categories: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
};

// == Export
export default Galerie;
