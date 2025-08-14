// Problem Statement: LRU Cache
// Implement a Least Recently Used (LRU) Cache with the following operations:
// - `get(key)`: Retrieve the value of the key if it exists in the cache, otherwise return -1.
// - `put(key, value)`: Insert or update the value of the key. If the cache exceeds its capacity, it should remove the least recently used item before inserting the new item.
// The cache should support O(1) time complexity for both operations.

// Javascript Map is used to maintain the order of insertion and allow O(1) access time.

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Using Map to maintain insertion order
    }
        put(key, value) {
        if (this.cache.has(key)) {
            // If key already exists, delete it to update its position
            this.cache.delete(key);
        } 
        
        if (this.cache.size === this.capacity) {
            // If cache is full, remove the least recently used item (first item in Map)
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        // Insert the new key-value pair
        this.cache.set(key, value);
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1; // Key does not exist
        }
        // Move the accessed key to the end to mark it as recently used
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value; // Return the value associated with the key
    }

}