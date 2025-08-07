// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

//Optimal Approach: Using Reverse Technique
// Intuition:
// We can use the reverse technique to rotate the array. The idea is to reverse the entire array, then reverse the first k elements and finally reverse the remaining n-k elements. This will give us the desired rotated array.

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void rotate(vector<int>& nums, int k) {
    int n = nums.size();
    k = k % n; // Handle cases when k >= n

    // Step 1: Reverse entire array
    reverse(nums.begin(), nums.end());   //[7,6,5,4,3,2,1]

    // Step 2: Reverse first k elements
    reverse(nums.begin(), nums.begin() + k); // [5,6,7,4,3,2,1]

    // Step 3: Reverse remaining n-k elements
    reverse(nums.begin() + k, nums.end()); // [5,6,7,1,2,3,4]
    // Now nums is rotated by k steps
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7};
    int k = 3;

    rotate(nums, k);

    cout << "Rotated array: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
