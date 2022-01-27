// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './paintingList.scss';

// == Composant
const Navigation = ({
  actualPage,
  numberOfPages,
  selectPage,
}) => {
  const rows = [];

  for (let index = 1; index <= numberOfPages; index++) {
    rows[index] = (<option value={index} key={index}>{index}</option>);
  }

  return (
    <div>
      <button type="button" className={actualPage == 1 ? 'page-active' : ''} onClick={() => selectPage(1, numberOfPages)}>1</button>
      <button type="button" className={actualPage == 2 ? 'page-active' : ''} onClick={() => selectPage(2, numberOfPages)}>2</button>
      <select value={actualPage} onChange={(evt) => selectPage(evt.target.value, numberOfPages)}>
        {rows.map((ite) => (ite))}
      </select>
      <button type="button" className={actualPage == numberOfPages - 1 ? 'page-active' : ''} onClick={() => selectPage(numberOfPages - 1, numberOfPages)}>{numberOfPages - 1}</button>
      <button type="button" className={actualPage == numberOfPages ? 'page-active' : ''} onClick={() => selectPage(numberOfPages, numberOfPages)}>{numberOfPages}</button>
    </div>
  );
};

Navigation.propTypes = {
  actualPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
};

// == Export
export default Navigation;
