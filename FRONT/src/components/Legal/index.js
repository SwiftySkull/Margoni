/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import SideBar from 'src/containers/SideBar';

import './legal.scss';

// == Composant
const Legal = () => {
  document.title = 'Mentions légales';

  return (
    <div id="legal">
      <div className="legal">
        <h2>Mentions Légales</h2>
        <p>Conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet www.denise-margoni.fr sont :</p>
        <div>
          <h3>Editeur du site :</h3>
          <p>Arts Vivants-Armor</p>
          <p>9 hent ar Ty Gward</p>
          <p>22620 Ploubazlanec</p>
          <p>Email : <a href="mailto:avarmor22@gmail.com">avarmor22@gmail.com</a></p>
        </div>
        <div>
          <h3>Hébergement :</h3>
          <p>Hébergeur: SARL o2switch</p>
          <p>222-224 Boulevard Gustave Flaubert</p>
          <p>63000 Clermont-Ferrand</p>
          <p>Site Web : <a href="https://www.o2switch.fr/" target="_blank" rel="noreferrer noopener">https://www.o2switch.fr</a></p>
        </div>
        <div>
          <h3>Développement :</h3>
          <p>Developoulpe</p>
          <p>Aurélien Beneyton</p>
          <p>5 rue Camille Guérin</p>
          <p>22000 Saint Brieuc</p>
          <p>Email : <a href="mailto:aurelien.beneyton@developoulpe.fr">aurelien.beneyton@developoulpe.fr</a></p>
          <p>Site Web : <a href="https://www.developoulpe.fr/" target="_blank" rel="noreferrer noopener">https://www.developoulpe.fr</a></p>
        </div>
        <div>
          <h3>Cookies :</h3>
          <p>Le site <a href="https://www.denise-margoni.fr" target="_blank" rel="noreferrer noopener">www.denise-margoni.fr</a> n'utilise pas de cookie durant votre navigation.</p>
        </div>
        <div>
          <h3>Liens hypertextes :</h3>
          <p>Le site peut offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. Le site <a href="https://www.denise-margoni.fr" target="_blank" rel="noreferrer noopener">www.denise-margoni.fr</a> ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.</p>
          <p><a href="https://www.denise-margoni.fr" target="_blank" rel="noreferrer noopener">www.denise-margoni.fr</a> ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Le site ne peut être tenu pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments.</p>
          <p>Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.</p>
        </div>
        <div>
          <h3>Limitations contractuelles sur les données :</h3>
          <p>Les informations contenues sur ce site sont aussi précises que possible, mais il peut toutefois contenir des inexactitudes ou des omissions.</p>
          <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par courriel, à l’adresse <a href="mailto:contact@denise-margoni.fr">contact@denise-margoni.fr</a>, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).</p>
        </div>
        <div>
          <h3>Propriété intellectuelle :</h3>
          <p>Tout le contenu du présent site www.denise-margoni.fr, incluant, de façon non limitative, les graphismes, images, textes, vidéos, logos et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.</p>
          <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de Arts Vivants-Armor.</p>
          <p>Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.</p>
        </div>
        <div>
          <h3>Données personnelles :</h3>
          <p>De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet <a href="https://www.denise-margoni.fr" target="_blank" rel="noreferrer noopener">www.denise-margoni.fr</a>.</p>
          <p>Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom et votre adresse électronique. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « <a href="https://www.denise-margoni.fr/contact" target="_blank" rel="noreferrer noopener">contact</a> ».</p>
          <p>Dans tous les cas, vous pouvez refuser de fournir vos données personnelles.</p>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

// == Export
export default Legal;
