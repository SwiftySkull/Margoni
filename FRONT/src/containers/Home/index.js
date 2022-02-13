import { connect } from 'react-redux';

import Home from 'src/components/Home';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  avis: state.avis.avis,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({

});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
