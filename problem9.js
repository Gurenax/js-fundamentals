console.log('Problem 9')

const timeouterPromise = cb => {
  const promise = new Promise( (callThen, callCatch) => {
    console.time('timeouter1')
    console.time('timeouter2')
    console.time('timeouter3')
    console.time('timeouter4')
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

/* Without callback - Using regular promise */
timeouterPromise()
  .then( data => {
    console.log('PROMISE 1 data:')
    data()
  })
  .catch(error => {
    console.error(`PROMISE 1 Error: ${error}`)
  })
  .then( () => {
    console.timeEnd('timeouter1')
  })
console.log('Finished without callback')


/* With callback - Using regular promise */
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

/* With callback - Using async/await */
const timeouterRequest = async() => {
  try {
    data = await timeouterPromise( () => {
      console.log('Finished 9 in the promise')
      console.timeEnd('timeouter3')
    })
    console.log('PROMISE 3 data:')
    data()
  }
  catch(error) {
    console.error(`PROMISE 3 Error: ${error}`)
  }
}
timeouterRequest()

/* Without callback - Using async/await */
const timeouterRequest2 = async() => {
  try {
    data = await timeouterPromise()
    console.log('PROMISE 4 data:')
    data()
  }
  catch(error) {
    console.error(`PROMISE 4 Error: ${error}`)
  }
  finally {
    console.timeEnd('timeouter4')
  }
}
timeouterRequest2()


// console.log("After timeouter")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")