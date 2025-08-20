// Create a function to flatten a nested array where all nested arrays are at the same level.

function flattenNestedArray(arr) {
 return arr.reduce((acc,val) =>  Array.isArray(val) ? acc.concat(flattenNestedArray(val)): acc.concat(val), [])
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], [6, 7]];
const flattenedArray = flattenNestedArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]
// This function uses recursion to handle any level of nesting in the array.
// The reduce method is used to accumulate the results, checking if each element is an array and flattening it accordingly.
// This approach ensures that all elements are brought to the top level of the array, regardless of how deeply nested they were.
// Time Complexity: O(n), where n is the total number of elements in the nested array.
// Space Complexity: O(n), for the new flattened array that is created.

// Iterative approach using a stack
function flattenArray(arr) {
    // Create a stack to simulate recursion. Start with a shallow copy of the input array.
    const stack = [...arr];

    // This will store the flattened result
    let res = [];

    // Loop until the stack is empty
    while (stack.length) {
        // Pop the last element from the stack
        let val = stack.pop();

        // If the element is an array, push its elements back onto the stack
        // Note: We don't reverse here, so nested arrays are processed in reverse order
        if (Array.isArray(val)) {
            stack.push(...val);
        } else {
            // If it's a non-array value, add it to the result
            res.push(val);
        }
    }

    // The elements were processed in reverse order due to stack behavior (LIFO),
    // so we reverse the result to restore the original left-to-right order
    return res.reverse();
}

// For the purpose of user debugging:
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]
// Time Complexity: O(n), where n is the total number of elements in the nested array.
// Space Complexity: O(n), for the new flattened array that is created.
// This approach uses a stack to handle the elements iteratively, avoiding the potential stack overflow issues
// that can occur with deep recursion in the recursive approach.