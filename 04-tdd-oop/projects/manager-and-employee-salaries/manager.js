const Employee = require('./employee');

class Manager extends Employee {
  employees = [];

  constructor(name, salary, title, manager = null) {
    super(name, salary, title, manager);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier = 0) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }

  _totalSubSalary() {
    return this.employees.reduce(
      (acc, curr) => acc + curr.salary + (curr._totalSubSalary?.() ?? 0),
      0
    );
  }
}

module.exports = Manager;
