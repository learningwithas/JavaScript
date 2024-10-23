// console.log("promise Introduction");
// let promise = new Promise((resolve, reject) => {
//   console.log("start");
//   //   reject("error");
//   resolve("success");
// });

// console.log(promise);

// let p1 = new Promise((resolve, reject) => {
//   //   console.log("i am p1 and i am going to resolve after 5 seconds");
//   console.log("i am p1 and i am going to Reject after 5 seconds");
//   setTimeout(() => {
//     reject("Error In p1");
//   }, 5000);
// });

let p2 = new Promise((resolve, reject) => {
  //   console.log("i am p2 and i am going to reject afte 5 seconds");
  console.log("i am p2 and i am going to resolve afte 5 seconds");
  setTimeout(() => {
    resolve("success");
  }, 5000);
});

// console.log(p1, p2);

// p1.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// });

p2.then(check).catch(check);

function check(value) {
  console.log(`value is ${value}`);
  if (value === "success") {
    console.log("promise is successful");
    console.log(p2);
    return;
  }
  console.log("pr0mise is rejected ");
  console.log(p2);
}
