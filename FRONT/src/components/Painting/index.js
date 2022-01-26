// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// == Import
import SideBar from 'src/containers/SideBar';

import './painting.scss';

// == Composant
const Painting = ({
  painting,
  loadPainting,
}) => {
  const { id, name } = useParams();

  useEffect(() => {
    loadPainting(id);
  }, []);

  return (
    <div id="painting">
      {painting.id !== undefined && (
      <div className="tableau">
        <h2>{painting.title ?? painting.dbName}</h2>
        <div className="image"><img src={`data:image/jpeg;base64,${painting.picture.file}`} alt={painting.title ?? painting.dbName} /></div>
        <div className="painting-infos">
          <p><span>Date</span> : {painting.date != null ? painting.date : 'non renseignée'}</p>
          <p>
            <span>Dimension</span> : {painting.height}x{painting.width} {painting.size.format !== 'Sans format' ? ` (${painting.size.format})` : ''}
          </p>
          <ul>
            <span>Catégorie(s)</span> :
            {painting.categories.map((cat) => (
              <li key={cat.id}><p>{cat.name}</p></li>
            ))}
          </ul>
          <ul>
            <span>Technique(s)</span> :
            {painting.techniques.map((tec) => (
              <li key={tec.id}><p>{tec.type}</p></li>
            ))}
          </ul>
          {painting.information !== null && (
            <div>
              <p><span>Informations complémentaires</span> :</p>
              <p>{painting.information}</p>
            </div>
          )}
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
};

// == Export
export default Painting;
