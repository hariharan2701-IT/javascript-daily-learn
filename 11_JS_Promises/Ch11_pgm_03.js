// Promise constructor

// syntax

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
//   })
/*
// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
*/
// Promise constructor
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];

    // Simulating a condition (here, the array must have some skills)
    if (skills.length > 0) {
      resolve(skills); // If condition is true, resolve the promise with skills array
    } else {
      reject('Something wrong has happened'); // Otherwise, reject the promise with an error message
    }
  }, 2000); // Simulating a delay of 2 seconds
});

// Using the Promise
doPromise
  .then(result => {
    console.log(result); // Logs the resolved value (skills array) if promise is fulfilled
  })
  .catch(error => {
    console.log(error); // Logs the rejected reason (error message) if promise is rejected
  });

// Expected Output after 2 seconds:
// ["HTML", "CSS", "JS"]



