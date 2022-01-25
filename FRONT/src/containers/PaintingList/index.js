import { connect } from 'react-redux';

import { loadPaintingsOfCategory } from 'src/actions/categoryActions';
import { loadPaintingsOfTechnique } from 'src/actions/techniqueActions';
import { loadPaintingsOfSize } from 'src/actions/sizeActions';

import PaintingList from 'src/components/PaintingList';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  // const {
  //   categoryChosen,
  //   results: categoryResults,
  //   paintings: categoryPaintings,
  // } = state.category;
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

  // console.log('techniqueChosen', techniqueChosen);
  // console.log('techniquePaintings', techniquePaintings);
  // console.log('sizePaintings', sizePaintings);
  // console.log('sizeChosen', sizeChosen);

  let paintings = [];
  let results = '0';
  let searchChosen = 'Aucune recherche en cours';

  if (searchingType === 1) {
    paintings = categoryPaintings;
    results = categoryResults;
    searchChosen = `Tableaux de la catégorie ${categoryChosen.name}`;
  }

  if (searchingType === 2) {
    paintings = techniquePaintings;
    results = techniqueResults;
    searchChosen = `Tableaux de la technique ${techniqueChosen.type}`;
  }

  // console.log('PaintingList container -> sizeChosen :', sizeChosen);

  if (searchingType === 3) {
    paintings = sizePaintings;
    results = sizeResults;
    searchChosen = `Tableaux au format ${sizeChosen.format}`;

    if (sizeChosen.id === 0) {
      searchChosen = 'Tableaux sans format particulier';
    }
  }

  console.log('PaintingList container -> searchChosen :', searchChosen);
  console.log('PaintingList container -> results :', results);
  console.log('PaintingList container -> paintings :', paintings);

  return {
    searchChosen,
    results,
    paintings,
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  loadPaintingsOfCategory: (id, select) => {
    dispatch(loadPaintingsOfCategory(id, select));
  },

  loadPaintingsOfTechnique: (id, select) => {
    dispatch(loadPaintingsOfTechnique(id, select));
  },

  loadPaintingsOfSize: (id, select) => {
    dispatch(loadPaintingsOfSize(id, select));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(PaintingList);
