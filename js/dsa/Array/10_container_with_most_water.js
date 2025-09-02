// Problem Statement: Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.
// Example:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Brute Force Approach:
// - Use two nested loops to consider all pairs of lines.
// - Calculate the area for each pair and keep track of the maximum area found.
// - This approach has a time complexity of O(n^2) and is inefficient for large arrays. 

function maxAreaBruteForce(height) {    
    let maxArea = 0; // Initialize maxArea to 0

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const width = j - i; // Calculate the width between the two lines
            const minHeight = Math.min(height[i], height[j]); // Find the minimum height of the two lines
            const area = width * minHeight; // Calculate the area formed by the two lines and the x-axis
            if (area > maxArea) {
                maxArea = area; // Update maxArea if the current area is greater
            }
        }
    }

    return maxArea; // Return the maximum area found
}
// Time Complexity: O(n^2) - The outer loop runs n times and the inner loop runs up to n times in the worst case.
// Space Complexity: O(1) - We are using a constant amount of space for the variables maxArea, width, minHeight, and area, regardless of the size of the input array.

// Optimal Approach: Two Pointer Technique
// - Use two pointers, one at the beginning and one at the end of the array.
// - Calculate the area formed by the lines at the two pointers and update the maximum area if necessary.
// - Move the pointer pointing to the shorter line inward, as this might lead to a larger area.
// - This approach has a time complexity of O(n) and a space complexity of O(1).    


function maxArea(height) {
    let left = 0; // Initialize left pointer
    let right = height.length - 1; // Initialize right pointer
    let maxArea = 0; // Initialize maxArea to 0

    while (left < right) {
        const width = right - left; // Calculate the width between the two lines
        const minHeight = Math.min(height[left], height[right]); // Find the minimum height of the two lines
        const area = width * minHeight; // Calculate the area formed by the two lines and the x-axis
        if (area > maxArea) {
            maxArea = area; // Update maxArea if the current area is greater
        }

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++; // Move left pointer to the right
        } else {
            right--; // Move right pointer to the left
        }
    }

    return maxArea; // Return the maximum area found
}
// Time Complexity: O(n) - We traverse the array once with two pointers.
// Space Complexity: O(1) - We are using a constant amount of space for the variables left, right, maxArea, width, minHeight, and area, regardless of the size of the input array.