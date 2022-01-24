// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './galerie.scss';

// == Composant
const Galerie = ({
  categories,
  pictures,
  galeryChoice,
  chooseGalerie,
}) => {
  const displayVignettes = categories.length > 0 && pictures.length > 0;

  return (
    <div id="galerie">
      <h2>Galerie</h2>
      <div className="select-choice">
        <button type="button" onClick={() => chooseGalerie(1)}><p className="select-big">Sélection par catégorie</p><p className="select-small">Catégorie</p></button>
        <button type="button" onClick={() => chooseGalerie(2)}><p className="select-big">Sélection par technique</p><p className="select-small">Technique</p></button>
        <button type="button" onClick={() => chooseGalerie(3)}><p className="select-big">Sélection par format</p><p className="select-small">Format</p></button>
      </div>
      <div className="tableaux-list" style={{ display: galeryChoice === 1 ? 'flex' : 'none' }}>
        {categories.map((categ) => {
          let pictureFile = '';
          pictures.filter((pic) => {
            if (pic.id === categ.id) {
              pictureFile = pic.painting.picture.file;
            }
          });

          return (
            <Link to="" className="tableau" key={categ.id}>
              <div className="card">
                <div>
                  <img src={`data:image/jpeg;base64,${pictureFile}`} alt={`Peinture aléatoire de la catégorie ${categ.name}`} />
                </div>
                <h3>{categ.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Galerie.propTypes = {
  categories: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
  galeryChoice: PropTypes.number.isRequired,
  chooseGalerie: PropTypes.func.isRequired,
};

// == Export
export default Galerie;
