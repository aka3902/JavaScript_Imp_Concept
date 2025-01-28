const numbers = [1, 2, 7,3];
const [a, b, c,d] = numbers;

console.log(a, b, c,d); // 1 2 3

//Array destructuring allows you to unpack values from an array into variables.

const [first, , third] = numbers; // you can skip the element with this methods

console.log(first, third); // 1 3