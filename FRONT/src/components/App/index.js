// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

// == Import
import Biography from 'src/containers/Biography';
import Credits from 'src/containers/Credits';
import Error from 'src/components/Error';
import Expos from 'src/containers/Expos';
import Footer from 'src/containers/Footer';
import Galerie from 'src/containers/Galerie';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Legal from 'src/components/Legal';
import PaintingList from 'src/containers/PaintingList';
import Painting from 'src/containers/Painting';
import SiteMap from 'src/components/SiteMap';

import './app.scss';

// == Composant
/**
 * Main component of the application
 *
 * @param {function} loadElements Load the home page elements and the categories
 */
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
  /** Load the home page elements and the categories */
  loadElements: PropTypes.func.isRequired,
};

// == Export
export default App;
