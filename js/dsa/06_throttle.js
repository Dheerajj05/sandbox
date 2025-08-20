// Throttling function to limit the rate of execution
// A throttle function ensures that a function is not called more than once in a specified time period
// This is useful for performance optimization in scenarios where events can fire rapidly, such as scrolling or
// resizing, by limiting the number of times a function can be executed.

// Difference from Debounce:
// - Throttle executes the function at regular intervals, while debounce waits until the event stops firing
// - Throttle runs first and then ignores subsequent calls until the wait time has passed whereas debounce waits for the event to stop before executing.


// For example, throttle function make sure that a function is called at least once every specified time period,
// even if the event continues to fire. This is particularly useful for events that can trigger frequently,
// such as scrolling or resizing, where you want to ensure that the function is executed at a controlled rate.

function throttle(func, wait) {
    let isThrottled = false;

    return function(...args) {
        if (isThrottled) return;
        func.apply(this, args); // Call the original function with the provided arguments
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, wait);
    }
}

// Example usage:
const log = () => console.log('Function executed');
const throttledLog = throttle(log, 2000); // Throttle the log function to execute at most once every 2000 milliseconds  
// Simulating rapid calls
setInterval(() => {
    throttledLog(); // This will log 'Function executed' at most once every 2 seconds
}, 500); // Call every 500 milliseconds
// The throttled function will ensure that the log function is not called more than once every 2 seconds, even though it is being called every 500 milliseconds.
