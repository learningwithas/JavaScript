// what will the following pritnt in JavaScript ?
// console.log('har"'.length);

// Explore the includes, startsWith & endWith function of a string.

// includes :-The includes() method returns true if a string contains a specified string. Otherwise it returns false. The includes() method is case sensitive.
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world"); //true
// let result = text.includes("world", 12); //false becuase "world" starting index is not 12
// console.log(result);

// startsWith
// let text = "Hello world, welcome to the universe.";
// let reult = text.startsWith("Hello");
// let reult = text.startsWith("world", "Hello".length + 1); //true starting index is 6
// let reultEnd = text.endsWith("universe.");
// console.log(reult);
// console.log(reultEnd);

// endsWith :- The endsWith() method returns true if a string ends with a specified string. Otherwise it returns false. The endsWith() method is case sensitive.
// let text = "Hello world, welcome to the universe.";
// let result = text.endsWith("universe.");
// let result = text.endsWith("Hello", 5); //true , because it will searvh till lenth 5
// console.log(result);

// Write a program to convert a given string to lowecase.
// let text = "Hello world, welcome to the universe.";
// let result = text.toLocaleLowerCase();
// console.log(result);

// Extract the amount out of this String.
// let text = "Please give me Rs 10000";
// let amount = text.slice(text.length - 5);
// let amount = text.match(/\d+/g);
// console.log(amount);

// try to change 4th character of a given string were you able to do it?
let text = "Hello world, welcome to the universe.";
text[4] = "x";
console.log(text[4].charAt());
console.log(text);
