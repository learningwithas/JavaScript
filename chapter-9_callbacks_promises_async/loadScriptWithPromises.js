function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve("success");
    };

    script.onerror = () => {
      reject("rejected");
    };
    document.body.appendChild(script);
  });
}

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
);

p1.then(check).catch(check);

function check(value) {
  if (value === "success") {
    console.log(`promise is ${value}`);
    console.log(p1);
    return;
  }
  console.log(`promise is ${value}`);
  console.log(p1);
}
