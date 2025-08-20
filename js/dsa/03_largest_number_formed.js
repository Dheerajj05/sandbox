// Write a function that takes an array of non-negative integers and arranges them such that they form the largest possible number when concatenated together. The function should return the largest number as a string.

// Intuition:
// To form the largest number, we need to sort the numbers based on their concatenated values.
// For example, given the numbers 3 and 30, we should compare "330" and "303".
// Since "330" is greater, we should place 3 before 30 in the final arrangement.
// We can achieve this by implementing a custom sorting function that compares two numbers based on their concatenated results.

function largestNumber(arr) {
    // Convert all numbers to strings for concatenation comparison
    const strArr = arr.map(num => num.toString());

    // Custom sort function to compare concatenated results
    strArr.sort((a, b) => (b + a).localeCompare(a + b));

    // If the largest number is '0', return '0'
    if (strArr[0] === '0') return '0';

    // Join the sorted array into a single string
    return strArr.join('');
}

// Time Complexity: O(n log n) - The sorting operation dominates the time complexity, where n is the number of elements in the array.
// Space Complexity: O(n) - We create a new array of strings, which requires additional space proportional to the number of elements in the input array.