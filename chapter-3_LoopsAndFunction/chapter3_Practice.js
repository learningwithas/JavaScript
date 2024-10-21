// Write a program to print hte marks of a student in an object using for loop. obj = {harry : 98, rohan : 99, shubham : 95}

let obj = { harry: 98, rohan: 99, shubham: 95 };
// let objUpdate = Object.keys(obj);
// for (let i = 0; i < objUpdate.length; i++) {
//   //   console.log(obj[objUpdate[i]]);
//   console.log(obj[objUpdate[i]]);
// }

// console.log(typeof obj);
// console.log(typeof objUpdate);

// console.log(Array.isArray(obj));
// console.log(Array.isArray(objUpdate));

// Q.2 Write ahte program in Q1 using for-in loop

// for (const key in obj) {
//   console.log(key + " : " + obj[key]);
// }

// Write a program to print "try again " until the user enters the correct number.

// let number = 5;

// while (number !== 5) {
//   if (number === 5) {
//     console.log("congrats");
//   } else {
//     console.log("try again");
//   }
//   number = parseInt(prompt("Enter a number: "));
// }

// Q.4 Write a function to find mean of 5 numbers.

function meanOfNumbers(num1, num2, num3, num4, num5) {
  console.log(num1 + num2 + num3 + num4 + num5);
  return (num1 + num2 + num3 + num4 + num5) / 5;
}
console.log(meanOfNumbers(1, 2, 3, 4, 5));
