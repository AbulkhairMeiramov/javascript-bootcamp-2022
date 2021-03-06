// // Example 1 - function call
// const myGreeting = (name, city, age) => {
//     return `Hello from ${name} who is ${age} years old and lives in ${city}`;
// };

// const myPerson = ['Alice', 'Boston', 20];
// console.log(myGreeting(...myPerson));

// const anotherPerson = ['New York', 25];
// console.log(myGreeting('Bob', ...anotherPerson));

// // Example 2 - concatenate arrays
// const a = [1, 2, 3];
// const b = [4, 5];

// const c = a.concat(b).concat(6);
// console.log(c);

// const d = [...a, ...b, 6];
// console.log(d);

// // Example 3 - create date
// const dateInfo = [2025, 0, 10];
// const date = new Date(...dateInfo);
// console.log(date);

// // Example 4 - copy array
// const myArray = ['a', 5, [], true];
// const newArray = [...myArray];
// newArray.push(10); // myArray is not mutated
// newArray[2].push(7); // myArray is mutated
// console.log(newArray);

// // Example 5 - copy object (es2018)
// const myObject = {a: 10, b: 'c', d: [1, 2]};
// const copiedObject = {...myObject};
// copiedObject.a = 20; // myObject is not mutated
// copiedObject.d.pop(); // myObject is not mutated
// console.log(copiedObject);
// console.log(myObject);

// // Example 6 - spread string
// const myStr = 'Hello world';
// const letters = [...myStr];
// console.log(letters);

// const oldStyleLetters = myStr.split('');
// console.log(oldStyleLetters);

// Challenge
/*
Create a function "meanScore" that will accept any quantity of the arguments, gather them into single array and return mean value of all arguments rounded to 2 decimal places.
If at least one element in the gathered array is not a number - throw following error to the console: 
"Supplied arguments must contain only numbers!"
Type of the returned value must be a "number".
HINT: In this Challenge you should use both rest and spread operators.
*/

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

const meanScore = (...scores) => {
  if (scores.every(score => typeof score === "number")) {
    return parseFloat(
      scores
        .reduce((avg, score) => {
          return avg + score / scores.length;
        }, 0)
        .toFixed(2)
    );
  } else {
    throw new Error("Supplied arguments must contain only numbers!");
  }
};

console.log(meanScore(...scores1)); // 1.93

console.log(meanScore(...scores1, ...scores2)); // 2.8

console.log(
  meanScore(...scores1, ...scores2, ...scores3)
); // 2.59

console.log(meanScore(...scores4)); // Supplied arguments must contain only numbers!
