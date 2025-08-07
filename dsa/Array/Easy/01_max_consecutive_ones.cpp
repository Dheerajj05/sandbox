// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Brute Force Approach
// Intuition:
// We can iterate through the array and count the number of consecutive 1's. Whenever we encounter a 0, we reset the count and check if the current count is greater than the maximum count found so far. We will keep track of the maximum count throughout the iteration.
// Complexity Analysis
// Time Complexity: O(N) where N is the size of the array.
// Space Complexity: O(1) as we are using only a constant amount of space.

#include <iostream>
#include <vector>
using namespace std;

    int findMaxConsecutiveOnes(vector<int>& nums) {
        int n = nums.size();
        int maxCount = 0;
        int count = 0;
        for(int i =0;i<n; i++){
            if(nums[i]==1) {
                count++;
            }
            else if(nums[i] == 0){
                count = 0;
            }
             maxCount = max(maxCount, count);
        }
        return maxCount;
    }

int main() {
    vector<int> nums = {1, 1, 0, 1, 1, 1};
    int result = findMaxConsecutiveOnes(nums);
    cout << "Maximum number of consecutive 1's: " << result << endl;
    return 0;
}