/*
Copy and past the code you wrote in the previous example. Change all instances of 'looper' to 'timeouter'. Here we are going to run some code in the main function that is asynchronous, and see the difference in behaviour. Instead of the loop followed by the console.log, put this code:
setTimeout(function() {
   console.log('After setTimeout!')
   console.log("..now passing through to the cb..")
   return cb()
}, 6000)
setTimeout is one of the asynchronous aspects of JS, and so the code behaves differently. 
Change every reference to Problem 6 with 7.
Take note of the order that things are logged to the terminal. 
To see this clearly, run both Problem 6 and 7 in the same file and watch as they log to the terminal.

*Some thoughts*
Now contrast that with the functions that we encountered in Problem 6. You can see that while in 6 the entire program stops to wait for the loop, in 7 the program continues on, and other code would have been run before finally logging that it actually fully finished for real, had escaped from the timeout, called the callback, and executed the callback code.
Turn your mind to the Express apps that we built earlier. In many tutorials when we set up our routes we see code like this:
app.get('/', function (req, res) {
   res.send('hello world')
})
or
app.get('/', (req, res) => {
   res.send('hello world')
})
This is a function call, and within it is a callback that we define. We don't know how Express provides what it does, but it does some bulk work including some XHR stuff (the browser's version of Axios or HTTParty), and then hands over control to us to fiddle at the edges. We call their function setting the path, and then Express provides us the request and response objects - much like we provided the multiplication calculation to our callback in Problem 1. Our outer function there was trivial, but the functioning is the much same - except for being synchronous. That is, the outer function does some work and then passes that work to the callback as an argument. We then had an argument in our callback created by this outer function being run (which is synchronous code, unlike Express), and we then acted on this in the callback. In the case of Express they let you set the path when you call their function, they do some asynchronous magic behind the scenes and then they hand over control of the request and response objects to your callback function, which you then customise and deal with (within the Express spec functionality), while also doing any other logic you require.
In this instance (Express) it is important to note that the functionality within the main function (out of sight) is asynchronous - Express waits for input from the user and when it receives this input it runs the relevant function and does what it needs to do, but while this is happening it hands back control to the rest of the code meaning that a user can still use the page while the function is doing its work. When their function completes it produces its req and res, and then after that our callback is run and we deal with the req and res objects as required.
This is a bit like in Problem 6 where the code continues after hitting the asynchronous function, although in that case we didn't pass anything to the callback as an argument.
How this actually works in the browser is a little complex, but this is a brilliant talk that gives you the flavour of this in a digestible form --
https://www.youtube.com/watch?v=8aGhZQkoFbQ
(It's ok if you don't follow this fully - just get the general idea and you'll be ahead of most junior JS coders.)
*/

console.log('Problem 7')
console.time('problem-7')

const timeouter = cb => {
  console.time('timeouter')
  setTimeout(function() {
    console.log('After setTimeout!')
    console.log("..now passing through to the cb..")
    if (cb !== undefined) return cb() // return cb()
  }, 6000)
}

/* Without callback */
timeouter()
console.log('Finished without callback')
console.timeEnd('timeouter')

/* With callback */
timeouter(() => {
  console.log('Finished 7 in the callback')
  console.timeEnd('timeouter')
})

console.log("After timeouter")
console.log("..now heading off to other parts of the program!")
console.log("==================")