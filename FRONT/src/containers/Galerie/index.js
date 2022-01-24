import { connect } from 'react-redux';

import { shuffleCategories, getPictureFromCategory } from 'src/utils/utils';

import { chooseGalerie } from 'src/actions/galerieActions';
import { sizeChoice, saveSizeSearch } from 'src/actions/sizeActions';

import Galerie from 'src/components/Galerie';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const { categories, shuffledPictures } = state.category;
  const shuffledCategories = shuffleCategories(categories, 6);

  const limitedPictures = getPictureFromCategory(shuffledPictures, categories);

  return {
    categories: shuffledCategories.map((categ) => [categ.id, categ.name]),
    pictures: shuffledPictures,
    galeryChoice: state.galerie.galeryChoice,
    techniques: state.technique.techniques.map((tech) => [tech.id, tech.type]),
    sizes: state.size.sizes,
    picturesBySize: state.size.paintings,
    sizeChosen: state.size.sizeChosen.format,
  };
};

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  chooseGalerie: (id) => {
    dispatch(chooseGalerie(id));
  },

  sizeChoice: (id) => {
    dispatch(sizeChoice(id));
  },

  saveSizeSearch: () => {
    dispatch(saveSizeSearch());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Galerie);
