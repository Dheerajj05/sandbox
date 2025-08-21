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
// - It maintains a running sum and updates the maximum sum found so far.
// - This has a time complexity of O(n) and a space complexity of O(1

function maxSubArray(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // Update currentSum to either the current element or the sum of currentSum and the current element
        maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is greater
    }

    return maxSum; // Return the maximum subarray sum
}