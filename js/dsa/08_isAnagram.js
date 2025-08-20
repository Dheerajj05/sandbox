// Problem Statement: Given two strings, determine if they are anagrams of each other.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once. For example, "listen" and "silent" are anagrams.
// The function should return true if the strings are anagrams, and false otherwise.

// Intuition:
// - change the actutal string to an array of characters
// loop through the charaters of second string and check if the character exists in the first string by using the includes method
// if anytime the character does not exist in the first string, return false
// - if all characters exist, return true

function isAnagram (s,t) {
    let arr = s.split("");
    for(let i = 0 ; i<t.length; i++){
    if(!arr.includes(t[i])) return false;
}
return true;
}

console.log(isAnagram(s,t));

// Time Complexity: O(n^2) - The function iterates through each character of the second string and checks for its existence in the first string, leading to a quadratic time complexity.
// Space Complexity: O(n) - The function creates an array from the first string, which requires additional space proportional to the length of the string.

// Better Approach:
// - Sort both strings and compare them. If they are equal, then they are anagrams
function isAnagramBetter(s, t) {
    if (s.length !== t.length) return false; // If lengths differ, they cannot be anagrams

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT; // Compare the sorted strings
}
// Time Complexity: O(n log n) - Sorting both strings takes O(n log n) time.
// Space Complexity: O(n) - The space used for the sorted strings is proportional to their length.

//Optimal Approach:
// - Use a frequency counter to count the occurrences of each character in both strings and compare the counts.
function isAnagramOptimal(s, t) {
    if (s.length !== t.length) return false; // If lengths differ, they cannot be anagrams

    const charCount = {};

    // Count characters in the first string
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Decrease count for characters in the second string
    for (let char of t) {
        if (!charCount[char]) return false; // If character not found or count is zero, not an anagram
        charCount[char]--;
    }

    return true; // All counts should be zero if they are anagrams
} 

// Time Complexity: O(n) - The function iterates through each string once to count characters, leading to linear time complexity.
// Space Complexity: O(n) - The space used for the character count object is proportional to the number of unique characters in the strings, which can be at most n in the worst case.