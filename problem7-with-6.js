console.log('Problem 6')
console.time('problem-6')

const looper = cb => {
  console.time('looper')
  if (cb !== undefined) cb()
}
const timeouter = cb => {
  console.time('timeouter')
  setTimeout(function() {
    console.log('After setTimeout!')
    console.log("..now passing through to the cb..")
    if (cb !== undefined) return cb() // return cb()
  }, 6000)
}

/* Problem 6 without callback */
looper()
for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}
console.log('After loop!')
console.timeEnd('looper')

/* Problem 7 without callback */
timeouter()
console.log('Finished without callback')
console.timeEnd('timeouter')
console.log("==================")

/* Problem 6 with callback */
looper(() => {
  console.log('Finished 6 in the callback')
  console.timeEnd('looper')
})
for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}
console.log('After loop!')
console.log("After looper")
console.timeEnd('problem-6')
console.log("==================")



console.log('Problem 7')
console.time('problem-7')

/* Problem 7 with callback */
timeouter(() => {
  console.log('Finished 7 in the callback')
  console.timeEnd('timeouter')
})

console.log("After timeouter")
console.timeEnd('problem-7')
console.log("==================")
