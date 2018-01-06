console.log('Problem 8')
console.time('problem-8')

const looperPromise = cb => {
  const promise = new Promise( (callThen, callCatch) => {
    console.time('looper')
    if( cb === undefined ) {
      // cb function was not defined so return an error
      callCatch('Callback is undefined')
    }
    else {
      // Return the cb function, but execute cb() in .then()
      callThen(cb)
    }
  })
  return promise
}

// Scenario 1 - looper without arguments - Will throw a promise error
looperPromise()
  .then(data => {
    console.log('PROMISE 1 Data:')
    data()
  })
  .catch(error => {
    console.error(`PROMISE 1 Error: ${error}`)
  })
for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}
console.log('After loop 1!')
console.timeEnd('looper')
console.log("==================")


looperPromise(() => {
  console.log('Finished 8 in the promise')
  console.timeEnd('looper')
})
  .then(data => {
    console.log('PROMISE 2 Data:')
    data()
  })
  .catch(error => {
    console.error(`PROMISE 2 Error: ${error}`)
  })
for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}
console.log('After loop 2!')

console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")