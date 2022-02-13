/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './avis.scss';

// == Composant
const UniqueAvis = ({
  avis,
}) => (
  <div id="uniqueAvis">
    {avis.id !== undefined && (
      <div className="crit">
        <div className="content">
          <p>"{avis.content}"</p>
        </div>
        <p className="author">{avis.author}</p>
        <p className="author-job">{avis.job}</p>
      </div>
    )}
    {avis.id === undefined && (
      <div className="crit">
        <div className="content">
          <p>Pas d'avis à afficher actuellement</p>
        </div>
      </div>
    )}
  </div>
);

UniqueAvis.propTypes = {
  avis: PropTypes.object.isRequired,
};

// == Export
export default UniqueAvis;
