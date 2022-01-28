// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

// == Import
import SideBar from 'src/containers/SideBar';
import Loader from 'src/components/Loader';

import { stringForUrl } from 'src/utils/utils';

import './painting.scss';

// == Composant
const Painting = ({
  painting,
  loadPainting,
  loadPaintingByName,
  displayModal,
  modalStatus,
  loading,
}) => {
  const { id, name } = useParams();

  const check = name.match(/[a-zA-Z-]/g);

  useEffect(() => {
    if (id === undefined && check === null) {
      loadPainting(id);
    }
    else if (id === undefined && check !== null) {
      loadPaintingByName(name);
    }
    else {
      loadPainting(id);
    }
  }, []);

  return (
    <div id="painting">
      {loading && <Loader />}
      {painting.id !== undefined && (
      <div className="tableau">
        <h2>{painting.title ?? painting.dbName}</h2>
        <div className="image">
          <img
            src={`data:image/jpeg;base64,${painting.picture.file}`}
            alt={painting.title ?? painting.dbName}
            onClick={displayModal}
          />
        </div>
        <div className="painting-infos">
          {painting.date !== null && (
            <p><span>Date</span> : {painting.date !== null ? painting.date : 'non renseignée'}</p>
          )}
          <p>
            <span>Dimension</span> : {painting.height}x{painting.width} {painting.size.format !== 'Sans format' ? ` (${painting.size.format})` : ''}
          </p>
          <ul>
            <span>Catégorie(s)</span> :
            {painting.categories.map((cat) => (
              <li key={cat.id}><Link to={`/galerie/technique/${stringForUrl(cat.name)}/${cat.id}`}>{cat.name}</Link></li>
            ))}
          </ul>
          <ul>
            <span>Technique(s)</span> :
            {painting.techniques.map((tec) => (
              <li key={tec.id}><Link to={`/galerie/technique/${stringForUrl(tec.type)}/${tec.id}`}>{tec.type}</Link></li>
            ))}
          </ul>
          {painting.information !== null && (
            <div>
              <p><span>Informations complémentaires</span> :</p>
              <p>{painting.information}</p>
            </div>
          )}
        </div>
        <button type="button" onClick={() => window.history.back()}>Retour</button>
        <div className="modal-box" style={{ display: modalStatus ? 'block' : 'none' }}>
          <div className="image-modal">
            <img
              src={`data:image/jpeg;base64,${painting.picture.file}`}
              alt={painting.title ?? painting.dbName}
              onClick={displayModal}
            />
          </div>
          <div className="close-modal-button" onClick={displayModal}>
            <p>+</p>
            <p>Fermer</p>
          </div>
        </div>
      </div>
      )}
      <SideBar />
    </div>
  );
};

Painting.propTypes = {
  painting: PropTypes.array.isRequired,
  loadPainting: PropTypes.func.isRequired,
  loadPaintingByName: PropTypes.func.isRequired,
  displayModal: PropTypes.func.isRequired,
  modalStatus: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default Painting;
