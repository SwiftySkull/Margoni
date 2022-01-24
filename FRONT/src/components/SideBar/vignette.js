// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './sideBar.scss';

// == Composant
/**
 * Component to display a little vignette for the side galery bar
 *
 * @param {string} name Name of the vignette
 * @param {string} picture Source of the picture
 * @param {string} altPicture Alternative text for the picture
 * @param {string} href Path to access the galery of a kind
 */
const Vignette = ({
  name,
  picture,
  altPicture,
  href,
}) => (
  <li>
    <a href={href}>
      <img src={`data:image/jpeg;base64,${picture}`} alt={altPicture} />
      <p>{name}</p>
    </a>
  </li>
);

Vignette.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  altPicture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

// == Export
export default Vignette;
