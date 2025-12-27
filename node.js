//Part 1:
// 1 Convert string to number and add 7
// let str = "123";
// let result = Number(str) + 7;
// console.log(result); //130

// 2 Check if variable is falsy
// function checkFalsy(value) {
//   if (!value) {
//     return "Invalid";
//   }
// }
// console.log(checkFalsy(0)); // Invalid

// 3 Print numbers 1 to 10 skipping even numbers
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }
// 4 Return even numbers using filter
// let numbers = [1, 2, 3, 4, 5];
// let evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // [2, 4]

// 5 Merge two arrays using spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged);

//6 Switch statement for days
// function getDay(day) {
//   switch (day) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//     default:
//       return "Invalid day";
//   }
// }
// console.log(getDay(2)); // Monday

// 7 Return string lengths using map
// let strings = ["a", "ab", "abc"];
// let lengths = strings.map((str) => str.length);
// console.log(lengths); // [1, 2, 3]

// 8 Check divisibility by 3 and 5
// function checkDivisible(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "Divisible by both";
//   }
// }
// console.log(checkDivisible(15));

// 9 Arrow function to return square
// const square = (num) => num * num;
// console.log(square(5)); // 25

// 10 Destructure object and return string
// function personInfo(person) {
//   const { name, age } = person;
//   return `${name} is ${age} years old`;
// }
// console.log(personInfo({ name: "John", age: 25 }));

// 11 Function that returns sum of multiple values
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // 15

// 12 Promise resolves after 3 seconds
// function successPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }

// 13 Find largest number in array
// function largestNumber(arr) {
//   return Math.max(...arr);
// }
// console.log(largestNumber([1, 3, 7, 2, 4])); // 7

//14 Return object keys
// function getKeys(obj) {
//   return Object.keys(obj);
// }
// console.log(getKeys({ name: "John", age: 30 }));

//15 Split string into words
// function splitWords(text) {
//   return text.split(" ");
// }
// console.log(splitWords("The quick brown fox"));
//==============================================================================//
//Part 2:

// 1 Difference between forEach and for...of
// forEach Cant use break or continue
// for...of control in a loop
// for Example:
// for (let num of [1, 2, 3]) {
//   if (num === 2) break;
// }

// 2 Hoisting & Temporal Dead Zone (TDZ)
// Hoisting:
// Hoisting is JavaScript behavior where variable and function declarations are moved to the top of their scope during compilation.
// Temporal Dead Zone (TDZ):
// TDZ occurs when accessing a let or const variable before it is declared, which results in an error.
// Example:

// console.log(a); // undefined
// var a = 10;

// // console.log(b); ❌ Error
// let b = 5;

// 3 == vs ===
// == compares values only and performs type coercion.
// === compares both value and data type (strict comparison).
// Example:

// console.log("5" == 5); // true
// console.log("5" === 5); // false
// 4 try-catch in async operations
// The try-catch block prevents the program from crashing when an error occurs.
// It is especially important in asynchronous operations to handle runtime errors properly.
// Example:

// try {
//   JSON.parse("invalid");
// } catch (error) {
//   console.log("Error occurred");
// }
// 5 Type Conversion vs Type Coercion
// Type Conversion:
// Manual conversion of one data type to another by the developer.
// Type Coercion:
// Automatic conversion performed by JavaScript during operations.
// Example:

// console.log(Number("10")); // Type Conversion
// console.log("10" * 2); // Type Coercion
//=================================================================================//
// Part 3: Bonus (2 Grades)

// var createCounter = function (init) {
//   let count = init;

//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     reset: () => (count = init),
//   };
// };
