/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

// == Import
import SideBar from 'src/containers/SideBar';
import Loader from 'src/components/Loader';

import { stringForUrl, urlToString, imageUrl } from 'src/utils/utils';

import './painting.scss';

// == Composant
/**
 * Component to display the elements for a painting
 *
 * @param {object} painting All the informations of a painting
 * @param {function} loadPainting Load the painting and its informations from the ID
 * @param {function} loadPaintingByName Load the painting and its informations from the name
 * @param {function} displayModal Open the painting in big screen when clicking on it
 * @param {boolean} modalStatus Display/hide the modal for the painting in full screen
 * @param {boolean} loading Display/hide the loading page
 * @param {array} multiplePaintingsName Array of the paintings with the same name selected
 * @param {boolean} multiplePaintings Indicate if there are multiple paintings with the same name (ID shouldn't be multiple)
 */
const Painting = ({
  painting,
  loadPainting,
  loadPaintingByName,
  displayModal,
  modalStatus,
  loading,
  multiplePaintingsName,
  multiplePaintings,
}) => {
  const { id, name } = useParams();

  const check = name.match(/[a-zA-Z-]/g);

  useEffect(() => {
    if (id === undefined && check === null) {
      window.location = '/error';
    }
    else if (id === undefined && check !== null) {
      window.location = '/error';
    }
    else {
      loadPainting(id);
    }
  }, []);

  document.title = 'Chargement du tableau...';

  if (painting.id !== undefined && !multiplePaintings) {
    document.title = painting.title ?? painting.dbName;
  }

  return (
    <div id="painting">
      {loading && <Loader />}
      {painting.id !== undefined && !multiplePaintings && (
      <div className="tableau">
        <h2>{painting.title ?? painting.dbName}</h2>
        <div className="image">
          <img
            src={imageUrl + painting.picture.pathname}
            alt={painting.title ?? painting.dbName}
            onClick={displayModal}
            draggable="false"
          />
        </div>
        <div className="painting-infos">
          {painting.date !== null && (
            <p><span>Date</span> : {painting.date !== null ? painting.date : 'non renseignée'}</p>
          )}
          {painting.size.format !== 'Sans format' && (
            <p>
              <span>Dimension</span> : {painting.height}x{painting.width} {painting.size.format !== 'Sans format' ? ` (${painting.size.format})` : ''}
            </p>
          )}
          <ul>
            <span>Catégorie(s)</span> :
            {painting.categories.map((cat) => (
              <li key={cat.id}><Link to={`/galerie/categorie/${stringForUrl(cat.name)}`}>{cat.name}</Link></li>
            ))}
          </ul>
          <ul>
            <span>Technique(s)</span> :
            {painting.techniques.map((tec) => (
              <li key={tec.id}><Link to={`/galerie/technique/${stringForUrl(tec.type)}`}>{tec.type}</Link></li>
            ))}
          </ul>
          {/* {painting.information !== null && (
            <div>
              <p><span>Informations complémentaires</span> :</p>
              <p>{painting.information}</p>
            </div>
          )} */}
        </div>
        <button type="button" onClick={() => window.history.back()}>Retour</button>
        <div className="modal-box" style={{ display: modalStatus ? 'block' : 'none' }}>
          <div className="image-modal">
            <img
              src={imageUrl + painting.picture.pathname}
              alt={painting.title ?? painting.dbName}
              onClick={displayModal}
              draggable="false"
            />
          </div>
          <div className="close-modal-button" onClick={displayModal}>
            <p>+</p>
            <p>Fermer</p>
          </div>
        </div>
      </div>
      )}
      {!loading && multiplePaintings && (
      <div className="multiple-paintings">
        <h2>Tableaux portant le titre "{urlToString(name)}"</h2>
        <div className="multiple-paintings-list">
          {multiplePaintingsName.map((paint) => {
            const endUrl = paint.title ? stringForUrl(paint.title) : stringForUrl(paint.dbName);
            const url = `/peinture/${paint.id}/${endUrl}`;

            const redirectTo = () => {
              window.location = url;
            };

            return (
              <div className="tableau" key={paint.id}>
                <div className="card" onClick={() => redirectTo()}>
                  <div>
                    <img src={imageUrl + paint.picture.pathname} alt="" draggable="false" />
                  </div>
                  <h4>{paint.title ?? paint.dbName}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}
      <SideBar />
    </div>
  );
};

Painting.propTypes = {
  /** All the informations of a painting */
  painting: PropTypes.object.isRequired,

  /** Load the painting and its informations from the ID */
  loadPainting: PropTypes.func.isRequired,
  /** Load the painting and its informations from the name */
  loadPaintingByName: PropTypes.func.isRequired,

  /** Open the painting in big screen when clicking on it */
  displayModal: PropTypes.func.isRequired,
  /** Display/hide the modal for the painting in full screen */
  modalStatus: PropTypes.bool.isRequired,

  /** Display/hide the loading page */
  loading: PropTypes.bool.isRequired,

  /** Array of the paintings with the same name selected */
  multiplePaintingsName: PropTypes.array.isRequired,
  /** Indicate if there are multiple paintings with the same name (ID shouldn't be multiple) */
  multiplePaintings: PropTypes.bool.isRequired,
};

// == Export
export default Painting;
