// /**
//  * Example 1 - Create object and modify properties
//  */

// let myObject;

// myObject = {
//     a: 10,
//     b: 'abc'
// };

// console.log(myObject);

// myObject.a = 15;

// console.log(myObject);

// myObject.c = true;

// console.log(myObject);

// delete myObject.b;

// console.log(myObject);

// console.log(myObject.a);

// // Challenge 1

// let myPost = {
//     postTitle: "Object is reference type",
//     postLikes: 0,
//     shared: false,
// }

// myPost.postLikes += 1;

// console.log(myPost);

// delete myPost.shared;

// console.log(myPost);

/**
 * Example 2 - Use const for object declaration
 */

// const myObject = {};

// myObject.a = true; // No error! Variable is not reassigned

// console.log(myObject);

// myObject = {
//     a: true
// } // Uncaught TypeError: Assignment to constant variable.


// //Challenge 2

// let myObject = {
//     a: 10,
// }

// let copyOfMyObject = myObject;

// copyOfMyObject.b = false;

// console.log(myObject);
// console.log(copyOfMyObject);


// /**
//  * Example 3 - Bracket notation
//  */

// let myObject = {
//     a: true,
//     b: null,
//     c: 25
// };

// console.log(myObject['a']); // true

// // console.log(myObject[a]); //Uncaught ReferenceError: a is not defined

// console.log(myObject['b']); // null

// const propertyName = 'c';

// console.log(myObject[propertyName]); // 25

// console.log(myObject['propertyName']); // undefined

// myObject['new' + 'Property' + 'Name'] = 'Value for dynamically computed property name';

// console.log(myObject);

// /**
//  * Example 4 - Missing properties
//  */

// const myObject = {
//     a: 3,
//     b: true
// }

// // Code execution is not stopped
// console.log(myObject.c); // undefined

// console.log(myObject.absentProperty); //undefined

// //Code execution is stopped
// // console.log(nonDeclaredVariable); //Uncaught ReferenceError: nonDeclaredVariable is not defined


// // Never assign 'undefined' to any property or variable. Use 'null' instead
// myObject.newPropertyWithUndefinedValue = undefined;

// console.log(myObject);
// console.log(myObject.newPropertyWithUndefinedValue);

// //Challenge 3

// let objectWithNestedObject = {
//     nestedObject: {}
// }

// objectWithNestedObject.nestedObject.a = null;

// objectWithNestedObject.nestedObject['b'] = true;

// console.log(objectWithNestedObject);
