// Problem Statement: Rotate Array K Times
// Given an array, rotate the array to the right by k steps, where k is nonegative.
// Example 1:
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// Rotate 1 step to the right: [7,1,2,3,4,5,6]
// Rotate 2 steps to the right: [6,7,1,2,3,4,5]
// Rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Intuition:
// - We can achieve the rotation by reversing parts of the array.
// - First, reverse the entire array.
// - Then, reverse the first k elements.
// - Finally, reverse the remaining n-k elements.

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than n

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(0, n - 1);
    // Step 2: Reverse the first k elements
    reverse(0, k - 1);
    // Step 3: Reverse the remaining n-k elements
    reverse(k, n - 1);

    return arr; // Return the rotated array
}