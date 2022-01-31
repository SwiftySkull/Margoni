/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import SideBar from 'src/containers/SideBar';

import './avis.scss';

// == Composant
const Avis = () => {
  const desAvis = [
    {
      id: 1,
      content: [
        'Les toiles de Denise Margoni témoignent d\'une excellente maitrise de la peinture.',
        'Elles montrent une grande habileté dans la transcription du paysage et une modernité dans l\'éxécution.',
      ],
      author: 'Jean Jacques',
      authorWork: 'Peintre',
    },
    {
      id: 2,
      content: [
        'Icing wafer liquorice marshmallow candy canes sugar plum jelly beans.',
        'Croissant shortbread cake gummies croissant wafer pastry dragée.',
        'Macaroon marzipan dragée chupa chups chocolate cake.',
        'Sweet roll sugar plum jujubes shortbread tart lemon drops.',
      ],
      author: 'Cyril Ligniac',
      authorWork: 'Chef Pâtissier',
    },
    {
      id: 3,
      content: [
        'Leviosa sonorus tarantallegra engorgio totalus immobilus drought inflamarae.',
        'Immobilus alohomora avada charm petrificus impedimenta incarcerous locomotor.',
        'Alohomora portus lacarnum evanesco. Crucio alohomora.',
      ],
      author: 'Harry Potter',
      authorWork: 'Sorcier',
    },
  ];

  return (
    <div id="avis">
      <div className="avis">
        <h2>Avis</h2>
        <div className="crit-content">
          {desAvis.map((avis) => (
            <div className="crit" key={avis.id}>
              <div className="content">
                {avis.content.map((phrase, index) => {
                  if (index === 0 && avis.content.length > 1) {
                    return (<p>" {phrase}</p>);
                  }
                  if (index === avis.content.length - 1 && avis.content.length > 1) {
                    return (<p>{phrase} "</p>);
                  }
                  if (avis.content.length === 1) {
                    return (<p>" {phrase} "</p>);
                  }
                })}
              </div>
              <p className="author">{avis.author}</p>
              <p className="author-job">({avis.authorWork})</p>
            </div>
          ))}
        </div>
      </div>
      <SideBar />
    </div>
  );
};

// == Export
export default Avis;
