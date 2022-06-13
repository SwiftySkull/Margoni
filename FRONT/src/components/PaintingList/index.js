/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

// == Import
import { stringForUrl, smallImageUrl } from 'src/utils/utils';

import Loader from 'src/components/Loader';

import './paintingList.scss';

// == Composant
/**
 * Component which display the list of paintings of a category/technique/size
 *
 * @param {function} loadPaintingsByCategoryName Load the paintings of a category
 * @param {function} loadPaintingsByTechniqueType Load the paintings of a technique
 * @param {function} loadPaintingsBySizeFormat Load the paintings of a size
 * @param {string} searchName Text to display as title of the page
 * @param {string} results Number of results found
 * @param {array} paintings Array of the paintings found
 * @param {function} selectPage Select the page of the total research
 * @param {number} numberOfPages Total number of pages for the research
 * @param {function} paintingOfPage Get the paintings of the selected page
 * @param {function} paintingOfNewPage Get the paintings frome the first page if missing URL arguments
 * @param {boolean} loading Display/hide the loading page
 * @param {function} loaderOn Display the loading page
 */
const PaintingList = ({
  loadPaintingsByCategoryName,
  loadPaintingsByTechniqueType,
  loadPaintingsBySizeFormat,
  searchName,
  results,
  paintings,
  selectPage,
  numberOfPages,
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

  let actualPage = Number(page);

  if (page === undefined) {
    actualPage = 1;
  }

  document.title = searchName;

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
          <h2>{searchName}</h2>
          <h3 className="subtitle">Peintures trouvées : {results}</h3>
        </>
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
                  <img src={smallImageUrl + paint.picture.pathname} alt="" draggable="false" />
                </div>
                <h4>{paint.title ?? paint.dbName}</h4>
              </Link>
            </div>
          );
        })}
      </div>
      )}
      {!loading && numberOfPages > 1 && (
        <nav
          className="navigation"
          style={{
          }}
        >
          <Link
            to={`/galerie/${choice}/${select}/${id}/page/${actualPage - 1}`}
            className="previous-button"
          >
            <button
              className="previous-page-button"
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
          <Link
            to={`/galerie/${choice}/${select}/${id}/page/${actualPage + 1}`}
            className="next-button"
          >
            <button
              className="next-page-button"
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
  /** Load the paintings of a category */
  loadPaintingsByCategoryName: PropTypes.func.isRequired,
  /** Load the paintings of a technique */
  loadPaintingsByTechniqueType: PropTypes.func.isRequired,
  /** Load the paintings of a size */
  loadPaintingsBySizeFormat: PropTypes.func.isRequired,

  /** Text to display as title of the page */
  searchName: PropTypes.string.isRequired,
  /** Number of results found */
  results: PropTypes.string.isRequired,

  /** Array of the paintings found */
  paintings: PropTypes.array.isRequired,

  /** Select the page of the total research */
  selectPage: PropTypes.func.isRequired,
  /** Total number of pages for the research */
  numberOfPages: PropTypes.number.isRequired,

  /** Get the paintings of the selected page */
  paintingOfPage: PropTypes.func.isRequired,
  /** Get the paintings frome the first page if missing URL arguments */
  paintingOfNewPage: PropTypes.func.isRequired,

  /** Display/hide the loading page */
  loading: PropTypes.bool.isRequired,
  /** Display the loading page */
  loaderOn: PropTypes.func.isRequired,
};

// == Export
export default PaintingList;
