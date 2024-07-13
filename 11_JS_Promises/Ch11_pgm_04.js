// The Ch11_pgm_03 promise has been settled with resolve. Let us another example when the promise is settled with reject.
/*
// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
*/

// Expected Output after 2 seconds:
// Something wrong has happened



//answers
// Promise example with rejection
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    if (skills.includes('Node')) {
      resolve('fullstack developer'); // Resolve if 'Node' skill is present
    } else {
      reject('Something wrong has happened'); // Reject if 'Node' skill is not present
    }
  }, 2000); // Simulating a delay of 2 seconds
});

doPromise
  .then(result => {
    console.log(result); // This will not execute in this scenario
  })
  .catch(error => {
    console.error(error); // Logs the error message since the promise is rejected
});



 