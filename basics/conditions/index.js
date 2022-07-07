// /**
//  * Example 1 - IF statement
//  */

// let i = 10;

// if (i > 0) {
//     console.log(i);
// }

// if (i) {
//     console.log(i);
// }

// /**
//  * Example 2 - if else statement
//  */

// const myArray = [4, true, 'abc', null, 5, 10];

// if (myArray.length > 5) {
//     console.log('Array is large');
// } else {
//     console.log('Array is small');
// }

// /**
//  * Example 3 - Chaining if and if else statements
//  */

// let color = 'green';

// if (color === 'green') {
//     console.log('It is green color');
// } else if (color === 'yellow') {
//     console.log('It is yellow color');
// } else if (color === 'red') {
//     console.log('It is red color');
// } else {
//     console.log('Color is unknown');
// }

// /**
//  * Example 4 - switch statement
//  */

// let color = "green";

// switch (color) {
//   case "green":
//     console.log("It is green color");
//     break;
//   case "yellow":
//     console.log("It is yellow color");
//     break;
//   case "red":
//     console.log("It is red color");
//     break;
//   default:
//     console.log("Color is unknown");
// }

// /**
//  * Example 5 - Ternary operator
//  */

// let i = 10;
// let j;

// j = i < 100 ? i : 0;

// i > 10 && j
//     ? console.log('Condition is truthy')
//     : console.log('Condition is falsy');

// console.log(j);

// // Challenge 1

// const myObject = {
//     key1 : true,
//     key5 : 10,
//     key3 : 'abc',
//     key4 : null,
//     key10 : NaN 
// };

// for (let key in myObject) {
//     if(key === 'key1' || key === 'key3') {
//         console.log(myObject[key]);
//     }
// }

// // Challenge 2

// const myNumbers = [
//     2355,
//     7235,
//     8135,
//     1762,
//     2361,
//     8351
// ];

// let newRandomNumber;

// function getRandomInt() {
//     return Math.floor(1000 + Math.random() * 9000);
// }

// function isNotUnique(newRandomNum) {
//     // compare num with numbers in the myNumbers array
//     for(let number of myNumbers) {
//         if(number === newRandomNum) {
//             return true;
//         }
//     }
// }

// do {
//     newRandomNumber = getRandomInt();
// } while (isNotUnique(newRandomNumber));

// myNumbers.push(newRandomNumber);
// console.log(myNumbers);

// // Challenge 3

// const myObject = {
//     name : 'Mike',
//     age: 30,
//     city: 'London'
// }

// Object.prototype.country = 'England';

// for (let key in myObject) {
//     if(myObject.hasOwnProperty(key)) {
//         console.log(myObject[key]);
//     }
// }

// // Challenge 4

// // function emptyArray(inputArray) {
// //     if (inputArray.length > 0) {
// //         return 'Array is not empty';
// //     } else {
// //         return 'Array is empty';
// //     }
// // }

// // console.log(emptyArray([1, 3]));
// // console.log(emptyArray([]));

// function emptyArray(inputArray) {
//     return inputArray.length > 0 ? 'Array is not empty' : 'Array is empty';
// }
// console.log(emptyArray([1, 3]));
// console.log(emptyArray([]));
