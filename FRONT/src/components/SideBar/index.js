// == Import npm
import React from 'react';

import PropTypes from 'prop-types';
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
  loading,
}) => (
  <div id="sideBar">
    {loading && (
    <p className="sideLoading">Chargement...</p>
    )}
    {!loading && (
    <ul>
      {categories.map((categ) => {
        let pictureFile = '';
        pictures.filter((pic) => {
          if (pic.id === categ.id) {
            pictureFile = pic.painting.picture.pathname;
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
    )}
  </div>
);

SideBar.propTypes = {
  categories: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default SideBar;
