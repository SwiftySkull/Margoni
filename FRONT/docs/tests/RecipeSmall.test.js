import React from 'react';

import { expect } from 'chai';

/*
shallow permet de faire le rendu d'un composant (html), sans faire le rendu des
composants utilisés dans le JSX => pratique pour vérifier les valeurs de props
fournies aux composants, et pouvoir tester séparément chaque composant
*/
// https://enzymejs.github.io/enzyme/docs/api/shallow.html
import { shallow } from 'enzyme';

// on importe Link parce qu'on en a besoin pour un test
import { Link } from 'react-router-dom';

// on importe le composant à tester
import RecipeSmall from 'src/components/Home/RecipeSmall';

describe('<RecipeSmall />', () => {
/* idées de choses à tester
- prop undefined => pas du test unitaire (ou alors test unitaire du composant parent)
- import oublié
- vérifier si le composant affiche ce qu'il est censé afficher
- vérifier si on utilise telle prop à tel endroit du html
*/

  it('Uses title given as props', () => {
    const valueForTitle = 'pizza';

    // on fait le rendu "shallow" du composant
    const wrapper = shallow(<RecipeSmall title={valueForTitle} thumbnail="img1.png" difficulty="Facile" isFavorite={false} />);

    // rechercher tous les h2, vérifier qu'on en a un seul
    const h2Elements = wrapper.find('h2');
    expect(h2Elements).to.have.lengthOf(1);

    // si on a un seul élément, on peut lire directement son contenu, pas besoin de
    // faire h2Elements[0]
    // vérifier que le contenu du h2 est bien ce qu'on a fourni pour la prop title
    expect(h2Elements.text()).to.equal(valueForTitle);
  });

  it('has a link towards the recipe', () => {
    const title = 'pizza margherita';
    const slugForTitle = 'pizza-margherita';

    const wrapper = shallow(<RecipeSmall title={title} thumbnail="img1.png" difficulty="Facile" isFavorite />);

    // on veut vérifier qu'on utilise un composant Link
    const linkElements = wrapper.find(Link);
    expect(linkElements).to.have.lengthOf(1);

    // on veut vérifier la valeur de la prop 'to' du composant Link
    // on a un seul Link dans linkElements, pas besoin de faire linkElements[0].props()
    // on vérifie que dans l'objet des props il y a bien une propriété 'to' avec la
    // valeur indiqué
    expect(linkElements.props()).to.have.property('to', `/recipe/${slugForTitle}`);
  });
});
