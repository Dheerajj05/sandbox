// Problem Statement: Fibonacci Sequence
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
// The sequence typically starts as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The function should return the nth Fibonacci number. 

function fibonacci(n) {
    let arr = [0, 1]; // Initialize the first two Fibonacci numbers
    if (n < 0) return "Input should be a non-negative integer"; // Handle negative input
    if (n === 0) return arr[0]; // Return 0 for the 0th Fibonacci number
    if (n === 1) return arr[1]; // Return 1 for the 1st Fibonacci number
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]; // Calculate the next Fibonacci number
    }
    return arr[n]; // Return the nth Fibonacci number
}