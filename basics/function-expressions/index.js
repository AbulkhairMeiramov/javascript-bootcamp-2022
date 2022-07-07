/**
 * Example 1 - Try to declare function expression
 */

//It is not possible to use function expression standalone
// function() {} // Uncaught SyntaxError: Function statements require a function name

// /**
//  * Example 2 - Assign function expression to the variable
//  */

// const myFunction = function() {};

// console.log(myFunction()); // undefined

// console.log(myFunction); // ƒ () {}

// /**
//  * Example 3 - Callback function
//  */

// setTimeout(function() {
//     console.log('Delayed message');
// }, 1000);


// /**
//  * Example 4 - Callback function (example 2)
//  */
// let i = 1;
// setInterval(function() {
//     console.log('Message logged each one second ' + i);
//     i += 1;
// }, 1000);

// //Challenge 1

// let i = 1;
// const myInterval = setInterval(function() {
//     console.log('Here is the message number ' + i);
//     i += 1;
// }, 2000);

// setTimeout(function() {
//     clearInterval(myInterval);
// }, 10000);
