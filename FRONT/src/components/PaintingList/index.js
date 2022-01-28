// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// == Import
import { stringForUrl } from 'src/utils/utils';

import Loader from 'src/components/Loader';

import './paintingList.scss';

// == Composant
const PaintingList = ({
  loadPaintingsByCategoryName,
  loadPaintingsByTechniqueType,
  loadPaintingsBySizeFormat,
  searchChosen,
  results,
  paintings,
  actualPage,
  selectPage,
  numberOfPages,
  specDate,
  paintingOfPage,
  paintingOfNewPage,
  loading,
  loaderOn,
}) => {
  const {
    choice,
    select,
    id,
  } = useParams();
  let { page } = useParams();

  const choicePossibilities = ['categorie', 'technique', 'format'];

  if (!choicePossibilities.includes(choice)) {
    window.location = '/galerie';
  }

  useEffect(() => {
    loaderOn();
    if (choice === 'categorie') {
      if (id === undefined) {
        loadPaintingsByCategoryName(select);
      }
      else {
        if (page === undefined) {
          page = 1;
        }
        paintingOfNewPage(page, choice, select, id);
      }
    }
    if (choice === 'technique') {
      if (id === undefined) {
        loadPaintingsByTechniqueType(select);
      }
      else {
        if (page === undefined) {
          page = 1;
        }
        paintingOfNewPage(page, choice, select, id);
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
        if (page === undefined) {
          page = 1;
        }
        paintingOfNewPage(page, choice, select, id);
      }
    }
  }, []);

  const rows = [];

  for (let index = 1; index <= numberOfPages; index++) {
    rows[index] = (
      <Link
        to={`/galerie/${choice}/${select}/${id}/page/${index}`}
        className={actualPage == index ? 'page-active' : ''}
        onClick={() => {
          selectPage(index, numberOfPages);
          paintingOfPage(index, numberOfPages, choice, select, id);
        }}
        key={index}
      >
        <p>{index}</p>
      </Link>
    );
  }

  return (
    <div id="paintingList">
      {loading && <Loader />}
      {!loading && (
        <>
          <h2>{searchChosen}</h2>
          <h3 className="subtitle">Nombre de peintures trouvées : {results}</h3>
        </>
      )}
      {specDate.length > 0 && (
        <h4>Tableaux peints entre {specDate[0]} et {specDate[1]}</h4>
      )}
      {!loading && (
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
      )}
      {!loading && numberOfPages > 1 && (
        <nav className="navigation">
          <Link to={`/galerie/${choice}/${select}/${id}/page/${actualPage - 1}`} className="previous-button">
            <button
              type="button"
              onClick={() => {
                selectPage(actualPage - 1, numberOfPages);
                paintingOfPage(actualPage - 1, numberOfPages, choice, select, id);
              }}
            >Précédent
            </button>
          </Link>
          <div>
            {rows.map((raw) => (raw))}
          </div>
          <Link to={`/galerie/${choice}/${select}/${id}/page/${actualPage + 1}`} className="next-button">
            <button
              type="button"
              onClick={() => {
                selectPage(actualPage + 1, numberOfPages);
                paintingOfPage(actualPage + 1, numberOfPages, choice, select, id);
              }}
            >Suivant
            </button>
          </Link>
        </nav>
      )}
      <div className="back-button">
        <Link to="/galerie"><button type="button">Retour à la galerie</button></Link>
      </div>
    </div>
  );
};

PaintingList.propTypes = {
  loadPaintingsByCategoryName: PropTypes.func.isRequired,
  loadPaintingsByTechniqueType: PropTypes.func.isRequired,
  loadPaintingsBySizeFormat: PropTypes.func.isRequired,
  searchChosen: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
  paintings: PropTypes.array.isRequired,
  actualPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  specDate: PropTypes.array.isRequired,
  paintingOfPage: PropTypes.func.isRequired,
  paintingOfNewPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loaderOn: PropTypes.func.isRequired,
};

// == Export
export default PaintingList;
