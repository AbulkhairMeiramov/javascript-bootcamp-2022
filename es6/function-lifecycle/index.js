// //Function declaration
// console.log(smile); // function contents in the string format
// smile(); // declared, initialized, assigned

// function smile() {
//     console.log('smile');
// }

// smile(); // success

// //IIFE - Immediately invoked function expression
// (function() {
//     console.log("That's function expression");
// })();

// Function expression assigned to the variable
// console.log(sum(5, 10)); // TDZ - Temporal Dead Zone
const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 10));
