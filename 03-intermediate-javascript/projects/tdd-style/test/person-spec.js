const { expect } = require('chai');
const Person = require('../problems/person');

let people, people2, people3;

beforeEach(() => {
  people = new Person('Sindu', 33);
  people2 = new Person('Futi', 28);
  people3 = new Person('Abuy', 3);
});

afterEach(() => {
  people = people2 = people3 = null;
});

describe('Person constructor function', () => {
  it('Person instance should have name and age property', () => {
    expect(people).to.have.property('name');
    expect(people).to.have.property('age');
  });
});

describe('Instance method sayHello()', () => {
  it('Should return a string of instance name and a greeting message', () => {
    const actual = people.sayHello();
    const expected = 'Hello, my name is Sindu';

    expect(actual).to.equal(expected);
  });
});

describe('Instance method visit()', () => {
  it('Should return a string stating that this instance visited the passed-in person instance', () => {
    const actual = people.visit(people2);
    const expected = 'Sindu visited Futi';

    expect(actual).to.equal(expected);
  });
});

describe('Instance method switchVisit()', () => {
  it('Should invoke the visit function of the parameter, passing in the current instance as the argument', () => {
    const actual = people.switchVisit(people2);
    const expected = 'Futi visited Sindu';

    expect(actual).to.equal(expected);
  });
});

describe('Instance method update()', () => {
  context("Argument isn't an object", () => {
    it('Should throw a new TypeError with a clear message', () => {
      const errMsg = 'Argument must be an object';

      expect(() => people.update()).to.throw(errMsg);
      expect(() => people.update(null)).to.throw(errMsg);
      expect(() => people.update([])).to.throw(errMsg);
    });
  });

  context('Argument is an object', () => {
    it("Should update instance's properties to match the passed-in object's values", () => {
      people.update({ name: 'Arief', age: 34 });

      expect(people.name).to.have.equal('Arief');
      expect(people.age).to.have.equal(34);
    });
  });

  context("Argument doesn't have name and age property", () => {
    it('Should throw a TypeError with an appropriate message', () => {
      const errMsg = 'Argument mush have name and age property';
      const badFunc = function () {
        people.update({ hobby: 'Reading', friends: 5 });
      };

      expect(badFunc).to.throw(TypeError);
      expect(badFunc).to.throw(errMsg);
    });
  });
});

describe('Instance method tryUpdate()', () => {
  context('Updated successfully', () => {
    it('Should return true indicating the update was successful', () => {
      const actual = people.tryUpdate({ name: 'Arief', age: 34 });

      expect(actual).to.equal(true);
      expect(people.name).is.equal('Arief');
      expect(people.age).is.equal(34);
    });
  });

  context('Updated unsuccessful', () => {
    it('Should return false indicating the update was fail', () => {
      const actual = people.tryUpdate(null);

      expect(actual).to.equal(false);
      expect(people.name).is.equal('Sindu');
      expect(people.age).is.equal(33);
    });
  });
});

describe('Static method greetAll()', () => {
  it('Should returned string in an array, before finally returning an array of the stored strings.', () => {
    const expected = [
      people.sayHello(),
      people2.sayHello(),
      people3.sayHello(),
    ];

    expect(Person.greetAll([people, people2, people3])).to.deep.equal(expected);
  });
});
