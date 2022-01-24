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
  techniques,
  sizes,
  sizeChoice,
  picturesBySize,
  sizeChosen,
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
      {galeryChoice === 3 && (
        <div className="size-div">
          <select onChange={(e) => sizeChoice(e.target.value)}>
            <option value="">- Sélectionnez un format -</option>
            <option value="0">Peinture n'ayant pas de format</option>
            {sizes.map((size) => (
              <option value={size.id} key={size.id}>{size.format}</option>
            ))}
          </select>
        </div>
      )}
      <div className="tableaux-list">
        {galeryChoice === 1 && categories.map((categ) => {
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
        {galeryChoice === 2 && techniques.map((tech) => {
          let pictureFile = '';
          pictures.filter((pic) => {
            if (pic.id === tech.id) {
              pictureFile = pic.painting.picture.file;
            }
          });

          return (
            <Link to="" className="tableau" key={tech.id}>
              <div className="card">
                <div>
                  <img src={`data:image/jpeg;base64,${pictureFile}`} alt={`Peinture aléatoire de la technique ${tech.type}`} />
                </div>
                <h3>{tech.type}</h3>
              </div>
            </Link>
          );
        })}
        {galeryChoice === 3 && picturesBySize.map((pic) => (
          <Link to="" className="tableau" key={pic.id}>
            <div className="card">
              <div>
                <img src={`data:image/jpeg;base64,${pic.picture.file}`} alt={`Peinture ${pic.title ?? pic.dbName} au format ${sizeChosen}`} />
              </div>
              <h3>{pic.title ?? pic.dbName}</h3>
            </div>
          </Link>
        ))}
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
};

// == Export
export default Galerie;
