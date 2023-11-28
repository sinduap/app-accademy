class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  #checkValidSideLength(sides) {
    let result = true;

    sides.forEach((side, index) => {
      const sum = sides
        .filter((_, idx) => index !== idx)
        .reduce((a, b) => a + b);
      if (sum <= side) result = false;
    });

    return result;
  }

  hasValidSideLengths() {
    const sides = [this.side1, this.side2, this.side3];

    return this.#checkValidSideLength(sides);
  }

  validate() {
    this.isValid = this.hasValidSideLengths();
  }

  static getValidTriangles(triangles) {
    return triangles.filter(t => (t.validate(), t.isValid));
  }
}

class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isScalene() {
    return new Set([this.side1, this.side2, this.side3]).size === 3;
  }

  validate() {
    this.isValidScalene = this.isScalene();
  }
}

class Icosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isIcosceles() {
    return new Set([this.side1, this.side2, this.side3]).size === 2;
  }

  validate() {
    this.isValidIcosceles = this.isIcosceles();
  }
}

class Right extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isRight() {
    const [diagonal, ...rest] = [this.side1, this.side2, this.side3].sort(
      (a, b) => b - a
    );

    return diagonal ** 2 === rest.reduce((acc, curr) => acc + curr ** 2, 0);
  }

  validate() {
    this.isValidRight = this.isRight();
  }
}

class Equilateral extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }

  isEquilateral() {
    return (this.side1 === this.side2 ? this.side1 : false) === this.side3;
  }

  validate() {
    this.isValidEquilateral = this.isEquilateral();
  }
}

module.exports = {
  Triangle,
  Scalene,
  Icosceles,
  Right,
  Equilateral,
};
