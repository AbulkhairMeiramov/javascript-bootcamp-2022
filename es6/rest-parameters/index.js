// Arrow function
const sumNumbers = (...nums) => {
    console.log(nums);
    // console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return nums
    .filter(num => typeof num === 'number')
    .reduce((sum, num) => sum + num, 0)
}

console.log(sumNumbers('abc', 2, 3, 4));

// // Regular function
// function sumNumbers(...nums) {
//     // // Option 1 - Rest parameter
//     // console.log(nums); // Array
//     // return nums
//     // .filter(num => typeof num === 'number')
//     // .reduce((sum, num) => sum + num, 0)
    
//     // Option 2 - Arguments variable
//     console.log(arguments); // Object
//     // arguments.sort(); // Uncaught TypeError: arguments.sort is not a function
//     return Array.from(arguments)
//     .filter(num => typeof num === 'number')
//     .reduce((sum, num) => sum + num, 0)
// }

// console.log(sumNumbers('abc', 2, 3, 4));
