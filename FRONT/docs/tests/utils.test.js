// fichier de tests pour src/utils/index.js

// on importe une syntaxe de chai
import { should } from 'chai';

// on importe les fonctions à tester
import { slugifyTitle, getRecipeBySlug } from 'src/utils';

// données de test
import recipes from '../data/recipes';

// spécificité de should : il faut l'exécuter une première fois pour pouvoir
// l'utiliser
should();

/*
describe décrit un bloc de tests (on peut en imbriquer plusieurs),
2 paramètres :
- un texte qui décrit le bloc (qui apparaîtra dans le compte-rendu)
- une callback qui permet d'exécuter les tests pour ce bloc
*/
describe('utils', () => {
  describe('slugifyTitle', () => {
    /*
    it décrit un cas de test (une ou plusieurs assertions), 2 paramètres :
    - un texte qui décrit le cas de test (qui apparaîtra dans le compte-rendu)
    - une callback qui permet d'exécuter les tests pour ce cas
    */
    it('is a function', () => {
      // vérifier l'assertion "slugifyTitle est une fonction"
      slugifyTitle.should.be.a('function');
    });

    it('replaces spaces', () => {
      // je veux vérifier si quand je fournis une chaîne de caractère à la fonction,
      // elle me retourne cette chaîne de caractères mais les espaces ont été remplacés
      // par des tirets
      slugifyTitle('pizza anchois').should.equal('pizza-anchois');

      /*
      const expectedResult = 'pizza-anchois';
      const actualResult = slugifyTitle('pizza anchois');
      actualResult.should.equal(expectedResult);
      */
    });

    it('replaces upper case', () => {
      slugifyTitle('Pizza AncHois').should.equal('pizza-anchois');
    });
  });

  describe('getRecipeBySlug', () => {
    it('is a function', () => {
      getRecipeBySlug.should.be.a('function');
    });

    it('get the recipe with the given slug', () => {
      // pour pouvoir exécuter la fonction, il faut un tableau de recettes
      // => on peut en construire un, ou utiliser des données réelles

      // je calcule le slug de la première recette des données
      const slug = slugifyTitle(recipes[0].title);

      // appeler getRecipeBySlug avec le slug calculé, et vérifier que je récupère
      // la première recette des données
      getRecipeBySlug(slug, recipes).should.equal(recipes[0]);
    });
  });
});
