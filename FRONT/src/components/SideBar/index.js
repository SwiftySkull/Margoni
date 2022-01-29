// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { stringForUrl } from 'src/utils/utils';

// == Import
import Vignette from './vignette';

import './sideBar.scss';

// == Composant
/**
 * Component which display the side bar with some navigation and painting categories
 *
 * @param {array} categories Array of random categories
 * @param {array} pictures Array of the paintings of the categories
 */
const SideBar = ({
  categories,
  pictures,
}) => {
  const spacing = pictures.length > 0 ? '80%' : '0%';

  return (
    <div id="sideBar">
      <Link to="/"><p>Accueil</p></Link>
      <Link to="/biographie"><p>Biographie</p></Link>
      <Link to="/galerie"><p>Galerie</p></Link>
      <ul style={{ height: spacing }}>
        {categories.map((categ) => {
          let pictureFile = '';
          pictures.filter((pic) => {
            if (pic.id === categ.id) {
              pictureFile = pic.painting.picture.file;
            }
          });

          return (
            <Vignette
              key={categ.id}
              name={categ.name}
              picture={pictureFile}
              altPicture={`Vignette ${categ.name}`}
              href={`/galerie/categorie/${stringForUrl(categ.name)}`}
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
