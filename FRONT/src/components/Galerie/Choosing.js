// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import { stringForUrl, smallImageUrl } from 'src/utils/utils';

import './galerie.scss';

// == Composant
/**
 * Component to display the categories or techniques available in the research
 *
 * @param {array} array Array of the categories or techniques available
 * @param {array} pictures Array of the pictures available
 * @param {string} altType Text for the alt element of the paintings
 * @param {string} urlRefer Text to specify the URL
 */
const Choosing = ({
  array,
  pictures,
  altType,
  urlRefer,
}) => (
  <>
    {array.map((itera) => {
      let pictureFile = '';

      pictures.filter((pic) => {
        if (pic.id === itera[0]) {
          pictureFile = pic.painting.picture.pathname;
        }
      });

      if (pictureFile !== '') {
        return (
          <Link to={`/galerie/${urlRefer}/${stringForUrl(itera[1])}/${itera[0]}/page/1`} className="tableau" key={itera[0]}>
            <div className="card">
              <div>
                <img src={smallImageUrl + pictureFile} alt={`Peinture aléatoire de la ${altType} ${itera[1]}`} />
              </div>
              <h3>{itera[1]}</h3>
            </div>
          </Link>
        );
      }
    })}
  </>
);

Choosing.propTypes = {
  /** Array of the categories or techniques available */
  array: PropTypes.array.isRequired,

  /** Array of the pictures available */
  pictures: PropTypes.array.isRequired,

  /** Text for the alt element of the paintings */
  altType: PropTypes.string.isRequired,

  /** Text to specify the URL */
  urlRefer: PropTypes.string.isRequired,
};

// == Export
export default Choosing;
