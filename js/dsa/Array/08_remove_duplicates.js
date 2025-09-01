// Problem Statement: Remove Duplicates from an Array
// Given an array of integers, remove the duplicates in-place such that each element appears only once and return the new length.
// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
// Example:
// Input: [1,1,2]
// Output: 2, with the first two elements of the array being 1 and 2 respectively.  

// Brute Force Approach:
// use a set to track seen elements and overwrite the array in-place.
// This approach has a time complexity of O(n) and a space complexity of O(n).  

function removeDuplicatesBruteForce(nums) {
    const set = new Set(nums); // Create a set from the array to remove duplicates
    const result = Array.from(set); // Convert the set back to an array
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i]; // Overwrite the original array with unique elements
    }
    return result.length; // Return the new length of the array
}

// Time Complexity: O(n) - We traverse the array once to create the set and once to overwrite the original array.
// Space Complexity: O(n) - We use a set to store unique elements, which in the worst case can be of size n.


// Optimal Approach:
// - Use two pointers to track the position of unique elements and overwrite duplicates in-place.
// - This approach has a time complexity of O(n) and a space complexity of O(1).    

function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, return 0
    }

    let uniqueIndex = 1; // Pointer for the position of the next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // If the current element is different from the previous one
            nums[uniqueIndex] = nums[i]; // Place it at the uniqueIndex position
            uniqueIndex++; // Move the uniqueIndex pointer forward
        }
    }

    return uniqueIndex; // Return the number of unique elements
}