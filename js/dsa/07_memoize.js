// Problem Statement: Implement a Memoization Function
// A memoization function caches the results of expensive function calls and returns the cached result when the
// same inputs occur again. This is useful for optimizing performance in scenarios where a function is called
// repeatedly with the same arguments, such as in recursive algorithms or computationally intensive calculations.   

// Intuition:
// - Use an object to store the results of previous function calls.
// - Check if the result for the given arguments is already cached.
// - If cached, return the cached result; otherwise, compute the result, cache it,
// and then return the computed result.

function memoize(func) {
    const cache = new Map(); // Create a cache to store results

    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key for the arguments

        if(cache.has(key)){
            return cache.get(key); // Return cached result if it exists
        }

        const result = func.apply(this, args);
        cache.set(key, result); // Cache the computed result
        return result; // Return the computed result
    }
}