// Introduction to Stack
// Stack is a linear data structure that follows the LIFO (Last In First Out) principle.
// In a stack, the element that is added last is the first one to be removed.
// Basic operations of a stack include:
// 1. Push: Add an element to the top of the stack.
// 2. Pop: Remove an element from the top of the stack.
// 3. Peek/Top: Get the top element of the stack without removing it.
// 4. isEmpty: Check if the stack is empty.
// 5. Size: Get the number of elements in the stack.


// ------------------------------------Implementation using Array------------------------------

class Stack {
    constructor() {
        this.stack = []; // Initialize an empty array to hold stack elements
    }

    push(element) {
        this.stack.push(element); // Add the element to the top of the stack
    }

    isEmpty() {
        return this.stack.length === 0; // Return true if the stack is empty, false otherwise
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Return a message if trying to pop from an empty stack
        }
        return this.stack.pop(); // Remove and return the top element of the stack
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Return a message if trying to peek at an empty stack
        }
        return this.stack[this.stack.length - 1]; // Return the top element without removing it
    }

    printStack(){
        return this.stack; // Return the current state of the stack
    }
}