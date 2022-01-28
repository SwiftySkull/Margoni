import { connect } from 'react-redux';

import { chooseGalerie } from 'src/actions/galerieActions';
import { sizeChoice } from 'src/actions/sizeActions';

import Galerie from 'src/components/Galerie';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const {
    categories,
    shuffledPictures: categoryShuffledPicture,
  } = state.category;

  const {
    techniques,
    shuffledPictures: techniqueShuffledPicture,
  } = state.technique;

  let shuffledPictures = [];
  const { galeryChoice } = state.galerie;

  if (galeryChoice == 1) {
    shuffledPictures = categoryShuffledPicture;
  }
  if (galeryChoice == 2) {
    shuffledPictures = techniqueShuffledPicture;
  }

  return {
    categories: categories.map((categ) => [categ.id, categ.name]),
    pictures: shuffledPictures,
    galeryChoice,
    techniques: techniques.map((tech) => [tech.id, tech.type]),
    sizes: state.size.sizes,
    sizeChosen: state.size.sizes.filter((size) => size.id == state.size.sizeChosen),
    loading: state.main.loading,
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
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Galerie);
