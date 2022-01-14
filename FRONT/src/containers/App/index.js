import { connect } from 'react-redux';

import { loadHomePage } from 'src/actions/mainActions';

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
  loadHomePage: () => {
    dispatch(loadHomePage());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
