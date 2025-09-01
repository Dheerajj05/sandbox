// Problem Statement: Second Largest Element in an Array
// Given an array of integers, find the second largest element in the array.
// Example:
// Input: [3, 5, 2, 9, 6]
// Output: 6
// Explanation: The largest element is 9 and the second largest is 6.   

function secondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let first = -Infinity; // Initialize the largest element
    let second = -Infinity; // Initialize the second largest element

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first; // Update second largest
            first = arr[i]; // Update largest
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i]; // Update second largest if current element is different from largest
        }
    }

    return second === -Infinity ? null : second; // Return null if there is no second largest element
}