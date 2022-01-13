// == Import npm
import React from 'react';

import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Footer from 'src/containers/Footer';

// == Import
import './styles.scss';

// == Composant
const App = (
) => (
  <div className="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
