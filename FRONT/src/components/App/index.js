// == Import npm
import React from 'react';

import Home from 'src/containers/Home';
import Footer from 'src/containers/Footer';

// == Import
import './styles.scss';

// == Composant
const App = (
) => (
  <div className="app">
    <h1>Composant : App</h1>
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
