// Similar to arrays, the spread operator works for objects to copy or merge them.

// Example: Copying Objects

const user = { name: "Alice", age: 30 };
const userCopy = { ...user };

console.log(userCopy); // { name: "Alice", age: 30 }

//Example: Merging Objects



const details = { name: "Bob", age: 25 };
const contact = { email: "bob@example.com" };
let city ={city: 'Gorakhpur'}

const fullProfile = { ...details, ...contact, ...city };
console.log(fullProfile); 