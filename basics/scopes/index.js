// /**
//  * Example 1 - Global scope
//  */

// var a = 10;
// let b = true;

// console.log(a); // 10
// console.log(window.a); // 10

// console.log(b); // true
// console.log(window.b) // undefined

// const c = 'abc';
// console.log(c); // abc
// console.log(window.c); // undefined

// function myFunction(a) {
//     console.log(a); // undefined
//     console.log(b); // true
// }

// console.log(myFunction); // ƒ myFunction(a) { console.log(a); }
// console.log(window.myFunction);  // ƒ myFunction(a) { console.log(a); }

// myFunction();


// /**
//  * Example 2 - Function scope
//  */

// let e;

// function myFunction(a, b) {
//     const c = true;
//     console.log(c); // true
//     // console.log(d); // Uncaught ReferenceError: d is not defined
//     console.log(e); // undefined
//     console.log(a, b); // values of the parameters a, b
// }

// myFunction();
// myFunction(2, 3);

// // console.log(c); // Uncaught ReferenceError: c is not defined
// // console.log(a); // Uncaught ReferenceError: a is not defined
// // console.log(b); // Uncaught ReferenceError: b is not defined


// /**
//  * Example 3 - Scope chain
//  */
// const c = 2;

// function sum(a, b) {
//     const c = 3;
//     function mult(a, b) {
//         return a * b * c; // 100
//     }
//     console.log(mult(a, b)); 
//     return a + b;
// }

// const result = sum(10, 5);
// console.log(result); // 15


// /**
//  * Example 4 - Undeclared variable
//  */

// a = 10; // variable a will be automatically declared in the global scope
// console.log(a); 

// const myFunction = function() {
//     b = 5; // // variable b will be automatically declared in the global scope
//     console.log(b); // 5
// }

// myFunction();
// console.log(b); // 5


// /**
//  * Example 5 - Strict mode
//  */

// 'use strict';

// // a = 10; // Uncaught ReferenceError: a is not defined

// function myFn() {
//     b = 5; // Uncaught ReferenceError: b is not defined
// }

// myFn();


// /**
//  * Example 6 - Strict mode in the function
//  */

// a = 10; 

// function myFn() {
//     'use strict';
//     b = 5; // Uncaught ReferenceError: b is not defined
// }

// myFn();


// //Challenge 1

// const b = 2;
// let d = 15;

// function myFn1(a) {
//     let b;
//     let d = 10;
//     myFn2(b);
// }

// function myFn2(a) {
//     let c = 5;
//     console.log(a, b, c, d);
// }

// myFn1();

// // answer: undefined, 2, 5, 15

// // Challenge 2

// // 'use strict';

// // function myFunction() {
// //     a = 2;
// //     return a;
// // }

// // myFunction();

// // Answer
// 'use strict';

// function myFunction() {
//     let a = 2;
//     return a;
// }

// myFunction();

// // Challenge 3

// setTimeout(function myFn() {
//     console.log('Hello from myFn function');
// }, 2000);

// myFn();

// // Answer
// // Uncaught ReferenceError: myFn is not defined
// // Hello from myFn function