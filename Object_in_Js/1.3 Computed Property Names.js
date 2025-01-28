//You can define object properties dynamically using computed property names.

//Example:


const key = "score";
let name="arpit";
const exam = {
  [key]: 95,
  [name]: 'arpit'
};

console.log(exam); // { score: 95 }