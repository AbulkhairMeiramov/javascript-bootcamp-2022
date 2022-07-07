// // EXAMPLE 1 - Object literal
// const num = {
//   value: 100,
// //   info: () => {
// //     console.log(this); // Window
// //     return this.value;
// //   }
//   info: function() {
//     console.log(this); // num object
//     return this.value;
//   }
// };

// // Example 2 - Function constructor
// function GroceryItem(title, kind) {
//     this.title = title;
//     this.kind = kind;
// }

// // Uncaught TypeError: GroceryItem is not a constructor
// // const GroceryItem = (title, kind) => {
// //     this.title = title;
// //     this.kind = kind;
// // }

// GroceryItem.prototype.info = function() {
//     return this.title + ' is ' + this.kind;
// };

// // // 'this' is Window and function always returns 'undefined is undefined
// // GroceryItem.prototype.info = () => {
// //     console.log(this);
// //     return this.title + ' is ' + this.kind;
// // };

// const apple = new GroceryItem('Apple', 'Fruit');
// console.log(apple);

// const brocolli = new GroceryItem('Brocolli', 'Vegetable');
// console.log(brocolli);

// Challenge
const createButton = title => {
    const btn = document.createElement('button');
    let clicksQty = 0;
    btn.innerHTML = title;
    // btn.onclick = function() {
    //     console.log('Button was clicked');
    //     btn.innerHTML = 'Button was clicked ' + ++clicksQty + ' times';
    // };

    // Regular function expression
    btn.addEventListener('click', function() {
        console.log('Button was clicked');
        // console.log(this); // button
        this.innerHTML = 'Button was clicked ' + ++clicksQty + ' times';
    });

    // // Arrow function expression
    // btn.addEventListener('click', () => {
    //     console.log('Button was clicked');
    //     console.log(this); // Window 
    //     this.innerHTML = 'Button was clicked ' + ++clicksQty + ' times';
    // });
    
    document.body.appendChild(btn);
};

createButton('Click me');
