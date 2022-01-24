// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

// == Import
import { stringForUrl } from 'src/utils/utils';
import Choosing from './Choosing';

import './galerie.scss';

// == Composant
const Galerie = ({
  categories,
  pictures,
  galeryChoice,
  chooseGalerie,
  techniques,
  sizes,
  sizeChoice,
  picturesBySize,
  sizeChosen,
  saveSizeSearch,
}) => {
  const { choice } = useParams();
  console.log(sizeChosen);

  if (sizeChosen === 'NULL') {
    sizeChosen = 'Sans formats';
  }

  return (
    <div id="galerie">
      <h2>Galerie</h2>
      <div className="select-choice">
        <button type="button" onClick={() => chooseGalerie(1)}><p className="select-big">Sélection par catégorie</p><p className="select-small">Catégorie</p></button>
        <button type="button" onClick={() => chooseGalerie(2)}><p className="select-big">Sélection par technique</p><p className="select-small">Technique</p></button>
        <button type="button" onClick={() => chooseGalerie(3)}><p className="select-big">Sélection par format</p><p className="select-small">Format</p></button>
      </div>
      {galeryChoice === 3 && (
        <div className="size-div">
          <select onChange={(e) => sizeChoice(e.target.value)}>
            <option value="0">- Sélectionnez un format -</option>
            {sizes.map((size) => (
              <option value={size.id} key={size.id}>{size.format == 'NULL' ? 'Peinture n\'ayant pas de format' : size.format}</option>
            ))}
          </select>
          {sizeChosen !== undefined && (
            <div>
              <Link to={`/galerie/format/${stringForUrl(sizeChosen)}`}>
                <button type="button" className="size-search" onClick={saveSizeSearch}>
                  Valider Recherche
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="tableaux-list">
        {galeryChoice === 1 && <Choosing array={categories} pictures={pictures} altType="catégorie" urlRefer="categorie" />}
        {galeryChoice === 2 && <Choosing array={techniques} pictures={pictures} altType="technique" urlRefer="technique" />}
        {/* {galeryChoice === 3 && picturesBySize.map((pic) => (
          <Link to="" className="tableau" key={pic.id}>
            <div className="card">
              <div>
                <img src={`data:image/jpeg;base64,${pic.picture.file}`} alt={`Peinture ${pic.title ?? pic.dbName} au format ${sizeChosen}`} />
              </div>
              <h3>{pic.title ?? pic.dbName}</h3>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
};

Galerie.propTypes = {
  categories: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
  galeryChoice: PropTypes.number.isRequired,
  chooseGalerie: PropTypes.func.isRequired,
  techniques: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  sizeChoice: PropTypes.func.isRequired,
  picturesBySize: PropTypes.array.isRequired,
  sizeChosen: PropTypes.string.isRequired,
  saveSizeSearch: PropTypes.func.isRequired,
};

// == Export
export default Galerie;
