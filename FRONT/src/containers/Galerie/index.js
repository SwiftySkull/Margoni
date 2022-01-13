import { connect } from 'react-redux';

import { displayPaintings } from 'src/actions/mainActions';

import Galerie from 'src/components/Galerie';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  numberOfPaintings: state.main.totalPaintings['total results'] ?? 0,
  paintings: state.main.paintings,
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
