import { connect } from 'react-redux';

import {
  loadPainting,
  loadPaintingByName,
  displayModal,
  clearPainting,
} from 'src/actions/mainActions';

import Painting from 'src/components/Painting';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  painting: state.main.painting,
  modalStatus: state.main.modalStatus,
  loading: state.main.loading,
  multiplePaintingsName: state.main.multiplePaintingsName,
  multiplePaintings: state.main.multiplePaintings,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  loadPainting: (id) => {
    dispatch(clearPainting());
    dispatch(loadPainting(id));
  },

  loadPaintingByName: (paintingName) => {
    dispatch(clearPainting());
    dispatch(loadPaintingByName(paintingName));
  },

  displayModal: () => {
    dispatch(displayModal());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Painting);
