/*
*Problem 6 (synchronicity)*
This will show the way JS functions when acting synchronously.
Here we are doing something a bit different, and I just want you to follow these instructions like a recipe. If you need help I can give you a hand or First put these two lines of code up at the top of your file:
console.log("Problem 6")
console.time('problem-6')
I want you to now make a function called looper. This takes one argument, a callback function. In the body of the function first start a timer with this code:
console.time('looper')
I want you to insert a for loop that iterates 1000000000 times. Do nothing within that loop (or something if you like). immediately after the loop log out "After loop!" End the 'looper' timer. Then return your callback with no arguments.
Now run looper with only the callback as an argument (and as mentioned this takes no arguments itself). Within the callback end the console.time, and then return console.log("Finished 6 in the callback") (which will return undefined, but it's not relevant for this). 
Loops in JS are synchronous, so the functioning of the program stops while the loop is running (Clayton's beast may not notice this, whereas Nate's computer will give him time to grab a coffee). The code in the callback is run after the outer function's code is completed. 
Now write this code after your looper function is called 
console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")
Take note of the timing and order that things are logged.
*/

console.log('Problem 6')
console.time('problem-6')

const looper = cb => {
  console.time('looper')
  if (cb !== undefined) cb()
}

// Scenario 1 - looper without arguments
looper()
for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}
console.log('After loop!')
console.timeEnd('looper')
console.log("==================")
// Scenario 2 - looper with callback to console.timeEnd
looper(() => {
  console.log('Finished 6 in the callback')
  console.timeEnd('looper')
})
for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}
console.log('After loop!')

console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")