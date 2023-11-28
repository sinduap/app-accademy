const chai = require('chai');
const spies = require('chai-spies');
const myMap = require('../problems/my-map');
const { expect } = chai;
chai.use(spies);

describe('Function myMap', () => {
  let initialArray;

  beforeEach(() => {
    initialArray = [1, 2, 3, 4, 5];
  });

  afterEach(() => {
    initialArray = null;
  });

  it('Should returns array with exact length of the input array', () => {
    const actual = myMap(initialArray, () => {}).length;
    const expected = initialArray.length;

    expect(actual).is.equal(expected);
  });

  it('Should returns an array that contains the results', () => {
    const cbFn = x => x + 1;

    const actual = myMap(initialArray, cbFn);
    const expected = initialArray.map(cbFn);
    expect(actual).is.deep.equal(expected);
  });

  it("Shouldn't mutate the passed-in array argument", () => {
    const actual = initialArray;
    myMap(initialArray, () => {});
    const expected = initialArray;
    expect(actual).is.equal(expected);
  });

  it("Shouldn't the built-in Array.map", () => {
    const mapSpy = chai.spy.on(Array.prototype, 'map');
    myMap(initialArray, () => {});

    expect(mapSpy).to.not.have.been.called();
  });

  it('Should invoked callback once for each element in the passed-in array argument', () => {
    const callback = (el, i, arr) => {
      return el + 1;
    };

    const callbackSpy = chai.spy(callback);
    myMap(initialArray, callbackSpy);

    expect(callbackSpy).to.have.been.called(5);
    expect(callbackSpy).on.nth(0).called.with(1, 0, initialArray);
    expect(callbackSpy).on.nth(5).called.with(5, 4, initialArray);
  });
});
