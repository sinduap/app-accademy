const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, gpa) {
    super(firstName, lastName, null);
    this.major = major;
    this.GPA = gpa;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA === student2.GPA) return 'Both students have the same GPA';

    const higherGPA = student1.GPA > student2.GPA ? student1 : student2;
    return `${higherGPA.firstName} ${higherGPA.lastName} has the higher GPA.`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
