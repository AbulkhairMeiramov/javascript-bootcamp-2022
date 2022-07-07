// const myArray = [10, 'abc', true, undefined, null , [1, 2], {}];

// console.log(true, myArray.includes(true));
// console.log(10, myArray.includes(10));
// console.log('abc', myArray.includes('abc'));

// console.log('abc', 'starting from index 3', myArray.includes('abc', 3));
// console.log('null', myArray.includes(null));
// console.log('undefined', myArray.includes(undefined));
// console.log('[1, 2]', myArray.includes([1, 2]));
// console.log('{}', myArray.includes({}));

// // Challenge 1

// const tags = [
//   ["javascript", "es6"],
//   ["css", "flexbox"],
//   ["html", "web-browser"],
// ];

// const fruits = [
//   { title: "Orange", quantity: 10 },
//   { title: "Banana", quantity: 5 },
//   { title: "Apple", quantity: 25 },
// ];

// const primitiveTypesArray = [25, "x", true, undefined, null];

// /* Create a function "elementIsIncluded" with two parameters "searchElement" and "array". 
//   If type of the "searchElement" is object or array, you need to convert each element in the "array" to the string and then apply "includes" method with argument that will be also converted to the string.
//   If type of the "searchElement" is not an object or array - simply apply "includes" method and return result
//   */

// const elementIsIncluded = (searchElement, array) => {
//   if (typeof searchElement !== "object") {
//     return array.includes(searchElement);
//   } else if (typeof searchElement === "object") {
//     return array
//       .map((element) => JSON.stringify(element))
//       .includes(JSON.stringify(searchElement));
//   }
// };

// console.log(elementIsIncluded(["css", "flexbox"], tags)); // true

// console.log(elementIsIncluded(["flexbox", "css"], tags)); // false

// console.log(elementIsIncluded({ title: "Apple", quantity: 25 }, fruits)); // true

// console.log(elementIsIncluded({ title: "Banana" }, fruits)); // false

// console.log(elementIsIncluded(25, primitiveTypesArray)); // true


// Challenge 2

const myNumbers = [123, 50, 27];

/* Create a function "pushIfUnique" with two parameters "inputArray" and "newElement".
If "inputArray" already contains "newElement" print "{newElement} is already in the array" to the console.
Otherwise push "newElement" to the "inputArray". 
NOTE: We assume that "inputArray" may contain only primitive variables types
*/

const pushIfUnique = (inputArray, newElement) => {
    if(inputArray.includes(newElement) === true) {
        console.log(newElement + ' is already in the array');
    }
    else {
        inputArray.push(newElement);
    }
}

pushIfUnique(myNumbers, 50); // "50 is already in the array"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 is already in the array"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]