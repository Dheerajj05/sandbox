// Problem Statement: LRU Cache
// Implement a Least Recently Used (LRU) Cache with the following operations:
// - `get(key)`: Retrieve the value of the key if it exists in the cache, otherwise return -1.
// - `put(key, value)`: Insert or update the value of the key. If the cache exceeds its capacity, it should remove the least recently used item before inserting the new item.
// The cache should support O(1) time complexity for both operations.

// Javascript Map is used to maintain the order of insertion and allow O(1) access time.

// Intuition:


// Cache has fixed capacity.
// Use Map to preserve insertion order (needed for LRU).

// put(key, value):
//   - If key exists, delete it (to refresh order).
//   - If capacity reached, remove first (LRU) key.
//   - Insert key-value pair (becomes most recently used).

// get(key):
//   - If key missing, return -1.
//   - If key exists, delete & reinsert to mark as most recent, then return value.

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

// Time Complexity:
// - `get(key)`: O(1) - Accessing a key in a Map is O(1).
// - `put(key, value)`: O(1) - Inserting or updating a key in a Map is O(1), and deleting the least recently used item is also O(1) since it involves removing the first item in the Map.
// Space Complexity: O(capacity) - The space used by the cache is proportional to its capacity, as it stores at most `capacity` key-value pairs.
// Note: The Map data structure maintains the order of insertion, which is crucial for implementing the LRU cache efficiently.
// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1); // Cache is {1=1}
lruCache.put(2, 2); // Cache is {1=1, 2=2}
console.log(lruCache.get(1)); // Returns 1, Cache is {2=2, 1=1} (1 is now most recently used)
lruCache.put(3, 3); // Evicts key 2, Cache is {1=1, 3=3}
console.log(lruCache.get(2)); // Returns -1 (not found)
lruCache.put(4, 4); // Evicts key 1, Cache is {3=3, 4=4}
console.log(lruCache.get(1)); // Returns -1 (not found)
console.log(lruCache.get(3)); // Returns 3 (found)
console.log(lruCache.get(4)); // Returns 4 (found)
// The cache now contains {3=3, 4=4}, with 3 and 4 being the most recently used items.