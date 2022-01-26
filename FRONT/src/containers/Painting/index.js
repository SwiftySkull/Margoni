import { connect } from 'react-redux';

import {
  loadPainting,
  loadPaintingByName,
  displayModal,
} from 'src/actions/mainActions';

import Painting from 'src/components/Painting';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  painting: state.main.painting,
  modalStatus: state.main.modalStatus,
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

  displayModal: () => {
    dispatch(displayModal());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Painting);
