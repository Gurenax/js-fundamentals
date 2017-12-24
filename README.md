## Problem 1
Write a function called arrayMultiply that takes two numbers, an array, and (callback) function as arguments. Return the callback function with the two numbers (the arguments) multiplied together as its argument.
Define a variable and in it store the result of arrayMultiply when called with 2, 2, [1,2,3], and then an anonymous function that takes the result as an argument, and then multiplies each element in the array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].

## Problem 2
Write a function called arrayMultiplyAgain that takes a number and an array as arguments, and returns each element in the array multiplied by the number. 
Now write a second function called moreArrayMultiply that takes three arguments: a number, an array, and a function: (eg. num, arr, funct). Have this function return the result of number and array when called as arguments to arrayMultiplyAgain which you passed in as an argument.
Define a variable and in it store the result of the second function when called with 2, [1,2,3], and the first function you created. When you console.log this variable to screen it should produce [ 2, 4, 6 ].

## Problem 3
Implement your own version of .map
Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

## Problem 4
Implement your own version of .filter
Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

## Problem 5 (tricky)
Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"
Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.
Now call this function with a number and the object that you created as arguments, and store the result in a constant called bitcoinDecision. Now work out how to get the string to display to the screen.

## Problem 6 (synchronicity)
This will show the way JS functions when acting synchronously. Here we are doing something a bit different, and I just want you to follow these instructions like a recipe. If you need help I can give you a hand or First put these two lines of code up at the top of your file:   
```javascript
console.log("Problem 6")    
console.time('problem-6')   
```
I want you to now make a function called `looper`. This takes one argument, a callback function. In the body of the function first start a timer with this code:
```javascript
console.time('looper')
```
I want you to insert a for loop that iterates 1000000000 times. Do nothing within that loop (or something if you like). immediately after the loop log out `"After loop!"` End the `looper` timer. Then return your callback with no arguments.
Now run looper with only the callback as an argument (and as mentioned this takes no arguments itself). Within the callback end the console.time, and then return
```javascript
console.log("Finished 6 in the callback") // (which will return undefined, but it's not relevant for this). 
```
Loops in JS are synchronous, so the functioning of the program stops while the loop is running (Clayton's beast may not notice this, whereas Nate's computer will give him time to grab a coffee). The code in the callback is run after the outer function's code is completed. 
Now write this code after your looper function is called 
```javascript
console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")
```
Take note of the timing and order that things are logged.

## Problem 7
Copy and past the code you wrote in the previous example. Change all instances of `looper` to `timeouter`. Here we are going to run some code in the main function that is asynchronous, and see the difference in behaviour. Instead of the loop followed by the console.log, put this code:
```javascript
setTimeout(function() {
  console.log('After setTimeout!')
  console.log("..now passing through to the cb..")
  return cb()
}, 6000)
```
`setTimeout` is one of the asynchronous aspects of JS, and so the code behaves differently. 
Change every reference to Problem 6 with 7.
Take note of the order that things are logged to the terminal. 
To see this clearly, run both Problem 6 and 7 in the same file and watch as they log to the terminal.

* Note: If you can't get either of problems 5 or 6 running, I'm happy to hand over the code so that you can have a look at what I'm trying to do.


* Some thoughts
Now contrast that with the functions that we encountered in Problem 6. You can see that while in 6 the entire program stops to wait for the loop, in 7 the program continues on, and other code would have been run before finally logging that it actually fully finished for real, had escaped from the timeout, called the callback, and executed the callback code.
Turn your mind to the Express apps that we built earlier. In many tutorials when we set up our routes we see code like this:
```javascript
app.get('/', function (req, res) {
  res.send('hello world')
})
or
app.get('/', (req, res) => {
  res.send('hello world')
})
```
This is a function call, and within it is a callback that we define. We don't know how Express provides what it does, but it does some bulk work including some XHR stuff (the browser's version of Axios or HTTParty), and then hands over control to us to fiddle at the edges. We call their function setting the path, and then Express provides us the request and response objects - much like we provided the multiplication calculation to our callback in Problem 1. Our outer function there was trivial, but the functioning is the much same - except for being synchronous. That is, the outer function does some work and then passes that work to the callback as an argument. We then had an argument in our callback created by this outer function being run (which is synchronous code, unlike Express), and we then acted on this in the callback. In the case of Express they let you set the path when you call their function, they do some asynchronous magic behind the scenes and then they hand over control of the request and response objects to your callback function, which you then customise and deal with (within the Express spec functionality), while also doing any other logic you require.    
In this instance (Express) it is important to note that the functionality within the main function (out of sight) is asynchronous - Express waits for input from the user and when it receives this input it runs the relevant function and does what it needs to do, but while this is happening it hands back control to the rest of the code meaning that a user can still use the page while the function is doing its work. When their function completes it produces its req and res, and then after that our callback is run and we deal with the req and res objects as required.   
This is a bit like in Problem 6 where the code continues after hitting the asynchronous function, although in that case we didn't pass anything to the callback as an argument.
How this actually works in the browser is a little complex, but this is a brilliant talk that gives you the flavour of this in a digestible form --
https://www.youtube.com/watch?v=8aGhZQkoFbQ   
(It's ok if you don't follow this fully - just get the general idea and you'll be ahead of most junior JS coders.)