// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Approach using Stack:    
// - Use a stack to store the words as we encounter them in the string.
// - After processing the entire string, pop the words from the stack to get them in reverse order.
// - This approach has a time complexity of O(n) and a space complexity of O(n), where n is the length of the input string.

function reverseWords(s) {
    const splitS = s.trim().split(" "); // Split the string by spaces and trim leading/trailing spaces
    const stack = []; // Initialize an empty stack to hold words
    let result = ""; // Initialize an empty string to build the result

    for(let i of splitS){
       if(i!== "") stack.push(i); // Push each word onto the stack
    }

    while(stack.length) {
        const word = stack.pop();
        result += word + " "; // Pop words from the stack and add to result with a space
    }
    return result.trim(); // Trim any trailing space and return the result
}