const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('Function reverseString()', () => {
  context('Invoked with valid argument', () => {
    it('Should correctly reverse string', () => {
      const actual = reverseString('fun');
      const expected = 'nuf';

      expect(actual).to.equal(expected);
    });
  });

  context('Invoked with invalid argument', () => {
    it("Should throw Error if given argument isn't a string", () => {
      expect(() => reverseString(123)).to.throw(TypeError);
    });
  });
});
