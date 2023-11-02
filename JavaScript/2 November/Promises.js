//// EX 1:
const promise = new Promise(function (resolve, reject) {
  const x = 'student'; // Förväntat resultat
  const y = 'teacher'; // Hämtar från backend

  // Om 'x' är strikt samma som 'y'
  // markera 'promise' som 'resolve' och logga 'You are a student'
  // annars markera 'promise' som 'rejected' och logga 'You are not a student'
  if (x === y) {
    resolve('You are a student');
  } else {
    reject('You are not a student');
  }
});

promise
  .then(function (successMessage) {
    console.log('Success: ' + successMessage);
  })
  .catch(function (errorMessage) {
    console.log('Error: ' + errorMessage);
  });

/* 
Async Function 
*/
async function fetchStuff() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 3000); // timeout -demonstrerar att vi hämtar data
  });

  // 'await' berättar att resultatet ska vänta innan det skickas vidare
  let result = await promise; // wait until the promise resolves

  console.log(result); // "done!"
}

fetchStuff();
fetchStuff();
fetchStuff();

//// EX 2:
const promise2 = new Promise(function (resolve, reject) {
  const x = 'student';
  const y = undefined; // pretend API crashed here
  if (y === undefined) {
    throw 'We never got y!';
  }
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise2
  .then(function () {
    console.log('Success, You are a student');
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });
