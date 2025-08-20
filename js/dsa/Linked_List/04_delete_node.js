// Problem Statement: Given a linked list, delete a node from it. You are given a reference to the node to be deleted, not the head of the list.
// The function should delete the node in place and return nothing.

// For example, if the linked list is 1 -> 2 -> 3 -> 4 and you are given a reference to the node with value 3, the resulting linked list should be 1 -> 2 -> 4.

// Intuition:
// To delete a node in a linked list, we can copy the value of the next node into the current node and then delete the next node.
// This effectively removes the current node from the list
// without needing to access the head of the list.

function deleteNode(node) {
    if (node === null || node.next === null) {
        throw new Error("Cannot delete the last node with this method");
    }
    
    // Copy the value from the next node to the current node
    node.value = node.next.value;
    
    // Bypass the next node
    node.next = node.next.next;
}
// Time Complexity: O(1) - The operation is done in constant time since we are only modifying the current node and its next pointer.
// Space Complexity: O(1) - We are not using any additional space that scales with the size of the linked list.