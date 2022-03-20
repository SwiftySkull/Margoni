/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import SideBar from 'src/containers/SideBar';
import Expositions from 'src/containers/Expositions';

import Denise1 from 'src/assets/images/denise_photo_1.jpg';
import Denise2 from 'src/assets/images/denise_photo_2.jpg';
import Denise3 from 'src/assets/images/denise_photo_3.jpg';
import './biography.scss';

// == Composant
const Biography = () => {
  document.title = 'Biographie';

  return (
    <div id="biography">
      <div className="resume">
        <div className="main critiques">
          <div className="crit-content">
            <h2>Biographie</h2>
            <div>
              <p>Née le 8 mars 1911 au numéro 19 de la rue Caulaincourt, à Montmartre, Denise Montillier passe ses trois premières années dans un logement situé sous l’atelier du peintre Stenlein. En 1918, son père blessé ayant quitté les armées, la famille s’installe à Neuilly-Plaisance.
              </p>
              <p>
                Denise commence très tôt la peinture et entre à l’âge de seize ans à l’école des arts appliqués de la ville de Paris, dite École Duperré, section décoration de tissu et papier peint. Deux ans plus tard, le 13 octobre 1929, elle se marie avec Eugenio Margoni, cordonnier bottier de nationalité italienne et originaire du Trentin.
              </p>
              <p>
                À sa sortie de l’École Duperré Denise Margoni fréquente occasionnellement l’atelier de l’affichiste Paul Colin et entame rapidement une double activité de décoratrice et de peintre. Elle collabore notamment, en 1931, à la décoration du Pavillon des Indes néerlandaises de l’<em>Exposition coloniale</em>, sous la direction du grand décorateur de cinéma Raymond Gabutti. En 1934 elle met au monde son fils Alain, futur compositeur.
              </p>
              <p>
                Lors de l’invasion allemande en 1940 les Margoni partent en exode et se réfugient en Normandie. Il rejoignent ensuite Mantes-la-Jolie où réside une partie de la famille de Denise. La seconde guerre mondiale interrompt momentanément son activité de décoratrice mais elle retrouve ses pinceaux à chaque fois que les circonstances le permettent.
              </p>
              <p>
                En 1945 c’est la naissance de sa fille Elisabeth, future comédienne, et en 1949 la famille emménage à Saint-Cloud pour se rapprocher du Conservatoire Nationnal de Musique de Paris, où leur fils est admis dans la classe de solfège.
              </p>
              <p>
                À partir de 1951, Denise Margoni peut enfin se consacrer pleinement à ses activités picturales : Portraits, paysages, natures mortes, utilisant alternativement l’huile, la gouache ou l’acrylique, et des supports variés, tels que toile sur châssis, panneaux muraux décoratifs, isorel, papiers divers ou soie.
              </p>
              <p>
                Mettant à profit ses années d’études à Duperré et chez Paul Colin, elle approfondit son exploration du dessin pour tissu ou papier peint, et fournit régulièrement des modèles à de grandes entreprises de textile comme Bianchini-Ferrier et Boussac.
              </p>
              <p>
                À cette époque Denise Margoni découvre la Bretagne et séjourne chaque été jusqu’en 1979, dans l’abbaye de Beauport, à Paimpol. Les éclairages et les couleurs changeants et mouvementés des côtes d’Armor défient ses talents de coloriste et poussent Denise vers une palette et des cadrages toujours plus audacieux. Au fil de ces années, elle affirme ainsi un style et une expression de plus en plus personnels. De 1970 à 1983 elle séjourne également en Charente Maritine. Poursuivant la même inspiration dans ces paysages plus sages, les toiles deviennent alors plus méditatives et épurées.
              </p>
              <p>
                À partir de 1948, Denise Margoni expose régulièrement dans divers salons et galeries, à Paris et en province. En 1960, elle fait la connaissance de Jacques Zeitoun, principal associé de la galerie Kriegel à Paris, avec lequel se créent des liens d’amitié qui perdurent jusque dans les années 1980. Grâce à lui elle rencontre Kiyoshi Tamenaga et participe en 1966 au <em>Paris Art Exhibition</em> organisé par ce dernier. En 1969 Tamenaga ouvre à Tokyo la seule galerie dédiée aux artistes occidentaux, dans laquelle il propose annuellement l’<em>Exposition Internationale du Figuratif</em>, qu’il présente au préalable dans sa galerie parisienne. De 1966 à 1976, des œuvres de Denise Margoni sont donc proposées dans les catalogues de la galerie Tamenaga à Paris, et envoyées au Japon. Parmis les autres artistes sélectionnés on trouve Picasso, Buffet, Chagall, Carzou, Ernst, ou Dali... L’appui régulier de ces deux importants marchands d’art a permis tout au long de ces années la diffusion régulière et la vente de son travail.
              </p>
              <p>
                Denise Margoni expose jusqu’en 1985 et arrête de peindre en 1986. La maladie l’emporte en 1987.
              </p>
            </div>
          </div>
        </div>
        <div className="main pictures">
          <img src={Denise1} alt="Portrait Denise Margoni sépia" draggable="false" />
          <img src={Denise2} alt="Portrait Denise Margoni noir et blanc" draggable="false" />
          <img src={Denise3} alt="Portrait Denise Margoni couleur" draggable="false" />
        </div>
        <Expositions />
      </div>
      <SideBar />
    </div>
  );
};

// == Export
export default Biography;
