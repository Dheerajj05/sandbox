// Palindromic Number Check
// A palindromic number is a number that remains the same when its digits are reversed.
// For example, 121 and 12321 are palindromic numbers, while 123 and 1234 are not.
// The function should return true if the number is a palindrome, and false otherwise.

function isPalindromicNumber(num) {
    if(num < 0) return false; // Negative numbers are not palindromic
   return num === +num.toString().spilt('').reverse().join(''); // Convert number to string, reverse it, and join back to string
}