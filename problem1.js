/* *Problem 1*
Write a function called arrayMultiply that takes two numbers, an array, and (callback) function as arguments. Return the callback function with the two numbers (the arguments) multiplied together as its argument.
Define a variable and in it store the result of arrayMultiply when called with 2, 2, [1,2,3], and then an anonymous function that takes the result as an argument, and then multiplies each element in the array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ]. */

const arrayMultiply = (num1, num2, arr, multiply) =>
  arr.map(val => val * multiply(num1, num2))

const result = arrayMultiply(2, 2, [1, 2, 3], (n1, n2) => n1 * n2)

console.log(result)
