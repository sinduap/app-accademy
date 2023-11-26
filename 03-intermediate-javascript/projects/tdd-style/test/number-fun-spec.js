const { assert, expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('Function returnsThree()', () => {
  it('Returns number 3', () => {
    const actual = returnsThree();

    assert.equal(actual, 3);
  });
});

describe('Function reciprocal()', () => {
  context('Invoked with valid argument (between 1 to 1_000_000)', () => {
    it('Returns the reciprocal of a number', () => {
      const actual = reciprocal(4);
      const actual2 = reciprocal(8);

      assert.equal(actual, 1 / 4);
      assert.equal(actual2, 1 / 8);
    });
  });

  context('Invoked with invalid argument (between 1 to 1_000_000)', () => {
    it('Should thow a RangeError with a descriptive string message', () => {
      expect(() => reciprocal(-10)).to.throw(RangeError);
      expect(() => reciprocal(2_000_000)).to.throw(RangeError);
    });
  });
});
