// Pre-ES6-Template String
const myNumber = 10; // '10'
const myString = "Hello";
const myArray = [1, 2]; // '1, 2'
const myObj = { x: 10 }; // '[object Object]'
const myBool = true; // 'true'
const myGreeting = (name) => "Hello " + name;

const templateStr =
  "Number is " +
  myNumber +
  " and string is " +
  myString +
  " and array is " +
  myArray +
  " and my object is " +
  myObj +
  " and boolean is " +
  myBool +
  " and result of the function call is " +
  myGreeting("Mike");

console.log(templateStr);

// ES6- Template literals
const templateLiteral = `Number is ${myNumber} and string is ${myString} and array is ${myArray} and my object is ${myObj} and boolean is ${myBool} and result of the function call is ${myGreeting(
  "Mike"
)} and result of the ternary operator is ${myBool ? 15 : "World"}`;

console.log(templateLiteral);

const btn1 = 'Button1';
const btn2 = 'Button2';
const myButtons = `
    <div>
        <button>${btn1}</button>
        <button>${btn2}</button>
    </div>
`;

document.body.innerHTML = myButtons;
