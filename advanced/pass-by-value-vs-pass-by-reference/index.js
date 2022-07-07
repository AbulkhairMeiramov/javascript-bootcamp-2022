// // Pass by value 
// // if value that holds value of primitive value type is passed to the function as argument,
// // it's value can't be changed inside of the function 
// function myFunction(paramaterA) {
    
//     paramaterA = 20;
//     return paramaterA;
// }

// const a = 10;

// console.log(myFunction(a)); // 20
 
// console.log(a); // 10


// // Pass by reference

// const myArray = [1, 2, 3];
// console.log(myArray);

// function myFunction(arr) {
//     console.log(arr === myArray); // true
//     arr.push(4);
//     console.log(arr);
//     return arr;
// }

// myFunction(myArray);
// console.log(myArray);   


// Challenge

function addCustomGlobalMethod(globalObject) {
    globalObject.customMethod = function() {
        console.log('Greeting from the custom method');
    }   
}

addCustomGlobalMethod(this);

this.customMethod(); // 'Greeting from the custom method

customMethod(); // 'Greeting from the custom method
