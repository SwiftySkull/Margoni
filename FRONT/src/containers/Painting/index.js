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
  /**
   * Load the painting and its informations from the ID
   *
   * @param {number} id ID of the actual painting
   */
  loadPainting: (id) => {
    dispatch(clearPainting());
    dispatch(loadPainting(id));
  },

  /**
   * Load the painting and its informations from the name
   *
   * @param {string} paintingName Name of the actual painting
   */
  loadPaintingByName: (paintingName) => {
    dispatch(clearPainting());
    dispatch(loadPaintingByName(paintingName));
  },

  /** Open the painting in big screen when clicking on it */
  displayModal: () => {
    dispatch(displayModal());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Painting);
