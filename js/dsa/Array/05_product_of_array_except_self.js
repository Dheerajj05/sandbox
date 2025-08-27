// Problem Statement: Product of Array Except Self
// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Example:
// Input: [1,2,3,4]
// Output: [24,12,8,6]

// Brute Force Approach:
// - For each element in the array, calculate the product of all other elements.
// - This approach has a time complexity of O(n^2) and is inefficient for large arrays. 

function productExceptSelfBruteForce(nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j]; // Multiply all elements except nums[i]
            }
        }
        output.push(product); // Store the product in the output array
    }
    return output; // Return the output array
}

// Optimal Approach:
// - Use prefix and suffix arrays to store the product of all elements to the left and right of each index.
// - This approach has a time complexity of O(n) and a space complexity of O(n).    

function productExceptSelf(nums) {
    const n = nums.length;
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const output = new Array(n);

    // Calculate left products
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // Calculate right products
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    // Calculate output by multiplying left and right products
    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }

    return output; // Return the output array
}