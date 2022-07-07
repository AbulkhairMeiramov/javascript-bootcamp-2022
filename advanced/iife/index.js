// // IIFE
// Option 1
(function (globalObject) {
    globalObject.customMethod = function() {
        console.log('Greeting from the custom method');
    };   
})(this);

// // Option 2
// (function () {
//     this.customMethod = function() {
//         console.log('Greeting from the custom method');
//     };   
// })();

// // Option 3
// (() => {
//     this.customMethod = function() {
//         console.log('Greeting from the custom method');
//     };   
// })();

console.log(this === window);
console.log(typeof window);

this.customMethod(); // 'Greeting from the custom method
window.customMethod(); //  'Greeting from the custom method
customMethod(); // 'Greeting from the custom method
