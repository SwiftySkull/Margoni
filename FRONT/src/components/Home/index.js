// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Home = ({
  displayPaintings,
  numberOfPaintings,
  paintings,
}) => (
  <div id="home">
    <h1>Composant : Home</h1>
    <p>Il y a actuellement {numberOfPaintings} peintures chargées</p>
    {paintings.map((paint) => (
      <div key={paint.id} className="tableau">
        <h2>{paint.title ?? paint.dbName}</h2>
        <img src={`data:image/jpeg;base64,${paint.picture.file}`} alt={paint.title ?? paint.dbName} />
        <p>Date : {paint.date != null ? paint.date : 'non renseignée'}</p>
        <p>Dimension : {paint.height}x{paint.width}{paint.size != null ? ` (${paint.size.format})` : ''}</p>
        <ul>
          Catégories :
          {paint.categories.map((cat) => (
            <li>{cat.name}</li>
          ))}
        </ul>
        <ul>
          Techniques :
          {paint.techniques.map((tec) => (
            <li>{tec.type}</li>
          ))}
        </ul>
      </div>
    ))}
    <button type="button" onClick={displayPaintings}>Appuyer</button>
  </div>
);

Home.propTypes = {
  displayPaintings: PropTypes.func.isRequired,
  numberOfPaintings: PropTypes.number.isRequired,
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      dbName: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      picture: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          file: PropTypes.string.isRequired,
          orientation: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      size: PropTypes.array.isRequired,
      categories: PropTypes.array.isRequired,
      technique: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Home;
