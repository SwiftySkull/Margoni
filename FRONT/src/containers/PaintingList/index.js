import { connect } from 'react-redux';

import {
  loadPaintingsOfCategory,
  loadPaintingsByCategoryName,
} from 'src/actions/categoryActions';

import {
  loadPaintingsOfTechnique,
  loadPaintingsByTechniqueType,
} from 'src/actions/techniqueActions';

import {
  loadPaintingsOfSize,
  loadPaintingsBySizeFormat,
} from 'src/actions/sizeActions';

import {
  selectPage,
} from 'src/actions/mainActions';

import PaintingList from 'src/components/PaintingList';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const { searchingType } = state.main;

  const {
    categoryChosen,
    results: categoryResults,
    paintings: categoryPaintings,
  } = state.category;

  const {
    techniqueChosen,
    results: techniqueResults,
    paintings: techniquePaintings,
  } = state.technique;

  const {
    sizeChosen,
    results: sizeResults,
    paintings: sizePaintings,
  } = state.size;

  let paintings = [];
  let results = '0';
  let searchChosen = 'Aucune recherche en cours';
  let specDate = [];

  if (searchingType === 1) {
    paintings = categoryPaintings;
    results = categoryResults;
    searchChosen = `Tableaux de la catégorie ${categoryChosen.name}`;

    // if (categoryChosen.name === 'Animaux') {
    //   specDate = [1950, 1975];
    // }
  }

  if (searchingType === 2) {
    paintings = techniquePaintings;
    results = techniqueResults;
    searchChosen = `Tableaux de la technique ${techniqueChosen.type}`;
  }

  if (searchingType === 3) {
    paintings = sizePaintings;
    results = sizeResults;
    searchChosen = `Tableaux au format ${sizeChosen.format}`;

    if (sizeChosen.id === 0) {
      searchChosen = 'Tableaux sans format particulier';
    }
  }

  return {
    specDate,
    searchChosen,
    results,
    paintings,
    actualPage: state.main.actualPage,
    numberOfPages: Math.round(results / 12),
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  loadPaintingsOfCategory: (id, select) => {
    dispatch(loadPaintingsOfCategory(id, select));
  },

  loadPaintingsByCategoryName: (select) => {
    dispatch(loadPaintingsByCategoryName(select));
  },

  loadPaintingsOfTechnique: (id, select) => {
    dispatch(loadPaintingsOfTechnique(id, select));
  },

  loadPaintingsByTechniqueType: (select) => {
    dispatch(loadPaintingsByTechniqueType(select));
  },

  loadPaintingsOfSize: (id, select) => {
    dispatch(loadPaintingsOfSize(id, select));
  },

  loadPaintingsBySizeFormat: (select) => {
    dispatch(loadPaintingsBySizeFormat(select));
  },

  selectPage: (page, max) => {
    let nextPage = page;

    if (page === 0) {
      nextPage = 1;
    }
    if (page >= max) {
      nextPage = max;
    }

    dispatch(selectPage(nextPage));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(PaintingList);
