// /**
//  * 1. Sorting algorithm
//  * 2. Quantity of iterations
//  */
// const myNumbers = [10, 5, 79, 27, 50, 14, 27];

// let i = 0;
// console.log(
//   myNumbers.sort((a, b) => {
//     console.log(a, b);
//     i++;
//     return a - b;
//   })
// );
// console.log('Qty of iterations is ' + i); // ascending order
// // console.log(myNumbers.sort((a, b) => b - a)); // descending order

// // Challenge 1
// const products = [
//     {
//       title: "Phone case",
//       price: 23,
//       quantity: 2,
//       category: "Accessories"
//     },
//     {
//       title: "Android phone",
//       price: 150,
//       quantity: 1,
//       category: "Phones"
//     },
//     {
//       title: "Headphones",
//       price: 78,
//       quantity: 1,
//       category: "Accessories"
//     },
//     {
//       title: "Sport Watch",
//       price: 55,
//       quantity: 2,
//       category: "Watches"
//     }
//   ];
  
// /* Create a function "sortProductsByPrice" with one parameter "products".
// This function "sortProductsByPrice" should sort input array of products by price of each product in ascending order and return resulting array.
// */

// const sortProductsByPrice = products => {
//     products.sort((a, b) => a.price - b.price);
// };


// sortProductsByPrice(products);
// /* Which sorting algorithm is used here in Google Chrome, Firefox, Safari, Node.js? 
// Is this sorting stable or not?
// */

// console.log(products);
// /* Array of products sorted by price in ascending order.
// Why original "products" array was mutated?
// */

// Challenge 2
const persons = [
    {
      name: "Andy",
      friendsQty: 10,
      index: 1
    },
    {
      name: "Mike",
      friendsQty: 5,
      index: 2
    },
    {
      name: "Sophia",
      friendsQty: 10,
      index: 3
    },
    {
      name: "Joshua",
      friendsQty: 3,
      index: 4
    },
    {
      name: "John",
      friendsQty: 10,
      index: 5
    },
    {
      name: "Gabriella",
      friendsQty: 8,
      index: 6
    },
    {
      name: "Tyler",
      friendsQty: 7,
      index: 7
    },
    {
      name: "Dylan",
      friendsQty: 2,
      index: 8
    },
    {
      name: "Sarah",
      friendsQty: 5,
      index: 9
    },
    {
      name: "Alexa",
      friendsQty: 10,
      index: 10
    },
    {
      name: "Henry",
      friendsQty: 10,
      index: 11
    },
    {
      name: "Arianna",
      friendsQty: 10,
      index: 12
    }
  ];
  
/* Create a function "sortPersonsByFriendsQty" with one parameter "persons".
This function "sortPersonsByFriendsQty" should sort input array of persons by friendsQty of each person in ascending order and return resulting array.
*/

const sortPersonsByFriendsQty = persons => {
    persons.sort((a, b) => a.friendsQty - b.friendsQty);
}

sortPersonsByFriendsQty(persons);
/* Which sorting algorithm is used here in Google Chrome, Firefox, Node.js? 
Is this sorting stable or not?
*/

console.log(persons);
/* Array of persons sorted by friendsQty in ascending order 
*/