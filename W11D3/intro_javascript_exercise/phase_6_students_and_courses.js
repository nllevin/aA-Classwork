function Student (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function () {
  return `${ this.firstName } ${ this.lastName }`;
};

Student.prototype.enroll = function (course) {
  if (course.students.indexOf(this) === -1) {
      if (this.hasConflict(course)) {
          throw `you have a scheduling conflict`;
      } else {
          this.courses.push(course);
          course.students.push(this);
      }
  }
};

Student.prototype.hasConflict = function (newCourse) {
   return this.courses.some(course => course.conflictsWith(newCourse));
};

Student.prototype.courseLoad = function () {
  let credits = {};

  this.courses.forEach( course => {
    credits[course.department] ? 
      credits[course.department] += course.credits : 
      credits[course.department] = course.credits;
  });

  return credits;
};

function Course (name, department, credits, block, days) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.block = block;
  this.days = days;
}

Course.prototype.addStudent = function (student) {
   student.enroll(this);
};

Course.prototype.conflictsWith = function (otherCourse) {
   return this.block === otherCourse.block && this.days.some( day => otherCourse.days.includes(day));

};






