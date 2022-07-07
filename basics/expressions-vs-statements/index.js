// /**
//  * Expressions
//  */

// 10
// 'abc'
// 5 + 3

// ;(function(a) {
//     console.log(a);
// }) // Function call embedded into the '()'

// //Immediately invoked function expression
// ;(function() {
//     console.log('Hello from IIFE');
// })() // Function call is expression

// let a;
// a = 10 // Assignment expression

// // 5 = true // Uncaught SyntaxError: Invalid left-hand side in assignment

// 4 <= 10 <= 20 || 5 // true - Logical expression

// /**
//  * Statements
//  */

// let a; // Variable declaration is statement
 
// a = 3

// function myFunction(b) {
//     // Quick check that 'return' is a statement (not expression)
//     // console.log(return b); // Uncaught SyntaxError: Unexpected token 'return'
//     return b;
// }

// myFunction(a)

// if (true) {
//     console.log("Hello from 'if' statement");
// } // if statement

// // Quick check that 'if' is statement
// // console.log(
// //     if (true) {
// //         console.log("Hello from 'if' statement");
// //     }
// // ); // Uncaught SyntaxError: Unexpected token 'if'

// /**
//  * Expression statement
//  */

// console.log(4 + 3); // Expression statement

// // console.log(console.log(4 + 3);); // Uncaught SyntaxError: missing ) after argument list

// console.log(console.log(4 + 3)); // Expression statement

// let a;
// a = 5; // Expression statement

// true; // Expression statement

// console.log(true;); // Uncaught SyntaxError: missing ) after argument list

// console.log(true);

// //Challenge 1

// const myObject = {
//     x: 10,
//     y: true
// };

// // console.log(delete myObject.x); // Delete operator is used in the expressions

// delete myObject.x; // Expression statement

// // Challenge 2

// function fn() {
//     console.log('Greeting from the fn function');

//     return function(a) {
//         console.log(a);
//     };
// }

// fn() // 'Greeting from the fn function'
// (true) // 'true' because this line will be interpreted as function call with argument 'true'

// // Challenge 3

// function firsFunction(a, b) {
//     return a + b;
// } // Function Declaration

// const secondFunction = function(a, b) {
//     return a + b;
// }; // Statement