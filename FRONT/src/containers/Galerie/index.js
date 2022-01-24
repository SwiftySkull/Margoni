import { connect } from 'react-redux';

import { shuffleCategories, getPictureFromCategory } from 'src/utils/utils';
import { chooseGalerie } from 'src/actions/galerieActions';
import Galerie from 'src/components/Galerie';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const { categories, shuffledPictures } = state.category;
  const shuffledCategories = shuffleCategories(categories, 6);

  const limitedPictures = getPictureFromCategory(shuffledPictures, categories);

  return {
    categories: shuffledCategories,
    pictures: limitedPictures,
    galeryChoice: state.galerie.galeryChoice,
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  chooseGalerie: (id) => {
    dispatch(chooseGalerie(id));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Galerie);
