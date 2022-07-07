// // Example 1
// const multiplier = (num, mult = 2) => {
//     console.log(num, mult);
//     return num * mult;
// }

// console.log(multiplier(10, 3)); // num -> 10, mult -> 3
// console.log(multiplier(5)); // mult will get default value 2
// console.log(multiplier()); // num will be initialized with undefined

// // Example 2
// const groceryItem = (
//   title,
//   quantity,
//   item = {
//     groceryItemTitle: title,
//     groceryItemQuantity: quantity,
//   }
// ) => {
//   console.log(title, quantity, item);
// };

// groceryItem("Banana", 5);

// // Example 3
// const warning = (title) => {
//     console.log(
//         title !== undefined 
//         ? `Title of the button is ${title}. But color is not set`
//         : `Title and color are not set`
//     )
//     throw new Error('btn function must be called with two arguments - title and color');
// }

// const btn = (title = warning(), color = warning(title)) => {
//     console.log(title);
//     // Create new button with title and background color. And insert this button into the DOM

// };

// btn('Button1', 'grey');
// btn('Button2'); 
// // Title of the button is Button2. But color is not set
// // Uncaught Error: btn function must be called with two arguments - title and color

// Challenge 1

/* Create a function "weatherForecast" with two parameters "city" and "weather". 
If second argument is absent, "weather" parameter should get value "Great weather!".
1. First solve this WITHOUT default function parameter.
2. Comment previous solution and solve same task WITH default function parameter.
NOTE: Carefully compare your results with test calls results
*/

// Option 1 First solve this WITHOUT default function parameter.
// const weatherForecast = (city, weather) => {
//     if(weather === undefined) {
//         weather = 'Great weather!';
//         return 'Weather forecast for ' + city + ':' + ' ' + weather;
//     }
//     else {
//         return 'Weather forecast for ' + city + ':' + ' ' + weather;
//     }
// }

// Option 2 Comment previous solution and solve same task WITH default function parameter.
// const weatherForecast = (city, weather = 'Great weather') => {
//     if(weather === undefined) {
//         return 'Weather forecast for ' + city + ':' + ' ' + weather;
//     }
//     else {
//         return 'Weather forecast for ' + city + ':' + ' ' + weather;
//     }
// }


// console.log(weatherForecast("Dubai", "Sunny"));
// // Weather forecast for Dubai: Sunny

// console.log(weatherForecast("London", "Light rain"));
// // Weather forecast for London: Light rain

// console.log(weatherForecast("Paris"));
// // Weather forecast for Paris: Great weather!

// console.log(weatherForecast("Miami", ""));
// // Weather forecast for Miami:

// console.log(weatherForecast("Las Vegas", undefined));
// // Weather forecast for Las Vegas: Great weather!


// Challenge 2

/*
Create a function "tasksSortedByIds" with two parameters "tasks" and "tasksWithIds".
1. Before performing any actions inside of the function you need to generate unique 4-digit "taskId" for each task where it is missing.

'generateTaskIds' > tasksWithIds = generateTaskIds(tasks) > .map > copy task {...task} > generate taskId 
if needed > tasksWithIds - array of tasks with taskIds

2. At the beginning of the function log to the console quantity of the missing taskIds:
"Quantity of the missing taskIds is 2"

.filter > hasOwnProperty('taskId') > .length 

3. Function should return array of tasks sorted by "taskId". All tasks in the sorted array must have "taskId".

sort tasksWithIds .sort((a, b) => a.taskId - b.taskId)

NOTE: Original "tasks" array should remain unchanged.
NOTE: Hints down below!
BONUS: Ensure that new unique 4-digit "taskId" is not the same as any "taskId" of the existing tasks.

do-while loop

*/

const generateTasksIds = tasks => {
    let newTaskIds = [];
    return tasks.map(({...task}) => {
        if(!task.hasOwnProperty('taskId')){
            let newTaskId;
            do{
                newTaskId = 1000 + Math.floor(Math.random() * 9000);
            }
            while(tasks.find(task => task.taskId === newTaskId || newTaskIds.includes(newTaskId)));
            newTaskIds.push(newTaskId);
            task.taskId = newTaskId;
        }
        return task;
    });
};

const tasksSortedByIds = (tasks, taskWithIds = generateTasksIds(tasks)) => {
    console.log(`Quantity of the missing taskIds is ${tasks.filter(task => !task.hasOwnProperty('taskId')).length}`);
    return taskWithIds.sort((a, b) => a.taskId - b.taskId);
};

const tasks = [
    { title: "Meeting with John", taskId: 4621 },
    { title: "Visit gym", taskId: 6821 },
    { title: "Buy new phone" },
    { title: "Clean the room", taskId: 2721 },
    { title: "Plan a trip" }
];

  
console.log(
"Sorted array of tasks with taskIds:",
tasksSortedByIds(tasks)
);
/* 
Quantity of the missing taskIds is 2
Sorted array of tasks with taskIds: ...
*/

console.log(
"Original unsorted array of tasks with missing taskIds:",
tasks
);
/*
Original unsorted array of tasks with missing taskIds: ...
*/

/* HINTS
1. Use default value for the second parameter "tasksWithIds". This default value should be a function call - "generateTasksIds()".
2. "generateTasksIds" function should have one parameter "tasks".
3. Use .map inside of the "generateTasksIds" to create new array of tasks and return this new array as result of the "generateTasksIds" function call. 
4. Inside of the callback function for .map call create first copy of the object ("task") to avoid mutation of the "tasks" array.
5. Generate new "taskId" using following syntax
Math.floor(1000 + Math.random() * 9000)
6. BONUS (Ensure that newly generated "taskId" doesn't match "taskId" of any of the existing tasks.
Use "do-while" loop and generate new "taskId" until it will be absent in other tasks. 
*/