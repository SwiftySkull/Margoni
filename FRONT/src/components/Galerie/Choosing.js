// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import { stringForUrl } from 'src/utils/utils';

import './galerie.scss';

// == Composant
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
          pictureFile = pic.painting.picture.file;
        }
      });

      if (pictureFile !== '') {
        return (
          <Link to={`/galerie/${urlRefer}/${stringForUrl(itera[1])}`} className="tableau" key={itera[0]}>
            <div className="card">
              <div>
                <img src={`data:image/jpeg;base64,${pictureFile}`} alt={`Peinture aléatoire de la ${altType} ${itera[1]}`} />
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
  array: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
  altType: PropTypes.string.isRequired,
  urlRefer: PropTypes.string.isRequired,
};

// == Export
export default Choosing;
