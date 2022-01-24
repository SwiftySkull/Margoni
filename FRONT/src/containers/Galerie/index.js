import { connect } from 'react-redux';

import { shuffleCategories, getPictureFromCategory } from 'src/utils/utils';
import { displayPaintings } from 'src/actions/mainActions';

import Galerie from 'src/components/Galerie';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const { categories, shuffledPictures } = state.category;
  const shuffledCategories = shuffleCategories(categories, 3);

  const limitedPictures = getPictureFromCategory(shuffledPictures, shuffledCategories);

  return {
    categories: shuffledCategories,
    pictures: limitedPictures !== undefined ? limitedPictures : [],
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  displayPaintings: () => {
    dispatch(displayPaintings());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Galerie);
