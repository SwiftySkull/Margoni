/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import SideBar from 'src/containers/SideBar';

import './avis.scss';

// == Composant
const Avis = ({
  allAvis,
  getAvis,
}) => {
  useEffect(() => {
    getAvis();
  }, []);

  return (
    <div id="avis">
      <div className="avis">
        <h2>Avis</h2>
        <div className="crit-content">
          {allAvis.map((avis) => (
            <div className="crit" key={avis.id}>
              <div className="content">
                <p>"{avis.content}"</p>
              </div>
              <p className="author">{avis.author}</p>
              <p className="author-job">({avis.job})</p>
            </div>
          ))}
        </div>
      </div>
      <SideBar />
    </div>
  );
};

Avis.propTypes = {
  allAvis: PropTypes.array.isRequired,
  getAvis: PropTypes.func.isRequired,
};

// == Export
export default Avis;
