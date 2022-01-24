// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import Vignette from './vignette';

import './sideBar.scss';

// == Composant
const SideBar = ({
  categories,
  pictures,
}) => {
  const displayVignettes = categories.length > 0 && pictures.length > 0;
  const spacing = pictures.length > 0 ? '80%' : '0%';

  return (
    <div id="sideBar">
      <Link to="/"><p>Accueil</p></Link>
      <Link to="/biographie"><p>Biographie</p></Link>
      <Link to="/galerie"><p>Galerie</p></Link>
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

SideBar.propTypes = {
  categories: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
};

// == Export
export default SideBar;
