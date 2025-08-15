// Problem Statement: Implement a Debounce Function
// A debounce function limits the rate at which a function can fire.
// It ensures that a function is not called too frequently, especially in response to events like scrolling
// or resizing, by delaying its execution until after a specified wait time has passed since the last call. 

// This is useful for performance optimization in scenarios where events can fire rapidly.

// Intuition:
// - Use a timer to delay the execution of the function.
// - If the function is called again before the timer expires, reset the timer. 

// If the function is called when the timer is active, it will not execute until the timer completes.
// - This ensures that the function is only executed once after the last call, effectively "debouncing" the calls.

// Debounce function takes two parameters:
// 1. func: The function to debounce.
// 2. wait: The number of milliseconds to wait before executing the function.
// Returns a new function that, when invoked, will debounce the execution of the original function.

function debounce(func, wait) {
    let timeout;

    return function(...args) {
        // Clear the previous timer if it exists
        clearTimeout(timeout);
        
        // Set a new timer to execute the function after the specified wait time
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}