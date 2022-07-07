// /**
//  * Example 1 - Regular FOR loop
//  */

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log(i); // i is not available in the global scope

// /**
//  * Example 2 - Regular for loop with arrays
//  * Never use this kind of loops with arrays
//  */

// const myArray = [0, true, 'abc', null];

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }


// /**
//  * Example 3 - while loop
//  */

// let i = 0;

// while(i > -5){
//     console.log(i);
//     i--;    
// }


// /**
//  * Example 4 - do while loop
//  */

// let i = 0;

// do {
//     console.log(i);
//     i++;
// }
// while(i < 10);


// /**
//  * Example 5 - for in loop with objects
//  */

// const myObject = {
//     a: 'abc',
//     b: true,
//     c: null,
//     d: 150
// }

// for(let key in myObject) {
//     console.log(key);
//     console.log(myObject[key]);
// }


// /**
//  * Example 6 - for in loop with objects with inherited properties
//  */

//  const myObject = {
//     a: 'abc',
//     b: true,
//     c: null,
//     d: 150
// }

// Object.prototype.globalProp = 'Inherited property';

// for(let key in myObject) {
//     console.log(key, myObject[key]);
    
// }


// /**
//  * Example 7 - for in loop with arrays
//  */

// const myArray = [true, {}, {}, 10];

// Array.prototype.globalProp = 'Global array property';

// for (let key in myArray){
//     console.log(key, myArray[key]);
// }


// /**
//  * Example 8 - for of loop with arrays
//  */

// const persons = [
//     {
//         name: 'Mike',
//         age: 25
//     },
//     {
//         name: 'Bob',
//         age: 30
//     },
//     {
//         name: 'Alice',
//         age: 27
//     }
// ];

// for(let person of persons){
//     console.log(person.name + ' is ' + person.age + ' years old');
// }
// console.log(person); // Uncaught ReferenceError: person is not defined