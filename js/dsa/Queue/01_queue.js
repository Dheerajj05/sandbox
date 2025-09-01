// Introduction to Queue
// Queue is a linear data structure that follows the FIFO (First In First Out) principle.
// In a queue, the element that is added first is the first one to be removed.
// Basic operations of a queue include:
// 1. Enqueue: Add an element to the end of the queue.
// 2. Dequeue: Remove an element from the front of the queue.
// 3. Peek/Front: Get the front element of the queue without removing it.
// 4. isEmpty: Check if the queue is empty.
// 5. Size: Get the number of elements in the queue.

// Visual Representation:
// Front [1, 2, 3, 4, 5] Rear

class Queue {
    constructor(k) {
        this.queue = []; // Initialize an empty array to hold queue elements

    }
    enqueue(element) {
        this.queue.push(element); // Add the element to the end of the queue
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"; // Return a message if trying to dequeue from an empty queue
        }
        return this.queue.shift(); // Remove and return the front element of the queue
    }

    isEmpty() {
        return this.queue.length === 0; // Return true if the queue is empty, false otherwise
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty"; // Return a message if trying to peek at an empty queue
        }
        return this.queue[0]; // Return the front element without removing it
    }

    size() {
        return this.queue.length; // Return the number of elements in the queue
    }

    printQueue() {
        return this.queue; // Return the current state of the queue
    }
}