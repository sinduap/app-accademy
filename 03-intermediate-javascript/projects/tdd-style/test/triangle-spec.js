const { expect, assert } = require('chai');
const {
  Triangle,
  Scalene,
  Icosceles,
  Right,
  Equilateral,
} = require('../problems/triangle');

describe('Triangle class', () => {
  let triangle, invalidTriangle;

  beforeEach(() => {
    triangle = new Triangle(3, 4, 5);
    invalidTriangle = new Triangle(1, 2, 100);
  });

  afterEach(() => {
    triangle = invalidTriangle = null;
  });

  describe('Triangle constructor', () => {
    it('Should have side1, side2, and side3 properties', () => {
      expect(triangle).to.have.property('side1');
      expect(triangle).to.have.property('side2');
      expect(triangle).to.have.property('side3');
      expect(invalidTriangle).to.have.property('side1');
      expect(invalidTriangle).to.have.property('side2');
      expect(invalidTriangle).to.have.property('side3');
    });
  });

  describe('Instance method getPerimeter', () => {
    it('Should return the perimeter of the Triangle instance, by summing the three sides', () => {
      const actual = triangle.getPerimeter();
      const actual2 = invalidTriangle.getPerimeter();

      const expected = 12;
      const expected2 = 103;

      assert.equal(expected, actual);
      assert.equal(expected2, actual2);
    });
  });

  describe('Instance method hasValidSideLength', () => {
    it('Should returns true if it is a valid triangle, and false if it is invalid', () => {
      const actual = triangle.hasValidSideLengths();
      const actual2 = invalidTriangle.hasValidSideLengths();

      expect(actual).is.equal(true);
      expect(actual2).is.equal(false);
    });
  });

  describe('Instance method validate', () => {
    it('Should adds an isValid property to the triangle instance', () => {
      triangle.validate();
      invalidTriangle.validate();

      expect(triangle).to.have.property('isValid');
      expect(invalidTriangle).to.have.property('isValid');
      expect(triangle.isValid).to.equal(true);
      expect(invalidTriangle.isValid).to.equal(false);
    });
  });

  describe('Static method getValidTriangles', () => {
    it('Should adds an isValid property to the triangle instance', () => {
      const actual = Triangle.getValidTriangles([triangle, invalidTriangle]);

      expect(actual).to.deep.equal([triangle]);
    });
  });
});

describe('Scalene class', () => {
  let triangle, invalidTriangle;

  beforeEach(() => {
    triangle = new Scalene(3, 4, 5);
    invalidTriangle = new Scalene(4, 4, 5);
  });

  afterEach(() => {
    triangle = invalidTriangle = null;
  });

  describe('Scalene constructor', () => {
    it('Should have side1, side2, side3, and isValidTriangle properties', () => {
      expect(triangle).has.property('isValidTriangle');
      expect(triangle).has.property('side1');
      expect(triangle).has.property('side2');
      expect(triangle).has.property('side3');
      expect(invalidTriangle).has.property('isValidTriangle');
      expect(invalidTriangle).has.property('side1');
      expect(invalidTriangle).has.property('side2');
      expect(invalidTriangle).has.property('side3');
    });
  });

  describe('Instance method isScalene', () => {
    it('Should returns true if it is a valid scalene triangle, and false if it is invalid', () => {
      const actual = triangle.isScalene();
      const actual2 = invalidTriangle.isScalene();

      expect(actual).is.equal(true);
      expect(actual2).is.equal(false);
    });
  });

  describe('Instance method validate', () => {
    it('Should adds an isValidScalene property to the scalene triangle instance', () => {
      triangle.validate();
      invalidTriangle.validate();

      expect(triangle).to.have.property('isValidScalene');
      expect(invalidTriangle).to.have.property('isValidScalene');
      expect(triangle).to.have.not.property('isValid');
      expect(invalidTriangle).to.have.not.property('isValid');
      expect(triangle.isValidScalene).is.equal(true);
      expect(invalidTriangle.isValidScalene).is.equal(false);
    });
  });
});

