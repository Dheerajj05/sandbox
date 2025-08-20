// Problem Statement: Given a linked list, determine if it is a palindrome.
// A linked list is a palindrome if the sequence of values from the head to the tail is the same as the sequence from the tail to the head.
// For example, the linked list 1 -> 2 -> 3 -> 2 -> 1 is a palindrome, while 1 -> 2 -> 3 -> 4 is not.
// The function should return true if the linked list is a palindrome, and false otherwise.

// Intuition:
// Take 2 strings, string1 and string2
// Traverse the linked list and append each value to string1 `string1 += node.value` and for string2 `string2 = node.value + string2`
// After the traversal, compare string1 and string2. If they are equal, return true
// If they are not equal, return false

function isPalindrome(head) {
    let str1 = '';
    let str2 = '';
    let current = head;

    while (current) {
        str1 += current.value; // Append to str1
        str2 = current.value + str2; // Prepend to str2
        current = current.next; // Move to the next node
    }

    return str1 === str2; // Compare the two strings
}
// Time Complexity: O(n) - The function traverses the linked list once, where n is the number of nodes in the list.
// Space Complexity: O(n) - The function uses two strings to store the values from the linked list, which requires space proportional to the number of nodes in the list.