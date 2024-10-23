console.log("callbacks");
// sychronous action
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let city = prompt("Enter your city");

// console.log(name, age, city);

// Asyncronous action
// console.log("Start");
// setTimeout(() => {
//   let name = prompt("Enter your name");
//   let age = prompt("Enter your age");
//   let city = prompt("Enter your city");
//   console.log(name, age, city);
// }, 2000);

// console.log("End");

function loadScript(src, callbacks) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => {
    callbacks(null, src);
  };

  script.onerror = () => {
    callbacks(new Error("Error"), src);
  };
  document.body.appendChild(script);
}

function callbackToloadScript(error, src) {
  if (error) {
    console.log("script failed to load : " + src);
    return;
  }
  console.log("script loaded Succesfully :  " + src);
}

// loadScript("./index.js", callbackToloadScript);
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  callbackToloadScript
);
