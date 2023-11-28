class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager;
    this.manager?.addEmployee(this);
  }

  calculateBonus(multiplier = 0) {
    return this.salary * multiplier;
  }
}

module.exports = Employee;
