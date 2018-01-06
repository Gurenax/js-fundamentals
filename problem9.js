console.log('Problem 9')

const timeouterPromise = cb => {
  const promise = new Promise( (callThen, callCatch) => {
    console.time('timeouter1')
    console.time('timeouter2')
    console.time('timeouter3')
    if( cb === undefined ) {
      // cb function was not defined so return an error
      callCatch('Callback is undefined')
    }
    else {
      // Return the cb function after 6 seconds, but execute cb() in .then()
      setTimeout(function() {
        console.log('After setTimeout!')
        console.log("..now passing through to the cb..")
        // return cb
        callThen(cb)
      }, 6000)
    }
  })
  return promise
}

/* Without callback */
timeouterPromise()
  .then( data => {
    console.log('PROMISE 1 data:')
    data()
  })
  .catch(error => {
    console.error(`PROMISE 1 Error: ${error}`)
  })
console.log('Finished without callback')
console.timeEnd('timeouter1')

/* With callback */
timeouterPromise(() => {
  console.log('Finished 9 in the promise')
  console.timeEnd('timeouter2')
})
  .then( data => {
    console.log('PROMISE 2 data:')
    data()
  })
  .catch(error => {
    console.error(`PROMISE 2 Error: ${error}`)
  })

/* Using async/await */
const timeouterRequest = async() => {
  data = await timeouterPromise( () => {
    console.log('Finished 9 in the promise')
    console.timeEnd('timeouter3')
  })
  console.log('PROMISE 3 data:')
  data()
}
timeouterRequest()

// console.log("After timeouter")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")