// test getSlugByRecipeTitle : qu'il s'agit d'une fonction,
// qu'on retourne une string, que lorsque
// on envoit une string, on la récup slugifiée

import { expect } from 'chai';
import { getSlugByRecipeTitle } from 'src/selectors/recipes';

describe('recipes selectors', () => {
  describe('getSlugByRecipeTitle', () => {
    describe('structure', () => {
      it('should be a function', () => {
        expect(getSlugByRecipeTitle).to.be.a('function');
      });
      it('should return a string', () => {
        expect(getSlugByRecipeTitle('test')).to.be.a('string');
      });
    });
    describe('execution', () => {
      it('should return a slugified string', () => {
        expect(getSlugByRecipeTitle('SALUT tu vas bien')).to.be.equal(
          'salut-tu-vas-bien'
        );
      });
    });
  });
});
