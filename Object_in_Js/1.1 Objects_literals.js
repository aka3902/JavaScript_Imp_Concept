// ES6 allows shorthand for properties and methods in object literals.
// Example: Shorthand Properties

const name = "John";
const age = 25;
let salary= 45000;

const person = { name, age};
console.log(person); // { name: "John", age: 25 }


/////////////////////////////////////
//Example: Shorthand Methods


const car = {
  start() {
    console.log("Car started");
  },
  stop() // written by me
  {
    console.log("Car stopped");
  }
};

car.stop(); // Car started