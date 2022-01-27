// == Import npm
import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// == Import
import { stringForUrl } from 'src/utils/utils';

import Navigation from './Navigation';

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
  actualPage,
  selectPage,
  numberOfPages,
  specDate,
}) => {
  const {
    choice,
    select,
    id,
    page,
  } = useParams();

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

  const rows = [];

  if (numberOfPages <= 5) {
    for (let index = 1; index <= numberOfPages; index++) {
      rows[index] = (<button type="button" className={actualPage == index ? 'page-active' : ''} onClick={() => selectPage(index, numberOfPages)} key={index}>{index}</button>);
    }
  }

  return (
    <div id="paintingList">
      <h2>{searchChosen}</h2>
      <h3 className="subtitle">Nombre de peintures trouvées : {results}</h3>
      {specDate.length > 0 && (
        <h4>Tableaux peints entre {specDate[0]} et {specDate[1]}</h4>
      )}
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
      </div>
      {numberOfPages > 1 && (
        <nav className="navigation">
          <button type="button" onClick={() => selectPage(actualPage - 1, numberOfPages)}>Précédent</button>
          {numberOfPages <= 5 && (
            <div>
              {rows.map((raw) => (raw))}
            </div>
          )}
          {numberOfPages > 5 && (
          <Navigation
            actualPage={actualPage}
            selectPage={selectPage}
            numberOfPages={numberOfPages}
          />
          )}
          <button type="button" onClick={() => selectPage(actualPage + 1, numberOfPages)}>Suivant</button>
        </nav>
      )}
      <div className="back-button">
        <Link to="/galerie"><button type="button">Retour à la galerie</button></Link>
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
  actualPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  specDate: PropTypes.array.isRequired,
};

// == Export
export default PaintingList;
