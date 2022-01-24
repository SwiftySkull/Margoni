// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import Vignette from './vignette';

import './galerie.scss';

// == Composant
const Galerie = ({
  categories,
  pictures,
}) => {
  const displayVignettes = categories.length > 0 && pictures.length > 0;
  const spacing = pictures.length > 0 ? '80%' : '0%';

  return (
    <div id="galerie">
      <p><Link to="/">Accueil</Link></p>
      <p><Link to="/biographie">Biographie</Link></p>
      <p><a href="">Galerie</a></p>
      <ul style={{ height: spacing }}>
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
              key={categ.id}
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
