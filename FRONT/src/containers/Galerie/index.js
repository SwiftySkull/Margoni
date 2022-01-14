import { connect } from 'react-redux';

import { shuffleCategories } from 'src/utils/utils';
import { displayPaintings } from 'src/actions/mainActions';

import Galerie from 'src/components/Galerie';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  categories: shuffleCategories(state.category.categories, 5),
  pictures: state.category.shuffledPictures,
});

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
