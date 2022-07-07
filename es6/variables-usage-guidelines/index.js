// 1. Make code readable for other developers

// Bad code
// a = 'Mike';
// b = 'London';

// function test(x, y) {
//     d = 'Hello ' + x + ' from ' + y;
//     return d;
// }

// var a, b, d;

// console.log(test(a, b));

// Good code
// personName = 'Mike';
// personCity = 'London';

// function greet(personName, personCity) {
//     var greetPerson = 'Hello ' + personName + ' from ' + personCity;
//     return greetPerson;
// }

// console.log(greet(personName, personCity));

// 2. Always declare variables before first usage

// Bad code
// a = 10;
// var a;

// Good code
// var a;
// a = 10;

// 3. Always add "use strict" at the beginning of each JS file

// 'use strict'
// var b = 10;
// function fn() {
//     var d = b;
//     return d;
// }

// fn();

// 4. Don't expose to the outer scopes locally used variables

// var myArray;
// var i;

// Expose
// function fn2() {
//     myArray = [1, 2, 3];
//     for(i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//     }
// }

// fn2();

// Don't expose
// function fn2() {
//     var myArray = [1, 2, 3];
//     for(var i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//     }
// }

// fn2();