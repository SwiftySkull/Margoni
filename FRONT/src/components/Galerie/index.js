// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Vignette from './vignette';

import './galerie.scss';

// == Composant
const Galerie = ({
  categories,
  pictures,
}) => {
  const displayVignettes = categories.length > 0 && pictures.length > 0;

  return (
    <div id="galerie">
      <p><a href="">Accueil</a></p>
      <p><a href="">Biographie</a></p>
      <p><a href="">Galerie</a></p>
      <ul>
        {categories.map((categ) => {
          let pictureFile = '';
          if (displayVignettes) {
            pictures.filter((pic) => {
              if (pic.id === categ.id) {
                pictureFile = pic.painting.picture.file;
              }
            });
          }
          return (
            <Vignette
              name={categ.name}
              picture={pictureFile} // utiliser filter
              altPicture={`Vignette ${categ.name}`}
              href=""
            />
          );
        })}
      </ul>
    </div>
  );
};

Galerie.propTypes = {
  categories: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
};

// == Export
export default Galerie;
