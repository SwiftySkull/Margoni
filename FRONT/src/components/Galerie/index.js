// == Import npm
import React from 'react';

// == Import
import Image from 'src/assets/images/denise_photo_1.jpg';

import Vignette from './vignette';

import './galerie.scss';

// == Composant
const Galerie = () => (
  <div id="galerie">
    <p><a href="../Galerie/galerie.html">Galerie</a></p>
    <ul>
      {/* {categories.map((categ) => (
      <Vignette
        name={categ.name}
        picture=""
        altPicture={`Vignette ${categ.name}`}
        href=""
      />
      ))} */}
      <Vignette
        name="Abbaye"
        picture={Image}
        altPicture="Vignette Abbaye"
        href=""
      />
      <Vignette
        name="Arbres"
        picture=""
        altPicture="Vignette Arbres"
        href=""
      />
      <Vignette
        name="Dessins de tissus"
        picture=""
        altPicture="Vignette Dessins de tissus"
        href=""
      />
      <Vignette
        name="Dessins signés"
        picture=""
        altPicture="Vignette Dessins Signés"
        href=""
      />
    </ul>
    <a href="../Biographie/biographie.html">Biographie</a>
  </div>
);

// == Export
export default Galerie;
