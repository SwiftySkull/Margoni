// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Footer from 'src/containers/Footer';

// == Import
import './app.scss';

// == Composant
const App = ({
  loadHomePage,
}) => {
  useEffect(() => {
    loadHomePage();
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

App.propTypes = {
  loadHomePage: PropTypes.func.isRequired,
};

// == Export
export default App;
