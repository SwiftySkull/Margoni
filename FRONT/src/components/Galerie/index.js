// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import Loader from 'src/components/Loader';

import { stringForUrl, formatConversion } from 'src/utils/utils';

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
  sizeChosen,
  loading,
}) => {
  document.title = 'Galerie';

  if (galeryChoice === 1) {
    document.title = 'Galerie, recherche par catégorie';
  }
  if (galeryChoice === 2) {
    document.title = 'Galerie, recherche par technique';
  }
  if (galeryChoice === 3) {
    document.title = 'Galerie, recherche par format';
  }

  return (
    <div id="galerie">
      <h2>Galerie</h2>
      <div className="select-choice">
        <button type="button" onClick={() => chooseGalerie(1)}><p className="select-big">Sélection par catégorie</p><p className="select-small">Catégorie</p></button>
        <button type="button" onClick={() => chooseGalerie(2)}><p className="select-big">Sélection par technique</p><p className="select-small">Technique</p></button>
        <button type="button" onClick={() => chooseGalerie(3)}><p className="select-big">Sélection par format</p><p className="select-small">Format</p></button>
      </div>
      {loading && <Loader />}
      {galeryChoice === 3 && (
      <div className="size-div">
        <select onChange={(e) => sizeChoice(e.target.value)}>
          <option value="0">- Sélectionnez un format -</option>
          {sizes.map((size) => (
            <option value={size.id} key={size.id}>
              {size.format}{formatConversion(size.format)}
            </option>
          ))}
        </select>
        {sizeChosen !== undefined && (
        <div>
          <Link to={`/galerie/format/${stringForUrl(sizeChosen[0].format)}/${sizeChosen[0].id}/page/1`}>
            <button type="button" className="size-search">
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
  sizeChosen: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default Galerie;
