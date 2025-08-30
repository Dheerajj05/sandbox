// Problem Statement: Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Intuition:
// - Use a stack to keep track of opening brackets.
// - When encountering a closing bracket, check if it matches the top of the stack.
// - If it matches, pop the stack; if not, the string is invalid.
// - At the end, if the stack is empty, the string is valid; otherwise, it's invalid.

function isValid(s) {
  const stack = []; // Initialize an empty stack to hold opening brackets

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char); // Push opening brackets onto the stack
    } else {
      const top = stack.pop(); // Pop the top element from the stack

      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false; // Return false if the closing bracket doesn't match the top of the stack
      }
    }
  }
  return stack.length === 0; // Return true if the stack is empty (all brackets matched), false otherwise
}
