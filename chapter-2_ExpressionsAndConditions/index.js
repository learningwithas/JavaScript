// console.log("Hello World");
// Q.1 use logical operators to find whether the age of a person lies between 10 and 20?

// const age = 10;
// if (age >= 10 && age <= 20) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Q.2 Demonstrate the use of switch case statement in JavaScript.
// let age = 4;
// switch (age) {
//   case 10:
//     console.log("Yes");
//     break;
//   case 20:
//     console.log("Yes");
//     break;
//   default:
//     console.log("No");
// }

// Q.3 Write a JavaScript Program to find whether a number is divisible by 2 and 3 ?

// let number = 8;

// if (number % 2 === 0 && number % 3 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Q.4 Write a javaScript program to find whether a number is Divisible by either 2 or 3?

// let number = 7;
// if (number % 2 === 0 || number % 3 === 0) {
//   if (number % 2 === 0 && number % 3 === 0) {
//     console.log("number is divisible by both 2 and 3");
//   } else if (number % 2 === 0) {
//     console.log("number is divisible by 2");
//   } else {
//     console.log("number is divisible by 3");
//   }
// } else {
//   console.log("number is not divisible by 2 or 3");
// }

// Q.5 Print "you can drive" or "you can not drive" base on age being greater than 18 using ternary operator.

let age = 19;

let ternaryCondition = age > 18 ? "you can drive" : "you can not drive";

console.log(ternaryCondition);
