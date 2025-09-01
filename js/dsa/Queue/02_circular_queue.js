// Problem Statement: Circular Queue Implementation
// A circular queue is a linear data structure that follows the FIFO (First In First Out) principle but connects the end of the queue back to the front, forming a circle.
// This allows for efficient use of space by reusing empty slots created by dequeued elements.
// Basic operations of a circular queue include:
// 1. Enqueue: Add an element to the end of the queue.
// 2. Dequeue: Remove an element from the front of the queue.
// 3. Peek/Front: Get the front element of the queue without removing it.
// 4. isEmpty: Check if the queue is empty. 

var CircularQueue = function(k) {
    this.queue = []; // Initialize an array to hold queue elements
    this.size = k; // Set the maximum capacity of the queue
}
CircularQueue.prototype.enqueue = function(element) {
    if (this.queue.length === this.size) {
        return false; // Return a message if trying to enqueue to a full queue
    }
    this.queue.push(element); // Add the element to the end of the queue
    return true; // Return the current state of the queue
}

CircularQueue.prototype.dequeue = function() {
    if(this.queue.length === 0) {
        return false; // Return a message if trying to dequeue from an empty queue
    }
    this.queue.shift(); // Remove the front element of the queue
    return true; // Return the current state of the queue
}

CircularQueue.prototype.front = function() {
    if(this.queue.length === 0) {
        return -1; // Return a message if trying to peek at an empty queue
    }
    return this.queue[0]; // Return the front element without removing it
}

CircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0; // Return true if the queue is empty, false otherwise
}

CircularQueue.prototype.rare = function() {
    if(this.queue.length === 0) {
        return -1; // Return a message if trying to peek at an empty queue
    }
    return this.queue[this.queue.length - 1]; // Return the rear element without removing it
}

CircularQueue.prototype.isFull = function() {
    return this.queue.length === this.size; // Return true if the queue is full, false otherwise
}
