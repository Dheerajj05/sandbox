// Reverse a String
// Given a string, return the string in reverse order.
// Example:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString (s) {
    let left=0;
    let right = s.length-1;

    while(left<right){
        [s[left],s[right]]=[s[right], s[left]];
        left++;
        right--
    }
    return s;
    
};

// Time Complexity: O(n) where n is the length of the string.
// Space Complexity: O(1) as we are reversing the string in place without using any extra space.