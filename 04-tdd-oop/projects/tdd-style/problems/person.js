class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj))
      throw new TypeError('Argument must be an object');

    if (!obj.name && !obj.age)
      throw new TypeError('Argument mush have name and age property');

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (err) {
      return false;
    }
  }

  static greetAll(persons) {
    return persons.map(person => person.sayHello());
  }
}

module.exports = Person;
