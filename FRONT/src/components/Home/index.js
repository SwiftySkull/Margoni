/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// == Import
// import UniqueAvis from 'src/components/Avis/UniqueAvis';
// import Expositions from 'src/containers/Expositions';
import SideBar from 'src/containers/SideBar';

import Autoportrait from 'src/assets/images/denise_margoni_autoportrait.jpg';
import Affiche from 'src/assets/images/Affiche-Denise-Margoni.jpg';
// import AffichePDF from 'src/assets/pdf/Affiche-Denise-Margoni.pdf';

import signature from 'src/assets/images/signature.png';

import './home.scss';

// == Composant
const Home = () => {
  document.title = 'Denise Margoni';

  return (
    <div id="home">
      <div className="resume">
        <div className="entete">
          <div className="biographie">
            <img src={Autoportrait} alt="" className="bio-img" />
          </div>
          <div className="oeuvres">
            <h2><img src={signature} alt="Signature" /></h2>
            <h3>1911 - 1987</h3>
            <p><Link to="/galerie/technique/peinture-a-l-huile/2">Huiles</Link> & <Link to="/galerie/technique/gouache/1">Gouaches</Link></p>
          </div>
        </div>
        {/* <UniqueAvis avis={avis} />
        <Expositions /> */}
        <div className="news">
          <h2>Rétrospective Denise Margoni</h2>
          <h3>Halle de Paimpol</h3>
          <h3>du 9 Avril au 9 Mai 2022</h3>
          <img className="affiche" src={Affiche} alt="Affiche de le la rétrospective de Denise Margoni" />
          <p style={{ marginBottom: '0' }}>
            Vous n'avez pas pu assister à l'exposition, venez profiter de la visite virtuelle pour la parcourir.
          </p>
          <a className="download-affiche" target="blank" href="https://retrospective-paimpol-2022.denise-margoni.fr/"><button className="download-affiche-button" style={{ margin: '1rem 0 2rem' }} type="button">Visite Virtuelle</button></a>
          <p>
            Mise en place par le service culturel de la Ville de Paimpol, l'association Arts Vivants-Armor, en partenariat avec l'association Pierres, Paroles et Musiques.
          </p>
          <div>
            <p>
              Au sein de cette exposition, vous pourrez découvrir ses oeuvres : en Bretagne et plus particulièrement à Beauport (Paimpol), à Saint-Cloud et en Charente Maritime, son amour de la nature et de la mer, mais aussi sa vision décalée et pleine d'humour des machines agricoles.
            </p>
            <p>
              Une partie de l'exposition est aussi consacrée à son travail d'artiste textile.
            </p>
          </div>
          <a className="download-affiche" target="blank" href="/assets/pdf/Affiche-Denise-Margoni.pdf"><button className="download-affiche-button" type="button">Télécharger l'affiche</button></a>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

Home.propTypes = {
  // avis: PropTypes.object.isRequired,
};

// == Export
export default Home;
