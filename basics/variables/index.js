// /**
//  * Example 1 - Variable declaration
//  */

// var a;

// console.log(a);

// // console.log(b); Uncaught ReferenceError: b is not defined

// let c;

// console.log(c);

// // const d; Uncaught SyntaxError: Missing initializer in const declaration


// /**
//  * Example 2 - 'let'
//  */

// let myNumber = 10;

// console.log(myNumber);

// //declaration
// let myString;

// console.log(myString);

// //assignment
// myString = 'Hello from String';

// console.log(myString);

// //re-assignment
// myString = 'New value of myString variable';

// console.log(myString);


// /**
//  * Example 3 - 'var'
//  */

//  var myNumber = 10;

//  console.log(myNumber);
 
//  //declaration
//  var myString;
 
//  console.log(myString);
 
//  //assignment
//  myString = 'Hello from String';
 
//  console.log(myString);
 
//  //re-assignment
//  myString = 'New value of myString variable';
 
//  console.log(myString);


// /**
//  * Example 4 - 'const'
//  */

// const myBoolean = true;

// console.log(myBoolean);

// // myBoolean = false; Uncaught TypeError: Assignment to constant variable.

// // const myBoolean = false; Uncaught SyntaxError: Identifier 'myBoolean' has already been declared


// // Challenge 1 

// const myObject = {};

// console.log(myObject);

// // myObject = {}; Uncaught TypeError: Assignment to constant variable.


// // Challenge 2

// let x = 10;
// const y = true;
// const myObject = {a: x, b: y};
// x = 20;
// let anotherObject = {newA: x, b: y, c: myObject};

// console.log(x);
// console.log(y);
// console.log(myObject);
// console.log(anotherObject);
