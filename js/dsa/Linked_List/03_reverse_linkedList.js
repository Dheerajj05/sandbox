// Problem Statement: Given a linked list, reverse it in place.
// The function should return the head of the reversed linked list.
// For example, if the linked list is 1 -> 2 -> 3 -> 4 -> 5, the reversed linked list should be 5 -> 4 -> 3 -> 2 -> 1.  

// Intuition:
// - Use three pointers: prev, current, and next.
// - Initialize prev to null, current to head, and next to null.
// - Traverse the linked list, updating the next pointer of the current node to point to prev.
// - Move prev to current, current to next, and repeat until current is null.       

function reverseLinkedList(head) {
    let prev = null; // Initialize prev to null
    let current = head; // Start with the head of the list

    while (current !== null) {
        let next = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = next; // Move to the next node
    }

    return prev; // Return the new head of the reversed list
}
// Time Complexity: O(n) - The function traverses the linked list once, where n is the number of nodes in the list.
// Space Complexity: O(1) - The function uses a constant amount of space for the pointers prev, current, and next, regardless of the size of the linked list.