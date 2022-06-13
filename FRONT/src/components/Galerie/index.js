/* eslint-disable max-len */
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
/**
 * Component of the galery when looking for the paintings, choosing a way to look for them and discover them
 *
 * @param {array} categories Array of the categories available
 * @param {array} techniques Array of the techniques available
 * @param {array} pictures Array of the pictures available depending on the previous choice technique/category
 * @param {number} galeryChoice Number of the way the paintings are looked for (category/techniques/size)
 * @param {function} chooseGalerie Select the type of research for the paintings
 * @param {array} sizes Array of the sizes available
 * @param {function} sizeChoice Select the the size to search the paintings
 * @param {array} sizeChosen The selected size
 * @param {boolean} loading Display/hide the loading screen
 */
const Galerie = ({
  categories,
  techniques,
  pictures,
  galeryChoice,
  chooseGalerie,
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
        <button
          type="button"
          onClick={() => chooseGalerie(1)}
          className={galeryChoice === 1 ? 'select-chosen' : ''}
        >
          <p className="select">Catégorie</p>
        </button>
        <button
          type="button"
          onClick={() => chooseGalerie(2)}
          className={galeryChoice === 2 ? 'select-chosen' : ''}
        >
          <p className="select">Technique</p>
        </button>
        <button
          type="button"
          onClick={() => chooseGalerie(3)}
          className={galeryChoice === 3 ? 'select-chosen' : ''}
        >
          <p className="select">Format</p>
        </button>
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
        {sizeChosen.length > 0 && (
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
        {galeryChoice === 1
        && <Choosing array={categories} pictures={pictures} altType="catégorie" urlRefer="categorie" />}
        {galeryChoice === 2 && <Choosing array={techniques} pictures={pictures} altType="technique" urlRefer="technique" />}
      </div>
    </div>
  );
};

Galerie.propTypes = {
  /** Array of the categories available */
  categories: PropTypes.array.isRequired,
  /** Array of the techniques available */
  techniques: PropTypes.array.isRequired,

  /** Array of the pictures available depending on the previous choice technique/category */
  pictures: PropTypes.array.isRequired,

  /** Number of the way the paintings are looked for (category/techniques/size) */
  galeryChoice: PropTypes.number.isRequired,

  /** Select the type of research for the paintings */
  chooseGalerie: PropTypes.func.isRequired,

  /** Array of the sizes available */
  sizes: PropTypes.array.isRequired,
  /** Select the the size to search the paintings */
  sizeChoice: PropTypes.func.isRequired,
  /** The selected size */
  sizeChosen: PropTypes.array.isRequired,

  /** Display/hide the loading screen */
  loading: PropTypes.bool.isRequired,
};

// == Export
export default Galerie;
