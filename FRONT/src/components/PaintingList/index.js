// == Import npm
import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// == Import

import './paintingList.scss';

// == Composant
const PaintingList = ({
  loadPaintingsOfCategory,
  loadPaintingsByCategoryName,
  loadPaintingsOfTechnique,
  loadPaintingsByTechniqueType,
  loadPaintingsOfSize,
  searchChosen,
  results,
  paintings,
}) => {
  const { choice, select, id } = useParams();

  const choicePossibilities = ['categorie', 'technique', 'format'];

  if (!choicePossibilities.includes(choice)) {
    window.location = '/galerie';
  }

  useEffect(() => {
    if (choice === 'categorie') {
      if (id === undefined) {
        loadPaintingsByCategoryName(select);
      }
      else {
        loadPaintingsOfCategory(id, select);
      }
    }
    if (choice === 'technique') {
      if (id === undefined) {
        loadPaintingsByTechniqueType(select);
      }
      else {
        loadPaintingsOfTechnique(id, select);
      }
    }
    if (choice === 'format') {
      loadPaintingsOfSize(id, select);
    }
  }, []);

  return (
    <div id="paintingList">
      <h2>{searchChosen}</h2>
      <h3 className="subtitle">Nombre de peintures trouvées : {results}</h3>
      <div className="list">
        {paintings.map((paint) => (
          <div className="tableau">
            <a className="card" href="#">
              <div>
                <img src={`data:image/jpeg;base64,${paint.picture.file}`} alt="" />
              </div>
              <h4>{paint.title ?? paint.dbName}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

PaintingList.propTypes = {
  loadPaintingsOfCategory: PropTypes.func.isRequired,
  loadPaintingsByCategoryName: PropTypes.func.isRequired,
  loadPaintingsOfTechnique: PropTypes.func.isRequired,
  loadPaintingsByTechniqueType: PropTypes.func.isRequired,
  loadPaintingsOfSize: PropTypes.func.isRequired,
  searchChosen: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
  paintings: PropTypes.array.isRequired,
};

// == Export
export default PaintingList;
