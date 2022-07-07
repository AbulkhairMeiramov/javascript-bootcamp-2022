// // Example 1
// const myNumbers = [3, -5, 1, 10, -7];

// const isPositiveNumber = element => typeof element === 'number' && element > 0;

// const allPositivesCheck = myNumbers.every(isPositiveNumber);

// console.log(allPositivesCheck);

// const somePositivesCheck = myNumbers.some(isPositiveNumber);

// console.log(somePositivesCheck);

// // Example 2
// const items = [
//   {
//     title: "Computer",
//     quantity: 10,
//   },
//   {
//     title: "Phone",
//     quantity: 3,
//   },
//   {
//     title: "Headphones",
//     quantity: 15,
//   },
// ];

// // all items have quantity > 5
// if (items.every((item) => item.quantity > 5))
//   console.log("all items are available");

// // all items have quantity > 0 and some items have quantity <= 5
// if (
//   items.every((item) => item.quantity > 0) &&
//   items.some((item) => item.quantity <= 5)
// )
//   console.log("some items may be sold soon");

// // some items have quantity = 0
// if (items.some((item) => item.quantity === 0))
//   console.log("some items are sold out");

// // Challenge 1

// const a = [5, "abc", 10, 1];
// const b = [4, 10, 14, 25, 25, 50];
// const c = [150, 132, 80, 40];
// const d = [15, 26, 10, 23, 85];

// /*
// Create a function "arrayCheck" with one parameter - "inputArray".
// If at least one element in the array is not a number - return "Some elements are not numbers".
// If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".
// If numbers in the array are sorted in descending order - return "Array is sorted is descending order".
// If array is not sorted - return "Array is not sorted"
// */

// const arrayCheck = (inputArray) => {
//   if (inputArray.some((element) => typeof element !== "number")) {
//     return "Some element are not numbers";
//   }
//   if (
//     inputArray.every((element, index, array) =>
//       index > 0 ? element >= array[index - 1] : true
//     )
//   ) {
//     return "Array is sorted in ascending order";
//   }
//   if (
//     inputArray.every((element, index, array) =>
//       index > 0 ? element <= array[index - 1] : true
//     )
//   ) {
//     return "Array is sorted in descending order";
//   }
//   return "Array is not sorted";
// };

// console.log(arrayCheck(a)); // Some elements are not numbers
// console.log(arrayCheck(b)); // Array is sorted is ascending order
// console.log(arrayCheck(c)); // Array is sorted is descending order
// console.log(arrayCheck(d)); // Array is not sorted

// /* Hint 1: Use "every" helper method to solve this.
// Hint 2: You should use all three parameters in the callback function "element", "index", "array".
// Hint 3: Each element in the array except first one should be compared to the previous
// */

// // Challenge 2

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a === b); // false. Because pointers are different

// /* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo". 
// If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".
// Otherwise return "false". */

// // for method
// // const arraysAreEqual = (arrayOne, arrayTwo) => {
// //     for(let i = 0; i < arrayOne.length; i++){
// //         if(arrayOne.length !== arrayTwo.length){
// //             return false;
// //         }
// //         if(arrayOne[i] === arrayTwo[i]){
// //             return true;
// //         }
// //         else{
// //             return false;
// //         }
// //     }
// // }

// // every method
// const arraysAreEqual = (arrayOne, arrayTwo) =>
//   arrayOne.length === arrayTwo.length &&
//   arrayOne.every((element, index) => element === arrayTwo[index]);  

// const c = [2, 1, 3];
// const d = [1, 2, 3, 4];

// console.log(arraysAreEqual(a, b)); // true
// console.log(arraysAreEqual(a, c)); // false
// console.log(arraysAreEqual(a, d)); // false


// Challenge 3

const transport = ["Bus", "Car", "Bicycle", "Airplane"];

/* Create a function "elementFound" with two parameters "inputArray" and "searchElement".
If "searchElement" is found in the "inputArray" - return "true".
Otherwise return "false"
Hint: Use "some" helper method to solve this
*/

const elementFound = (inputArray, searchElement) => inputArray.some(element => element === searchElement);

console.log(elementFound(transport, "Bus")); // true
console.log(elementFound(transport, "Phone")); // false
console.log(elementFound(transport, "Airplane")); // true
