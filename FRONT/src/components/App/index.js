// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

// TODO:
// https://stackoverflow.com/questions/70583862/react-createelement-type-is-invalid-expected-a-string-or-function
// TODO:

// == Import

import Header from 'src/containers/Header';
import GalerieHeader from 'src/components/Header/galerieHeader';
import Home from 'src/containers/Home';
import Biography from 'src/containers/Biography';
import Galerie from 'src/containers/Galerie';
import Footer from 'src/containers/Footer';

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
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/biographie" element={<><Header /><Biography /></>} />
        <Route path="/galerie" element={<><GalerieHeader /><Galerie /></>} />
      </Routes>
      <Footer />
    </div>
  );
};

App.propTypes = {
  loadHomePage: PropTypes.func.isRequired,
};

// == Export
export default App;
