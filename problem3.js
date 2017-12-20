/* *Problem 3*
Implement your own version of .map
Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function. */

Array.prototype.map = function(fn) {
  // Check if array is present
  if (this === null) {
    console.log('Array not defined')
    return
  }
  // Validate the callback function
  if (typeof fn !== 'function') {
    console.log('Argument should be a function')
    return
  }
  // Create a copy of the array
  copy = [...this]
  // Loop through the array
  for (let i = 0; i < copy.length; i++) {
    // Perform the callback on every value and index of the array
    value = fn(copy[i], i)
    // Copy the return value of the callback into the copy array
    copy[i] = value
  }
  return copy
}

// Test valid
const arr = [1, 2, 3]
const result = arr.map((val, index) => {
  console.log(`Original value at index ${index} is`, val)
  return val * 5
})
console.log('New array', result)

// Test empty array
const test = []
result2 = test.map(val => {
  return val * 2
})
console.log('Empty array', result2)
