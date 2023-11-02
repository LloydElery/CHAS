/* 
Callback Functions
*/

//Funktion #1
function doStep1(init) {
  return init + 1;
}
// Funktion #2
function doStep2(init) {
  return init + 2;
}
// Funktion #3
function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}
doOperation();

myPromise.then(
  function (result) {
    //handle success
  },
  function (error) {
    //handle error
  },
);
