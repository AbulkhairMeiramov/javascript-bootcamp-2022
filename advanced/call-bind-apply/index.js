// /**
//  * Example 1 - call - custom this
//  */

// const myObject = {
//     a: 10,
//     b: null
// };

// function myFunction() {
//     console.log(this);
// }

// myFunction(); // this is window

// myFunction.call(myObject); // this is {a:10, b:null}

// /**
//  * Example 2 - custom this and arguments
//  */

// const myObject = {
//     a: 10,
//     b: null
// };

// function myFunction(a, b) {
//     console.log(a + b);
//     console.log(this);
// }

// // myFunction(); // this is window

// myFunction.call(myObject, 10, 3); // this is {a:10, b:null}

// /**
//  * Example 3 - call method of the object with other other object this
//  */

// const person1 = {
//     city: 'New York',
//     name: 'Bob',
//     info: function() {
//         console.log(this.name + ' lives in ' + this.city);
//     }
// };

// const person2 = {
//     city: 'Paris',
//     name: 'Alice'
// };

// person1.info(); // Bob lives in New York
// person1.info.call(person2); // Alice lives in Paris

// /**
//  * Example 4 - Apply - custom this and arguments
//  */

// const myObject = {
//   a: 10,
//   b: 20,
// };

// function myFunction(a, b, c) {
//   let sum = a + b + c;
//   // console.log(this);

//   for (let key in this) {
//     if (typeof this[key] === "number") {
//       sum += this[key];
//     }
//   }
//   console.log(sum);
// }

// // myFunction(); // this is window

// myFunction.apply(myObject, [10, 3, 5]); // this is {a:10, b:20}


// /**
//  * Example 5 - bind methods
//  */

// const myObject = {
//   a: 10,
//   b: null,
// };

// function myFunction(a, b) {
//   console.log(a + b);
//   console.log(this);
// }

// const customFunction1 = myFunction.bind(myObject, 10, 3); // preset 'this' and both arguments
// customFunction1();

// const customFunction2 = myFunction.bind(myObject); // preset only 'this'
// customFunction2(20, 6); // call with custom arguments

// const customFunction3 = myFunction.bind(myObject, 50); // preset this and first argument
// customFunction3(30); // pass remaining arguments