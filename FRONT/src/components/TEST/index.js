// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

// == Import

import './test.scss';

// == Composant
const TEST = () => {
  const { choice, select } = useParams();
  console.log(choice);

  return (
    <div id="test">
      TESTESTESTSETS
      <br />
      {choice} / {select}
    </div>
  );
};

// == Export
export default TEST;
