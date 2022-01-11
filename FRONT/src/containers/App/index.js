import { connect } from 'react-redux';

import App from 'src/components/App';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  // menu: state.main.menu,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({

});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
