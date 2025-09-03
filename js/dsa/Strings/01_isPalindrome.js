// Problem Statement: Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Brute Force Approach:
// - Convert the string to lowercase and remove all non-alphanumeric characters.
// - Reverse the cleaned string and compare it with the original cleaned string.
// - This approach has a time complexity of O(n) and a space complexity of O(n) due to the additional space used for the cleaned string.

var isPalindromeBrute = function(s) {
       function isAlphaNumeric(char) {
        let code = char.toLowerCase().charCodeAt(0);
        return (
            (code >= 97 && code <= 122) || // a-z
            (code >= 48 && code <= 57)    // 0-9
        );
    }
     let cleaned = s
        .toLowerCase()
        .split("")
        .filter(ch => isAlphaNumeric(ch))
        .join("");

        return cleaned === cleaned.split("").reverse().join("");
};

// Optimal Approach:
// - Use two pointers to compare characters from the start and end of the string, moving towards the center.
// - Skip non-alphanumeric characters and convert characters to lowercase for comparison.
// - This approach has a time complexity of O(n) and a space complexity of O(1) since we are using only a constant amount of extra space.

function isPalindrome(s) {
    function isAlphaNumeric(char) {
        let code = char.toLowerCase().charCodeAt(0);
        return (
            (code >= 97 && code <= 122) || // a-z
            (code >= 48 && code <= 57)    // 0-9
        );
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to the next alphanumeric character
         if(!isAlphaNumeric(s[left])) {
            left++;
            continue;
        }
        // Move right pointer to the previous alphanumeric character
        if (!isAlphaNumeric(s[right])) {
            right--;
            continue;
        }

        // Compare characters at left and right pointers
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Not a palindrome
        }

        left++;
        right--;
    }

    return true; // Is a palindrome
}