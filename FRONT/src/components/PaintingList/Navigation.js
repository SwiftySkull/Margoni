// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './paintingList.scss';

// == Composant
const Navigation = ({
  actualPage,
  numberOfPages,
  selectPage,
  choice,
  select,
  selectId,
}) => {
  const rows = [];

  for (let index = 1; index <= numberOfPages; index++) {
    rows[index] = (
      <option value={index} key={index}>
        <Link to={`/galerie/${choice}/${select}/${selectId}/page/${index}`}>
          {index}
        </Link>
      </option>
    );
  }

  return (
    <div>
      <Link
        to={`/galerie/${choice}/${select}/${selectId}/page/1`}
        className={actualPage == 1 ? 'page-active' : ''}
        onClick={() => selectPage(1, numberOfPages)}
        key="1"
      >
        <p>1</p>
      </Link>
      <Link
        to={`/galerie/${choice}/${select}/${selectId}/page/2`}
        className={actualPage == 2 ? 'page-active' : ''}
        onClick={() => selectPage(2, numberOfPages)}
        key="2"
      >
        <p>2</p>
      </Link>
      {/* <select value={actualPage} onChange={(evt) => selectPage(evt.target.value, numberOfPages)}>
        {rows.map((ite) => (ite))}
      </select> */}
      <a className={actualPage == 2 ? 'page-active' : ''}><p>...</p></a>
      <Link
        to={`/galerie/${choice}/${select}/${selectId}/page/${numberOfPages - 1}`}
        className={actualPage == numberOfPages - 1 ? 'page-active' : ''}
        onClick={() => selectPage(numberOfPages - 1, numberOfPages)}
        key={numberOfPages - 1}
      >
        <p>{numberOfPages - 1}</p>
      </Link>
      <Link
        to={`/galerie/${choice}/${select}/${selectId}/page/${numberOfPages}`}
        className={actualPage == numberOfPages ? 'page-active' : ''}
        onClick={() => selectPage(numberOfPages, numberOfPages)}
        key={numberOfPages}
      >
        <p>{numberOfPages}</p>
      </Link>
    </div>
  );
};

Navigation.propTypes = {
  actualPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  choice: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
};

// == Export
export default Navigation;
