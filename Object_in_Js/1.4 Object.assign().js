//Copies properties from one or more source objects to a target object.

//Example: Merging Objects


const obj1 = { a: 1, b: 2,c:7 };
const obj2 = { b: 3, c: 4 };

const merged = Object.assign({}, obj1, obj2);
console.log(merged);