// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import UniqueAvis from 'src/components/Avis/UniqueAvis';
import Expositions from 'src/containers/Expositions';
import SideBar from 'src/containers/SideBar';

import Autoportrait from 'src/assets/images/denise_margoni_autoportrait.jpg';

import './home.scss';

// == Composant
const Home = ({
  avis,
}) => {
  document.title = 'Denise Margoni';

  return (
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
              <li><a href="/galerie/technique/peinture-a-l-huile/2">Huiles</a></li>
              <li><a href="/galerie/technique/gouache/1">Gouaches</a></li>
              <li><a href="/galerie/technique/isorel/5">Isorel</a></li>
            </ul>
          </div>
        </div>
        <UniqueAvis avis={avis} />
        <Expositions />
      </div>
      <SideBar />
    </div>
  );
};

Home.propTypes = {
  avis: PropTypes.object.isRequired,
};

// == Export
export default Home;
