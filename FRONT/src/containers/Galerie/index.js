import { connect } from 'react-redux';

import { chooseGalerie } from 'src/actions/galerieActions';
import { sizeChoice } from 'src/actions/sizeActions';

import Galerie from 'src/components/Galerie';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => {
  const { categories, shuffledPictures } = state.category;

  return {
    categories: categories.map((categ) => [categ.id, categ.name]),
    pictures: shuffledPictures,
    galeryChoice: state.galerie.galeryChoice,
    techniques: state.technique.techniques.map((tech) => [tech.id, tech.type]),
    sizes: state.size.sizes,
    sizeChosen: state.size.sizeChosen,
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
