// Example 1 - declaration and assignment using array destructuring
// const myArray = [1, 2, 3];
// // let a, b, c;
// // a = myArray[0];
// // b = myArray[1];
// // c = myArray[2];

// let [a, b, c] = myArray;

// console.log(a, b, c);

// // Example 2 - assignment using destructuring

// const myArray = [1, 2, 3];
// let a, b, c;
// [a, b, c] = myArray;

// const anotherArray = [4, 5, 6];
// [a, b, c] = anotherArray;

// console.log(a, b, c);

// // Example 3 - more variables than elements in the array
// const myArray = ['a', 'b'];
// const [a, b, c] = myArray;
// console.log(a, b, c);

// Example 4 - default values
// const myArray = ['a'];
// const [a, b, c = 'c'] = myArray;
// console.log(a, b, c);

// Example 5 - skip element during destructuring
// const myArray = [1, 2, 3, 4, 5];
// const [, , a, , b] = myArray;
// console.log(a, b);

// // Example 6 - rest operator in array destructuring
// const myArray = [1, 2, 3, 4, 5];
// const [a, b, ...c] = myArray; // rest operator
// console.log(a, b, c);
// const d =[...c]; // spread operator
// console.log(d);

// // Example 7 - delete first element
// let myArray = [1, 2, 3];
// const [, ...anotherArray] = myArray;
// console.log(anotherArray);

// // Example 8 - swap values
// let x = 5, y = 10;
// [y, x] = [x, y];
// console.log(x, y);

// // Example 9 - destructuring in the function
// const myPosts = [
//     ['post1', 10],
//     ['post2', 20]
// ];
// myPosts.forEach(([title, likes]) => console.log(`${title} has ${likes} likes`));

// // Example 10 - nested array destructuring
// const myArray = [1, 2, [3, 4]];
// const [a, b, [c, d]] = myArray;
// console.log(a, b, c, d);

// // Challenge 1
// /*
// Modify parameters section in the "processQuantities" function to match console.log outputs
// */

// const processQuantities = (minQty, maxQty, defaultQty = 0) => {
//   console.log(minQty); // 8
//   console.log(maxQty); // 29
//   console.log(defaultQty); // 0
//   return maxQty - minQty; // returns 21
// };

// const qtyRange = [8, 29];

// processQuantities(qtyRange);

// // Challenge 2
// /*
// Create a function "minMax" that will accept any quantity of the arguments.
// This function should return array of two elements:
// 1. First element in the array is minimal value among all arguments
// 2. Second element in the array is maximal value among all arguments
// Use destructuring to parse results of the function calls.
// */


// const minMax = (...nums) => {
//     return [
//         nums.reduce((min, num) => (num < min ? num : min)), 
//         nums.reduce((max, num) => (num > max ? num : max)) 
//     ];
// }

// let min, max;

// /* call here "minMax" function with arguments 24, 5, 34, 10 */
// [min, max] = minMax(24, 5, 34, 10);
// console.log(min, max); // 5, 34

// /* call here "minMax" function with arguments 18, 23, 103, 70, 80, 25 */
// [min, max] = minMax(18, 23, 103, 70, 80, 25);
// console.log(min, max); // 18, 103