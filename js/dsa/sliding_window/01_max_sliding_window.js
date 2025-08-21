// Problem Statement: Maximum of Sliding Window
// Given an array of integers and a window size k, find the maximum value in each sliding window of size k.
// For example, given the array [1, 3, -1, -3, 5, 3, 6, 7] and k = 3, the output should be [3, 3, 5, 5, 6, 7].

// Brute Force Approach:
// - For each window, iterate through the elements and find the maximum.
// - This approach has a time complexity of O(n * k), where n is the number of elements in the array and k is the window size.      
// - This is inefficient for large arrays or large window sizes.

function maxSlidingWindow(nums, k) {
    const result = [];
    const n = nums.length;

    for(let i = 0; i <= n - k; i++) {
        let max = nums[i]; // Initialize max for the current window
        for(let j = i; j < i + k; j++) {
            if(nums[j] > max) {
                max = nums[j]; // Update max if a larger value is found
            }
        }
        result.push(max); // Add the maximum of the current window to the result
    }
    return result; // Return the array of maximums for each sliding window
}

// Time Complexity: O(n * k) - The outer loop runs n-k+1 times and the inner loop runs k times.
// Space Complexity: O(n) - The result array can store up to n-k+1 maximums, which is O(n) in the worst case.


// Optimized Approach