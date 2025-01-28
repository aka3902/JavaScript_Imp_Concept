// Object destructuring lets you extract properties into variables.

//Example: Extracting Properties


const student = { id: 101, grade: "A" ,sub:'maths'};
const { id, grade, sub } = student;

//console.log(id, grade, sub); // 101 "A"


const { id: studentId, grade: studentGrade, sub: Studentsub } = student;
console.log(studentId, studentGrade, Studentsub); // 101 "A"

