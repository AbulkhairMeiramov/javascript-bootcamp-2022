// const myArray = [10, [], {}, 'abc', true, 15];

// const result = myArray.find(element => {
//     console.log(element);
//     return typeof element === 'string';
// });

// console.log(result);


const posts = [
    { postId: 1355, commentsQuantity: 5 },
    { postId: 5131, commentsQuantity: 13 },
    { postId: 6134, commentsQuantity: 2 }
  ];
  
  /* Create a function "findSinglePost" that will have two parameters - "postId" and "posts" and will return object with matched "postId".
  If post wasn't found - return "undefined"
  */

  const findSinglePost = (postId, posts) => posts.find(element => element.postId === postId);

  
  console.log(findSinglePost(6134, posts)); // { postId: 6134, commentsQuantity: 2 }
  
  console.log(findSinglePost(4511, posts)); // undefined