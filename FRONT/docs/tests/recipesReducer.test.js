// on importe un syntaxe de chai
import { expect } from 'chai';

// on importe le code à tester
import recipesReducer from 'src/reducers/recipesReducer';

// on importe le action creator parce qu'on en a besoin pour un test
import { saveRecipes } from 'src/actions/recipes';

// données de test
import recipesData from '../data/recipes';

// only (sur describe ou sur it) permet d'exécuter seulement certains tests => bien
// penser à l'enlever quand on a fini de mettre au point le test
// describe.only('reducer for recipes', () => {
describe('reducer for recipes', () => {
  // skip (sur describe ou sur it) permet de zapper l'exécution d'un test
  // it.skip('is a function', () => {
  it('is a function', () => {
    expect(recipesReducer).to.be.a('function');
  });

  it('test initial state', () => {
    // undefined pour le state, pour forcer à utiliser la valeur par défaut du
    // paramètre
    // {} représente une action
    const actualInitialState = recipesReducer(undefined, {});
    // console.log(actualInitialState);

    // on peut tester séparément chaque information du state
    // expect(actualInitialState).to.have.property('recipesList');

    // on peut construire un objet qui correspond au state attendu
    const expectedInitialState = {
      recipesList: [],
      favorites: [],
    };

    // to.equal => comparaison "en surface", regarde juste si les objets sont stockés
    // au même endroit
    // to.deep.equal => comparaison en profondeur, compare chaque propriété des objets
    expect(actualInitialState).to.deep.equal(expectedInitialState);
  });

  it('check treatment of action SAVE_RECIPES', () => {
    // on prépare un state
    const stateBefore = {
      recipesList: [],
      favorites: [],
    };

    // on prépare un payload
    const payload = recipesData;

    // on prépare une action de type SAVE_RECIPES avec un payload
    const action = saveRecipes(payload);

    // on calcule le state attendu suite à la prise en compte de l'action
    const expectedStateAfter = {
      recipesList: payload,
      favorites: [],
    };

    // on appelle le reducer avec le state et l'action => on vérifie que le state
    // retourné est bien celui attendu
    const actualStateAfter = recipesReducer(stateBefore, action);
    expect(actualStateAfter).to.deep.equal(expectedStateAfter);
  });
});