describe('Icosceles class', () => {
  let triangle, invalidTriangle;

  beforeEach(() => {
    triangle = new Icosceles(4, 4, 5);
    invalidTriangle = new Icosceles(3, 4, 5);
  });

  afterEach(() => {
    triangle = invalidTriangle = null;
  });

  describe('Icosceles constructor', () => {
    it('Should have side1, side2, side3, and isValidTriangle properties', () => {
      expect(triangle).has.property('isValidTriangle');
      expect(triangle).has.property('side1');
      expect(triangle).has.property('side2');
      expect(triangle).has.property('side3');
      expect(invalidTriangle).has.property('isValidTriangle');
      expect(invalidTriangle).has.property('side1');
      expect(invalidTriangle).has.property('side2');
      expect(invalidTriangle).has.property('side3');
    });
  });

  describe('Instance method isIcosceles', () => {
    it('Should returns true if it is a valid scalene triangle, and false if it is invalid', () => {
      const actual = triangle.isIcosceles();
      const actual2 = invalidTriangle.isIcosceles();

      expect(actual).is.equal(true);
      expect(actual2).is.equal(false);
    });
  });

  describe('Instance method validate', () => {
    it('Should adds an isValidIcosceles property to the scalene triangle instance', () => {
      triangle.validate();
      invalidTriangle.validate();

      expect(triangle).to.have.property('isValidIcosceles');
      expect(invalidTriangle).to.have.property('isValidIcosceles');
      expect(triangle).to.have.not.property('isValid');
      expect(invalidTriangle).to.have.not.property('isValid');
      expect(triangle.isValidIcosceles).is.equal(true);
      expect(invalidTriangle.isValidIcosceles).is.equal(false);
    });
  });
});

describe('Right class', () => {
  let triangle, invalidTriangle;

  beforeEach(() => {
    triangle = new Right(3, 4, 5);
    invalidTriangle = new Right(4, 4, 5);
  });

  afterEach(() => {
    triangle = invalidTriangle = null;
  });

  describe('Right constructor', () => {
    it('Should have side1, side2, side3, and isValidTriangle properties', () => {
      expect(triangle).has.property('isValidTriangle');
      expect(triangle).has.property('side1');
      expect(triangle).has.property('side2');
      expect(triangle).has.property('side3');
      expect(invalidTriangle).has.property('isValidTriangle');
      expect(invalidTriangle).has.property('side1');
      expect(invalidTriangle).has.property('side2');
      expect(invalidTriangle).has.property('side3');
    });
  });

  describe('Instance method isRight', () => {
    it('Should returns true if it is a valid right triangle, and false if it is invalid', () => {
      const actual = triangle.isRight();
      const actual2 = invalidTriangle.isRight();

      expect(actual).is.equal(true);
      expect(actual2).is.equal(false);
    });
  });

  describe('Instance method validate', () => {
    it('Should adds an isValidRight property to the right triangle instance', () => {
      triangle.validate();
      invalidTriangle.validate();

      expect(triangle).to.have.property('isValidRight');
      expect(invalidTriangle).to.have.property('isValidRight');
      expect(triangle).to.have.not.property('isValid');
      expect(invalidTriangle).to.have.not.property('isValid');
      expect(triangle.isValidRight).is.equal(true);
      expect(invalidTriangle.isValidRight).is.equal(false);
    });
  });
});

describe('Equilateral class', () => {
  let triangle, invalidTriangle;

  beforeEach(() => {
    triangle = new Equilateral(3, 3, 3);
    invalidTriangle = new Equilateral(4, 4, 5);
  });

  afterEach(() => {
    triangle = invalidTriangle = null;
  });

  describe('Right constructor', () => {
    it('Should have side1, side2, side3, and isValidTriangle properties', () => {
      expect(triangle).has.property('isValidTriangle');
      expect(triangle).has.property('side1');
      expect(triangle).has.property('side2');
      expect(triangle).has.property('side3');
      expect(invalidTriangle).has.property('isValidTriangle');
      expect(invalidTriangle).has.property('side1');
      expect(invalidTriangle).has.property('side2');
      expect(invalidTriangle).has.property('side3');
    });
  });

  describe('Instance method isEquilateral', () => {
    it('Should returns true if it is a valid equilateral triangle, and false if it is invalid', () => {
      const actual = triangle.isEquilateral();
      const actual2 = invalidTriangle.isEquilateral();

      expect(actual).is.equal(true);
      expect(actual2).is.equal(false);
    });
  });

  describe('Instance method validate', () => {
    it('Should adds an isValidEquilateral property to the right triangle instance', () => {
      triangle.validate();
      invalidTriangle.validate();

      expect(triangle).to.have.property('isValidEquilateral');
      expect(invalidTriangle).to.have.property('isValidEquilateral');
      expect(triangle).to.have.not.property('isValid');
      expect(invalidTriangle).to.have.not.property('isValid');
      expect(triangle.isValidEquilateral).is.equal(true);
      expect(invalidTriangle.isValidEquilateral).is.equal(false);
    });
  });
});
