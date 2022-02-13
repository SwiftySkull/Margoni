import { connect } from 'react-redux';

import { getAvis } from 'src/actions/avisActions';

import Avis from 'src/components/Avis';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  allAvis: state.avis.allAvis,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  getAvis: () => {
    dispatch(getAvis());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Avis);
