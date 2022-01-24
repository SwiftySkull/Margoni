/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import Galerie from 'src/containers/Galerie';
import Expositions from 'src/containers/Expositions';

import Denise1 from 'src/assets/images/denise_photo_1.jpg';
import Denise2 from 'src/assets/images/denise_photo_2.jpg';
import Denise3 from 'src/assets/images/denise_photo_3.jpg';
import './biography.scss';

// == Composant
const Biography = () => (
  <div id="biography">
    <div className="resume">
      <div className="main critiques">
        <div className="crit-content">
          <div>
            <p>Denise Margoni naît à Paris le 8 mars 1911.</p>
            <p>Elle intègre en 1927 l’École des Arts Appliqués.</p>
          </div>
          <div>
            <p>En 1931 elle collabore à la décoration du pavillon des Indes néerlandaises de l’Exposition Coloniale.</p>
            <p>Jusqu’en 1952 Denise Margoni fréquente l’atelier de l’affichiste Paul Colin et se consacre à son métier de décoratrice.</p>
          </div>
          <div>
            <p>Viennent les rencontres déterminantes : Fernand Léger et plus tard Balthus ;</p>
            <p>tous deux l'encouragent dans son travail personnel.</p>
          </div>
          <div>
            <p>Son admiration pour Estève,, Beaudin, mais surtout Hayden dans sa dernière période,</p>
            <p>fera évoluer son style jusqu’aux portes de l’abstraction.</p>
            <p>Son interprétation des paysages de l’abbaye de Beauport près de Paimpol témoigne de cette influence.</p>
          </div>
          <div>
            <p>Elle participe à de nombreuses expositions de la galerie Tamenaga à  Paris et Tokyo.</p>
            <p>La galerie Kriegel la représente. Expositions à Paris, La Rochelle, Rennes, Saint-Cloud.</p>
          </div>
          <p>Médailles au salon de Montrouge et Châlons-en-Champagne.</p>
          <div>
            <p>Denise Margoni peint jusqu'en 1986 et meurt à Paris en 1987.</p>
            <p>Elle nous laisse une œuvre sensible et singulière de plus de quatre cents huiles et gouaches.</p>
          </div>
        </div>
        <a href="http://fr.wikipedia.org/wiki/Denise_Margoni"><button className="wiki" type="button">Wikipedia</button></a>
      </div>
      <div className="main pictures">
        <img src={Denise1} alt="Portrait Denise Margoni sépia" />
        <img src={Denise2} alt="Portrait Denise Margoni noir et blanc" />
        <img src={Denise3} alt="Portrait Denise Margoni couleur" />
      </div>
      <Expositions />
    </div>
    <Galerie />
  </div>
);

// == Export
export default Biography;
