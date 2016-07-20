// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input

var n = 10;

// Example Output

// console.log((number-1) + (number-2));


// 1,1,2,3,5,8,13,21,34,55,
var phi = 1.61803398875;
var answer = ( Math.pow(phi, n) - Math.pow((0 - phi), (0-n)) )  /  Math.sqrt(5)

console.log(Math.floor(answer));





