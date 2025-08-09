//Problem Statement: Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// Brute Force Approach
// Intuition:
// We can use a HashSet to store unique elements. We will iterate through the array and add each element to the HashSet. After that, we can copy the unique elements back to the original array.

#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;    

int removeDuplicates(vector<int>& nums) {
    unordered_set<int> uniqueElements; // HashSet to store unique elements
    for (int num : nums) {
        uniqueElements.insert(num); // Insert each element into the HashSet
    }

    int k = 0; // Counter for unique elements
    for (int num : uniqueElements) {
        nums[k++] = num; // Copy unique elements back to the original array
    }

    return k; // Return the number of unique elements
}  


//Optimal Approach: Two Pointers Technique
// Intuition:
// We can use the two pointers technique to solve this problem. The idea is to maintain a pointer for the current position of unique elements and another pointer to iterate through the array. Whenever we find a unique element, we will copy it to the current position and move the current position pointer forward.

#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    // Edge case: if the vector is empty, return 0 as no elements are present.
    if (nums.size() == 0) {
        return 0;
    }

    // Initialize pointer i to track the position of the last unique element.
    int i = 0;

    // Loop through the vector starting from the second element (index 1).
    for (int j = 1; j < nums.size(); j++) {
        // If the current element is different from the last unique element (nums[i]),
        // it means we have found a new unique element.
        if (nums[i] != nums[j]) {
            // Move i to the next position for the unique element.
            i += 1;
            // Update the value at index i with the current unique element.
            nums[i] = nums[j];
        }
    }

    // Return the length of the array with unique elements.
    // i + 1 represents the number of unique elements.
    return i + 1;
}

int main() {
    // Example vector with duplicate elements
    vector<int> nums = {1, 1, 2, 2, 3, 4, 4, 5};

    // Output the original array
    cout << "Original array: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    // Call removeDuplicates to remove duplicates and get the new length
    int newLength = removeDuplicates(nums);

    // Output the modified array with unique elements
    cout << "Array after removing duplicates: ";
    for (int i = 0; i < newLength; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;

    // Output the new length
    cout << "New length of the array: " << newLength << endl;

    return 0;
}


