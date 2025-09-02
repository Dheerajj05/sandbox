// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// This is known as Kadane's Algorithm, which efficiently finds the maximum subarray sum in linear time.

// Example:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum, which is 6.

// Brute Force Approach:
// - Iterate through all possible subarrays and calculate their sums.
// - This approach has a time complexity of O(n^2), where n is the number of elements in the array.
// - This is inefficient for large arrays.  

function maxSubArrayBruteForce(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0; // Reset currentSum for each starting index
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j]; // Add the current element to currentSum
            maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is greater
        }
    }

    return maxSum; // Return the maximum subarray sum
}

// Time Complexity: O(n^2) - The outer loop runs n times and the inner loop runs up to n times in the worst case.
// Space Complexity: O(1) - We are using a constant amount of space for the variables maxSum and currentSum, regardless of the size of the input array.

// Optimized Approach using Kadane's Algorithm
// - This approach uses a single pass through the array to find the maximum subarray sum.
// - It maintains a running sum and resets it to zero if it becomes negative.
// - This has a time complexity of O(n) and a space complexity of O(1).


function maxSubArray(nums) {
    let maxSum = -Infinity; // Initialize maxSum to the smallest possible value
    let currentSum = 0; // Initialize currentSum to 0

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]; // Add the current element to currentSum
        if (currentSum > maxSum) {
            maxSum = currentSum; // Update maxSum if currentSum is greater
        }
        if (currentSum < 0) {
            currentSum = 0; // Reset currentSum to 0 if it becomes negative
        }
    }

    return maxSum; // Return the maximum subarray sum
}

// ------------------------------return indices of the subarray-------------------------------------
// If you also need to return the starting and ending indices of the subarray with the largest sum,
// you can modify the Kadane's Algorithm implementation as follows:

function maxSubArrayWithIndices(nums) {
    let maxSum = -Infinity; // Initialize maxSum to the smallest possible value
    let currentSum = 0; // Initialize currentSum to 0
    let start = 0; // Start index of the current subarray
    let end = 0; // End index of the maximum subarray
    let tempStart = 0; // Temporary start index for the current subarray

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]; // Add the current element to currentSum

        if (currentSum > maxSum) {
            maxSum = currentSum; // Update maxSum if currentSum is greater
            start = tempStart; // Update start index to the temporary start
            end = i; // Update end index to the current index
        }

        if (currentSum < 0) {
            currentSum = 0; // Reset currentSum to 0 if it becomes negative
            tempStart = i + 1; // Move the temporary start to the next index
        }
    }

    return { maxSum, start, end }; // Return the maximum subarray sum and its indices
}