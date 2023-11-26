const chai = require('chai');
const expect = chai.expect;

const { Word } = require('../class');

describe('Word', function () {
  const testWord = 'Sindu';

  describe('Word constructor function', function () {
    it('should have a "word" property', function () {
      const instance = new Word(testWord);

      expect(instance).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      const actual = new Word(testWord).word;
      const expected = testWord;

      expect(expected).to.equal(actual);
    });
  });

  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function () {
      const actual = new Word(testWord).removeVowels();
      const expected = 'Snd';

      expect(actual).to.equal(expected);
    });
  });

  describe('removeConsonants function', function () {
    it('should return the word with the consonants removed', function () {
      const actual = new Word(testWord).removeConsonants();
      const expected = 'iu';

      expect(actual).to.equal(expected);
    });
  });

  describe('pigLatin function', function () {
    it('should return the word converted to pig latin', function () {
      const actual = new Word(testWord).pigLatin();
      const expected = 'induSay';

      expect(actual).to.equal(expected);
    });
  });
});
