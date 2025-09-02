// Problem Statement: Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Brute Force Approach:
// - Iterate through all pairs of elements and check if they sum up to the target.
// - This approach has a time complexity of O(n^2) and is inefficient for large arrays.

function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return the indices if the sum matches the target
            }
        }
    }
    return []; // Return an empty array if no solution is found
}
// Time Complexity: O(n^2) - The outer loop runs n times and the inner loop runs up to n times in the worst case.
// Space Complexity: O(1) - We are using a constant amount of space for the variables i and j, regardless of the size of the input array.



// Better Approach:
// - Use a hash map to store the indices of the elements as we iterate through the array.
// - For each element, check if the complement (target - current element) exists in the hash map.
// - This approach has a time complexity of O(n) and a space complexity of O(n).

function twoSum(nums, target) {
    const numToIndex = new Map(); // Create a map to store the number and its index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement

        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i]; // Return the indices if the complement is found
        }

        numToIndex.set(nums[i], i); // Store the current number and its index in the map
    }

    return []; // Return an empty array if no solution is found
}
// Time Complexity: O(n) - We traverse the array once, and each lookup and insertion in the map takes O(1) time on average.
// Space Complexity: O(n) - We use a map to store the elements, which in the worst case can be of size n.


// Optimal Approach: Two Pointer Technique (only works if the array is sorted)
// - First, sort the array while keeping track of the original indices.
// - Use two pointers, one at the start and one at the end of the array, and move them based on the sum compared to the target.
// - This approach has a time complexity of O(n log n) due to sorting and a space complexity of O(1)

function twoSumTwoPointer(nums, target) {
    let left = 0; // Initialize left pointer
    let right = nums.length - 1; // Initialize right pointer

    while (left < right) {
        const sum = nums[left] + nums[right]; // Calculate the sum of the two pointers

        if (sum === target) {
            return [left, right]; // Return the indices if the sum matches the target
        } else if (sum < target) {
            left++; // Move the left pointer to the right to increase the sum
        } else {
            right--; // Move the right pointer to the left to decrease the sum
        }
    }
}