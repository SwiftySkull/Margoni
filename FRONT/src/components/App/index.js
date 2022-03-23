// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

// TODO:
// https://stackoverflow.com/questions/70583862/react-createelement-type-is-invalid-expected-a-string-or-function
// TODO:

// == Import

import Header from 'src/containers/Header';
// import GalerieHeader from 'src/components/Header/galerieHeader';
import Home from 'src/containers/Home';
import Biography from 'src/containers/Biography';
// import Avis from 'src/containers/Avis';
import Galerie from 'src/containers/Galerie';
import PaintingList from 'src/containers/PaintingList';
import Painting from 'src/containers/Painting';
import Footer from 'src/containers/Footer';
import Credits from 'src/containers/Credits';
import SiteMap from 'src/components/SiteMap';
import Legal from 'src/components/Legal';
import Error from 'src/components/Error';
import Expos from 'src/components/Expos';

import './app.scss';

// == Composant
const App = ({
  loadElements,
}) => {
  useEffect(() => {
    loadElements();
  }, []);

  document.title = 'Denise Margoni';

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/peinture/:id/:name" element={<Painting />} />
        <Route path="/peinture/:name" element={<Painting />} />
        <Route path="/biographie" element={<Biography />} />
        <Route path="/galerie/:choice/:select/:id/page/:page" element={<PaintingList />} />
        <Route path="/galerie/:choice/:select/:id" element={<PaintingList />} />
        <Route path="/galerie/:choice/:select" element={<PaintingList />} />
        <Route path="/galerie/*" element={<Galerie />} />
        {/* <Route path="/avis" element={<Avis />} /> */}
        <Route path="/expositions" element={<Expos />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/contact" element={<Credits />} />
        <Route path="/mentions-legal" element={<Legal />} />
        <Route path="/plan-du-site" element={<SiteMap />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

App.propTypes = {
  loadElements: PropTypes.func.isRequired,
};

// == Export
export default App;
