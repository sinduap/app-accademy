const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('./employee');
const Manager = require('./manager');

describe('The calculateBonus(multiplier) method:', () => {
  let hobbes, calvin, susie, lily, clifford;
  beforeEach(() => {
    hobbes = new Manager('Hobbes', 1000000, 'Founder', null);
    calvin = new Manager('Calvin', 130000, 'Director', hobbes);
    susie = new Manager('Susie', 100000, 'TA Manager', calvin);
    lily = new Employee('Lily', 90000, 'TA', susie);
    clifford = new Employee('Clifford', 90000, 'TA', susie);
  });

  describe('hobbes.calculateBonus()', () => {
    it('should be $70,500 If Hobbes gets a bonus multiplier of 0.05', () => {
      expect(hobbes.calculateBonus(0.05)).to.eql(70500);
    });
  });

  describe('calvin.calculateBonus()', () => {
    it('should be $20,500 If Calvin gets a bonus multiplier of 0.05', () => {
      expect(calvin.calculateBonus(0.05)).to.eql(20500);
    });
  });

  describe('susie.calculateBonus()', () => {
    it('should be $14,000 If Susie gets a bonus multiplier of 0.05', () => {
      expect(susie.calculateBonus(0.05)).to.eql(14000);
    });
  });

  describe('lily.calculateBonus()', () => {
    it('should be $4,500 If Lily gets a bonus multiplier of 0.05', () => {
      expect(lily.calculateBonus(0.05)).to.eql(4500);
    });
  });

  describe('clifford.calculateBonus()', () => {
    it('should be $4,500 If Clifford gets a bonus multiplier of 0.05', () => {
      expect(clifford.calculateBonus(0.05)).to.eql(4500);
    });
  });
});
