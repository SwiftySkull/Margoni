// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import Avis from 'src/containers/Avis';
import Expositions from 'src/containers/Expositions';
import SideBar from 'src/containers/SideBar';

import Autoportrait from 'src/assets/images/denise_margoni_autoportrait.jpg';

import './home.scss';

// == Composant
const Home = () => (
  <div id="home">
    <div className="resume">
      <div className="entete">
        <div className="biographie">
          <Link to="/biographie">
            <img src={Autoportrait} alt="" className="bio-img" />
            <p>Biographie</p>
          </Link>
        </div>
        <div className="oeuvres">
          <h2>Denise Margoni</h2>
          <h3>Peintures</h3>
          <ul>
            <li><a href="#">Huiles</a></li>
            <li><a href="#">Gouaches</a></li>
            <li><a href="#">Tissus</a></li>
          </ul>
        </div>
      </div>
      <Avis />
      <Expositions />
    </div>
    <SideBar />
  </div>
);

// == Export
export default Home;
