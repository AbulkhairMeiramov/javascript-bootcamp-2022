// /**
//  * Section 1 - Arithmetic operations
//  */

// let a, b;
// a = 1;
// b = 2;

// //Math with numbers
// console.log(a + b); // 3
// console.log(a * b); // 2
// console.log(a / b); // 0.5
// console.log(a - b); // -1

// a = 'abc';
// b = 5;

// //Math with non-numbers
// console.log(a + b); // abc5
// console.log(a * b); // NaN
// console.log(a / b); // NaN
// console.log(a - b); // NaN

// a = 'Hello';
// b = 'World';

// //String concatenation
// console.log(a + ' ' + b);

// let c = '1';

// //Unary plus
// console.log(+c); // 1
// console.log(Number(c)); // 1

// c = undefined;
// console.log(+c); // NaN


// //Unary minus
// c = '5';
// console.log(-c); // -5

// c = 'abc';
// console.log(-c); // NaN

// //++
// let d = 5;
// ++d; // Same as d = d + 1
// console.log(d); // 6
// d++;
// console.log(d); // 7

// // Built-in '++' function FIRST increments value of the operand and SECOND returns value of the operand 
// console.log(++d); // 8
// // Built-in '++' function FIRST returns value of the operand and SECOND increments value of the operand
// console.log(d++); // 8 
// console.log(d); // 9

// //--
// console.log(d--); // 9
// console.log(d); // 8
// console.log(--d); // 7 // Same as d = d - 1
// console.log(d); // 7

// /**
//  * Section 2 - Comparison operators
//  */

// //Numbers comparison
// let a, b;
// a = 5;
// b = 7;
// c = 5;

// console.log(a < b); // true
// console.log(a > b); // false

// console.log(a <= c); // true
// console.log(a >= c); // true

// //String comparison
// let myStr1, myStr2, myStr3;
// myStr1 = 'abc';
// myStr2 = 'bcd';
// myStr3 = 'Bcd';
// // Sorted strings 'Bcd', 'abc', 'bcd'

// console.log(myStr1 > myStr2); // false
// console.log(myStr1 < myStr2); // true
// console.log(myStr1 > myStr3); // true

// // Equality operators
// // Never use '==' and '!=' operators
// let myString = '0';
// let myNumber = 0;
// let myBoolean = false;

// // Types of the values may be different
// console.log(myString == myNumber); // true
// console.log(myNumber == myBoolean); // true
// console.log(myString == myBoolean); // true

// //Type and value are compared
// console.log(myString === myNumber); // false
// console.log(myNumber === myBoolean); // false
// console.log(myString === myBoolean); // false

// // How you should compare variables of different types
// console.log(Number(myString) === myNumber); // true
// console.log(+myString === myNumber); // true


// console.log(myString != myNumber); // false
// console.log(myString !== myNumber); // true

// console.log(null === undefined); // false
// console.log(null == undefined); // true

// console.log(0 === '' === null === undefined === false); // true

// /**
//  * Section 3 - Logical operators
//  */


// // OR operator ||
// console.log(true || false); // true
// console.log(false || true); // true

// console.log('abc' || ''); // abc
// console.log('' || 'abc'); // abc
// console.log('' || ''); // ''

// // Falsy values
// console.log('' || 0 || null || undefined || NaN || false); // false

// let city;
// const defaultCity = 'New York';

// let myCity = city || defaultCity;
// console.log(myCity); // New York

// myOtherCity = city || console.log('Fill in city please') || defaultCity;
// console.log(myOtherCity);

// city = 'Los Angeles'; 
// myCity = city || defaultCity;
// console.log(myCity); // Los Angeles

// // AND Operator &&
// console.log(true && false); // false
// console.log(false && true); // false

// // AND operator returns value of the first falsy operand
// console.log('abc' && 10 && false && '' && 'abcd'); // false
// console.log('abc' && 10 && NaN && '' && 'abcd'); // NaN
// console.log('abc' && 10 && '' && 'abcd'); // ''

// // All operands are truthy
// console.log('abc' && 10 && true && 123 && 'Hello World'); // Hello World

// //NOT operator !
// console.log(!'abc'); // false
// console.log(!''); // true
// console.log(!0); // true

// let myVariable = undefined;
// console.log(!myVariable); // true

// myVariable = 'Bogdan';
// console.log(!myVariable); // false

// // Quick truthy/falsy check
// myVariable = null;
// console.log(!!myVariable); // false
// myVariable = 10;
// console.log(!!myVariable); // true


// /**
//  * Section 4 -Operators precedence
//  */

// console.log(2 + 4 * 10); // 42 FIRST - '*' SECOND - '+'
// console.log((2 + 4) * 10) // 60 FIRST - '()' SECOND '+' THIRD - '*'

// let a;
// a = 1;

// a = a + 5; // FIRST - '+', SECOND - '=' 

// console.log(a); // 6

// /**
//  * Section 5 - Operators Associativity
//  */

// let a, b;
// b = 3;

// a = b = 5; // right-to-left associativity
// console.log(a, b);

// console.log(4 + 5 + 6); // 15 left-to-right associativity
// console.log(6 + 4 + 5); // 15 left-to-right associativity

// console.log(5 * 10 / 2); // 25 left-to-right associativity
// console.log(5 * 10 / 2 / 5); // 5 left-to-right associativity


// // Challenge 1

// let myVariable1 = 10;
// let myVariable2 = '5';

// console.log(+myVariable1 <= +myVariable2);

// myVariable1 = '20';
// myVariable2 = 100;

// console.log(+myVariable1 <= +myVariable2);

// // Challenge 2
// let myNumber1 = 10;
// let myNumber2 = 3;

// console.log(10 % 3); // 1

// // Challenge 3

// console.log(3 || true && null || false); // false
// // Step 1: true || null -> null
// // Step 2: 3 || null -> 3
// // Result: 3

// // Challenge 4

// let a = 10;

// // a = a + 1;
// a += 1;
// console.log(a); // 11

// // a = a * 2;
// a *= 2;
// console.log(a); // 22

// // a = a - 5;
// a -= 5;
// console.log(a); // 17

// // a = a / 2;
// a /= 2;
// console.log(a); // 8.5