/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import SideBar from 'src/containers/SideBar';
import exposList from 'src/utils/dataExpos';

import './expos.scss';

// == Composant
const Expos = () => {
  const list = exposList.reverse();

  return (
    <div id="expos">
      <div className="expos">
        <h2>Expositions</h2>
        <p className="global-expos">
          Représentée par <strong><a href="https://www.letelegramme.fr/local/cotes-d-armor/lannion-paimpol/paimpol/paimpol/culture-les-margoni-une-sacree-famille-d-artistes-09-08-2012-1801502.php">Armel Galerie<em>↗️</em></a></strong> à Paimpol (2012-2015), la <strong><a href="https://actu.fr/bretagne/paimpol_22162/exposition-denise-margoni-a-loeil-noir_8592541.html">Galerie de l’Œil Noir<em>↗️</em></a></strong> à Paimpol (2016-2018), et actuellement à la <strong>galerie Divet</strong> à Rennes, la <strong>librairie de l’If</strong> à Paimpol, Christine Menguy à Ploubazlanec, et <strong>l’Art d’Encadrer</strong> à Paris.
        </p>
        <h3>Autres expositions :</h3>
        <ul className="expos-list">
          {list.map((expo, index) => (
            <li key={index}>
              <p><strong>{expo.date}</strong>{expo.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <SideBar />
    </div>
  );
};

Expos.propTypes = {
};

// == Export
export default Expos;
