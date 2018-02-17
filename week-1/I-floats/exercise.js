var numberOfStudents = 15;
var numberOfMentors = 5;
var percentageStudents =
  numberOfStudents / (numberOfStudents + numberOfMentors) * 100;
var percentageMentors =
  numberOfMentors / (numberOfStudents + numberOfMentors) * 100;
console.log("percentage students: " + percentageStudents + "%");
