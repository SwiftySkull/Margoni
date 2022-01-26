// == Import npm
import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// == Import
import { stringForUrl } from 'src/utils/utils';

import './paintingList.scss';

// == Composant
const PaintingList = ({
  loadPaintingsOfCategory,
  loadPaintingsByCategoryName,
  loadPaintingsOfTechnique,
  loadPaintingsByTechniqueType,
  loadPaintingsOfSize,
  loadPaintingsBySizeFormat,
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
      if (id === undefined) {
        if (stringForUrl(select) === stringForUrl('Peinture à l\'eau')) {
          loadPaintingsBySizeFormat('peinture a l\'eau');
        }
        else {
          loadPaintingsBySizeFormat(select);
        }
      }
      else {
        loadPaintingsOfSize(id, select);
      }
    }
  }, []);

  return (
    <div id="paintingList">
      <h2>{searchChosen}</h2>
      <h3 className="subtitle">Nombre de peintures trouvées : {results}</h3>
      <div className="list">
        {paintings.map((paint) => {
          const endUrl = paint.title ? stringForUrl(paint.title) : stringForUrl(paint.dbName);
          const url = `/peinture/${paint.id}/${endUrl}`;

          return (
            <div className="tableau" key={paint.id}>
              <Link className="card" to={url}>
                <div>
                  <img src={`data:image/jpeg;base64,${paint.picture.file}`} alt="" />
                </div>
                <h4>{paint.title ?? paint.dbName}</h4>
              </Link>
            </div>
          );
        })}
        {results == 0 && (
          <Link to="/galerie"><button type="button">Retour à la galerie</button></Link>
        )}
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
  loadPaintingsBySizeFormat: PropTypes.func.isRequired,
  searchChosen: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
  paintings: PropTypes.array.isRequired,
};

// == Export
export default PaintingList;
