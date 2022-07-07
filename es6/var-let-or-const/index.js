// Where to use CONST
// Example 1

// function multiplier(a) {
//     const MULT = 10;
//     return a * MULT;
// }

// console.log(multiplier(3));
// console.log(multiplier(5));

// Example 2 (Execute in Node.js)

// const path = require('path');

// console.log(path.resolve());

// Example 3

// const sum = function(a, b) {
//     return a + b;
// }

// console.log(sum(2, 5));

// Where to use LET
// Example 1

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// Example 2

// function shortStr(str) {
//     const MAX_LENGTH = 15;
//     if(str.length > MAX_LENGTH) {
//         let newStr;
//         newStr = str.substring(0, MAX_LENGTH) + '...';
//         console.log(newStr);
//     }
//     else {
//         // console.log(newStr); // not defined
//         console.log(str);
//     }
// }

// shortStr('Long string example');
// shortStr('Short')

// Where to use VAR
// Example 1

// var person = {
//     name: 'Bob',
//     age: 25
// }

// function updatePerson(person) {
//     var updatePerson = {};
//     if(person.name) {
//         updatePerson.name = person.name;
//     }
//     updatePerson.updatedAt = new Date();

//     return updatePerson;
// }

// console.log(updatePerson(person));


/**
 * CHALLENGE 1-1 TASK
 *
 * Rewrite code below using let, const and var according to
 * variables usage guidelines
 */

// 'use strict'
// const numbers1 = [23, 87, 110, 11, 20, 5, 34];
// const numbers2 = [11, 21, 31];

// const onlyOddNumbers = function(arr) {
//   var oddNumbers = [];
//   var evenNumbersQuantity = 0;
//   const LEN = arr.length;

//   for (let i = 0; i < LEN; i++) {
//     arr[i] % 2
//       ? oddNumbers.push(arr[i])
//       : evenNumbersQuantity++;
//   }

//   if (evenNumbersQuantity === 0) {
//     let info = "Array contains only odd numbers";
//     console.log(info);
//   } else {
//     let info =
//       "There are " +
//       evenNumbersQuantity +
//       " even numbers";
//     console.log(info);
//   }

//   return {
//     oddNumbers: oddNumbers,
//     evenNumbersQuantity: evenNumbersQuantity
//   };

// };


// console.log(onlyOddNumbers(numbers1));
// console.log(onlyOddNumbers(numbers2));


/**
 * CHALLENGE 1-2 TASK
 *
 * Find all menu elements by selector ".nav-link"
 * or by className "nav-link".
 *
 *  Use "for" loop to iterate through all menu items
 * Inside of the loop add "onclick" event handler to
 * each menu item.
 *
 * In the "onclick" event handler:
 * 1. Remove first "active" class from all
 * menu elements
 * 2. Add "active" class to the clicked menu element
 * 3. Log to the console message with the name
 * of the clicked menu item
 */

// const navLinks = document.querySelectorAll('.nav-link');
// for(let i = 0; i < navLinks.length; i++) {
//     navLinks[i].onclick = function() {
//         for(let j = 0; j < navLinks.length; j++) {
//             navLinks[j].classList.remove('active');
//         }

//         navLinks.classList.add('active');
//         console.log(navLinks.innerHTML);
//     };
// }

