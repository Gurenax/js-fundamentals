/* *Problem 4*
Implement your own version of .filter
Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function. */

Array.prototype.filter = function(fn) {
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
  // Create a new array for the filtered results
  filteredArray = []
  // Loop through the array
  for (let i = 0; i < copy.length; i++) {
    // Push values which results true from callback function
    if (fn(copy[i])) filteredArray.push(copy[i])
  }
  return filteredArray
}

// Test valid
const arr = [1, 2, 3]
const result = arr.filter(val => {
  return val % 2 === 0
})
console.log('Filtered numbers', result)

// Test strings
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'happy'
]
const longWords = words.filter(word => word.length > 6)
console.log('Filtered words',longWords)

// Test empty array
const test = []
result2 = test.filter(val => {
  return val === 2
})
console.log('Empty array', result2)
