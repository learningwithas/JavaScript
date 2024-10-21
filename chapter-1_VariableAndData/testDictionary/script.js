// Q.1 Create a varibale of type string and try to add a number to it.
// let name = "John" + 20;
// console.log(name);
// console.log(typeof name);

// Q.3 create a const object in javscript can you chnage it to hold a number later?
const person = {
  name: "John",
  age: 20,
  address: "123 Main St",
  city: "New York",
  state: "NY",
  zip: 10001,
};

// person = 23;// not allowed

person.age = 21;
// console.log(person);

// try to add a new key to the const object in problem 3 were you able to do it?

person.country = "USA"; // yes, it's allowed
// console.log(person);

// write a  js program to create a word- meaning dictionay of 5 words
const searchWord = document.getElementById("word");
const searchBtn = document.getElementById("search");
const result = document.getElementById("result");

const dictionay = {
  Hello: "Greeting",
  Bye: "Goodbye",
  Hi: "Greeting",
  Good: "Positive",
  Bad: "Negative",
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("btn clicked");
  console.log(searchWord.value);
  for (const word in dictionay) {
    if (word === searchWord.value) {
      result.innerHTML = dictionay[word];
    }
  }
});
