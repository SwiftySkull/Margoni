// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import { smallImageUrl } from 'src/utils/utils';

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
    <Link to={href}>
      <img src={smallImageUrl + picture} alt={altPicture} draggable="false" />
      <p>{name}</p>
    </Link>
  </li>
);

Vignette.propTypes = {
  /** Name of the vignette */
  name: PropTypes.string.isRequired,

  /** Source of the picture */
  picture: PropTypes.string.isRequired,

  /** Alternative text for the picture */
  altPicture: PropTypes.string.isRequired,

  /** Path to access the galery of a kind */
  href: PropTypes.string.isRequired,
};

// == Export
export default Vignette;
