const callbackFunction = (data) => {
  console.log("Data: ", data);
}

let x = setTimeout(function () {
  const work = 1000 * 1000000;
  callbackFunction(work)
}, 3000);

console.log("return value from setTimeout: ", x);
