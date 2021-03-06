import { connect } from 'react-redux';

import {
  loadPaintingsByCategoryName,
} from 'src/actions/categoryActions';

import {
  loadPaintingsByTechniqueType,
} from 'src/actions/techniqueActions';

import {
  loadPaintingsBySizeFormat,
} from 'src/actions/sizeActions';

import {
  selectPage,
  paintingOfPage,
  loaderOn,
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
  let searchName = 'Chargement en cours';

  if (searchingType === 1) {
    paintings = categoryPaintings;
    results = categoryResults;
    searchName = `Catégorie : ${categoryChosen.name}`;
  }

  if (searchingType === 2) {
    paintings = techniquePaintings;
    results = techniqueResults;
    searchName = `Technique : ${techniqueChosen.type}`;
  }

  if (searchingType === 3) {
    paintings = sizePaintings;
    results = sizeResults;
    searchName = `Format : ${sizeChosen.format}`;

    if (sizeChosen.id === 0) {
      searchName = 'Tableaux sans format particulier';
    }
  }

  return {
    searchName,
    results,
    paintings,
    numberOfPages: Math.ceil(results / 12),
    loading: state.main.loading,
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Display the loading page */
  loaderOn: () => {
    dispatch(loaderOn());
  },

  /**
   * Load the paintings of a category
   *
   * @param {string} select The name of the category
   */
  loadPaintingsByCategoryName: (select) => {
    dispatch(loadPaintingsByCategoryName(select));
  },

  /**
   * Load the paintings of a technique
   *
   * @param {string} select The name of the technique
   */
  loadPaintingsByTechniqueType: (select) => {
    dispatch(loadPaintingsByTechniqueType(select));
  },

  /**
   * Load the paintings of a size
   *
   * @param {string} select The name of the size
   */
  loadPaintingsBySizeFormat: (select) => {
    dispatch(loadPaintingsBySizeFormat(select));
  },

  /**
   * Select the page of the total research
   *
   * @param {number} page Actual page
   * @param {number} max Total of pages
   */
  selectPage: (page, max) => {
    dispatch(loaderOn());

    let nextPage = page;

    if (page === 0) {
      nextPage = 1;
    }
    if (page >= max) {
      nextPage = max;
    }

    dispatch(selectPage(nextPage));
  },

  /**
   * Get the paintings of the selected page
   *
   * @param {number} page Actual page
   * @param {number} max Number of pages
   * @param {string} choice First research parameter (category/technique/size)
   * @param {string} select Second research parameter depending on the first one
   * @param {number} selectId ID of the choice parameter
   */
  paintingOfPage: (page, max, choice, select, selectId) => {
    dispatch(loaderOn());

    let nextPage = page;

    if (page >= max) {
      nextPage = max;
    }

    if (page <= 0) {
      nextPage = 1;
    }

    dispatch(paintingOfPage(nextPage, choice, select, selectId));
  },

  /**
   * Get the paintings frome the first page if missing URL arguments
   *
   * @param {number} page Actual page
   * @param {string} choice First research parameter (category/technique/size)
   * @param {string} select Second research parameter depending on the first one
   * @param {number} selectId ID of the choice parameter
   */
  paintingOfNewPage: (page, choice, select, selectId) => {
    dispatch(loaderOn());

    let nextPage = page;
    if (page <= 0) {
      nextPage = 1;
    }

    dispatch(paintingOfPage(nextPage, choice, select, selectId));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(PaintingList);
