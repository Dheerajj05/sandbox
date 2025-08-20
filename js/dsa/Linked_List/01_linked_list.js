class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to the next node in the list
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
  }
  // Method to add a new node at the beginning of the linked list
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // Point new node to the current head
    this.head = newNode; // Update head to the new node
  }

  addLast(data) {
    const newNode = newNode(data);
    if (!this.head) {
      this.head = newNode; // If the list is empty, set head to the new node
      return;
    }
    // If the list is not empty, traverse to the end of the list
    let current = this.head;
    while (current.next !== null) {
      current = current.next; // Traverse to the end of the list
    }
    current.next = newNode; // Set the next pointer of the last node to the new node
  }

  size() {
    let count = 0; // Initialize a counter
    let current = this.head; // Start from the head of the list
    while (current !== null) {
      count++; // Increment the counter for each node
      current = current.next; // Move to the next node
    }
    return count; // Return the total count of nodes
  }

  addIndex(data, index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bounds"); // Check for valid index
    }
    const newNode = new Node(data);
    if (index === 0) {
      this.addFirst(data); // If index is 0, add at the beginning
      return;
    }
    let current = this.head;
    let prev = null; // Pointer to the previous node
    for (let i = 0; i < index; i++) {
      prev = current; // Keep track of the previous node
      current = current.next; // Move to the next node
    }
    newNode.next = current; // Point new node to the current node
    prev.next = newNode; // Point previous node to the new node
  }

  // Method to remove the first node from the linked list

  removeFirst() {
    if (!this.head) {
      throw new Error("List is empty"); // Check if the list is empty
    }
    this.head = this.head.next; // Update head to the next node
  }

  // Method to remove the last node from the linked list
  removeLast() {
    if (!this.head) {
      throw new Error("List is empty"); // Check if the list is empty
    }
    if (!this.head.next) {
      this.head = null; // If only one node exists, set head to null
      return;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next; // Traverse to the second last node
    }
    current.next = null; // Set the next pointer of the second last node to null
  }

  // Method to remove a node at a specific index
  removeIndex(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds"); // Check for valid index
    }
    if (index === 0) {
      this.removeFirst(); // If index is 0, remove the first node
      return;
    }
    let current = this.head;
    let prev = null; // Pointer to the previous node
    for (let i = 0; i < index; i++) {
      prev = current; // Keep track of the previous node
      current = current.next; // Move to the next node
    }
    prev.next = current.next; // Bypass the current node to remove it
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data); // Print the data of each node
      current = current.next; // Move to the next node
    }
  }
}
