import { connect } from 'react-redux';

import {
  loadPainting,
  loadPaintingByName,
} from 'src/actions/mainActions';

import Painting from 'src/components/Painting';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  painting: state.main.painting,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  loadPainting: (id) => {
    dispatch(loadPainting(id));
  },

  loadPaintingByName: (paintingName) => {
    dispatch(loadPaintingByName(paintingName));
  },

  loadPaintingById: (id) => {
    dispatch(loadPaintingById(id));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Painting);
