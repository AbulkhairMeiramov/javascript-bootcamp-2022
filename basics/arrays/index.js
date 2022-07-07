// /**
//  * Example 1 - Empty array
//  */

// const myArray = [];
// console.log(myArray);

// /**
//  * Example 2 - add elements to the array
//  */

// const myArray = [];

// myArray[0] = 'First element';
// console.log(myArray);

// myArray[1] = 'Second element';
// console.log(myArray);

// myArray.push('Third element'); // Preferable method
// console.log(myArray);

// /**
//  * Example 3 - modify elements
//  */

// const myArray = [3, true, 'abc', {}];
// console.log(myArray);

// myArray[1] = "New value for second element";
// console.log(myArray);

// myArray[0] = null;
// console.log(myArray);

// myArray[3].newProp = 10;
// console.log(myArray);

// console.log(myArray[3].newProp); // 10
// console.log(myArray[3]['newProp']); // 10

// /**
//  * Example 4 - Square bracket notation
//  */

// const myArray = [1, 2];
// // If property name in the object is numeric, you cant use dot notation
// console.log(myArray[0]);
// console.log(myArray.0); // Uncaught SyntaxError: missing ) after argument list

// /**
//  * Example 5 - delete elements
//  */

// const myArray = [true, null, 1, 2, 'abc'];
// console.log(myArray);

// delete myArray[2];
// console.log(myArray); // element with index 2 is empty
// console.log(myArray[2]); // undefined

// myArray.pop();
// console.log(myArray); // (4) [true, null, пусто, 2]

// myArray.pop();
// console.log(myArray); // (3) [true, null, пусто]

// myArray.shift();
// console.log(myArray); // (2) [null, пусто]

// /**
//  * Example 6 - compare arrays
//  */

// const myArray1 = [1, 2, 3];
// const myArray2 = [1, 2, 3];
// console.log(myArray1 === myArray2); // false

// const copyOfMyArray1 = myArray1;
// console.log(copyOfMyArray1 === myArray1); // true

// console.log(myArray1.toString() === myArray2.toString()); // true

// // Challenge 1

// const myArray = [true, null];
// myArray.unshift('Hello');
// myArray.unshift(100);
// console.log(myArray); // (4) [100, 'Hello', true, null]

// // Challenge 2

// const myArray = [1, 2];
// myArray[10] = 'abc';
// console.log(myArray); // (11) [1, 2, пусто × 8, 'abc']

// // Challenge 3

// const arrayOfcars = [
//   { carBrand: "Mazda", price: 1 },
//   { carBrand: "BMW", price: 2 },
//   { carBrand: "Mercedez", price: 3 },
// ];
// arrayOfcars.push({ carBrand: "Audi", price: 4 });
// console.log(arrayOfcars);
