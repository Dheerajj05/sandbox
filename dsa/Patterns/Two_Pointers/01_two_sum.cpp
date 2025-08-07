// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// Examples:

// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

// Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// 	[-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.

// Brute Force Approach:
// We can use a nested loop to check every pair of elements in the array. If we find a pair whose sum is equal to the target, we return "YES" or the indices.
// If no such pair is found, we return "NO" or {-1, -1}.
// Complexity Analysis
// Time Complexity: O(N^2) where N is the size of the array.
// Space Complexity: O(1) as we are using only a constant amount of space.

// Variant 1: Return YES or NO
#include <iostream>
#include <vector>
#include <string>
using namespace std;

string twoSum(int n, vector<int> &arr, int target)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (arr[i] + arr[j] == target)
                return "YES";
        }
    }
    return "NO";
}

int main()
{
    int n = 5;
    vector<int> arr = {2, 6, 5, 8, 11};
    int target = 14;
    string ans = twoSum(n, arr, target);
    cout << "This is the answer for variant 1: " << ans << endl;
    return 0;
}

// Variant 2: Return indices of the two numbers
#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSumIndices(int n, vector<int> &arr, int target)
{
    vector<int> ans;
    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (arr[i] + arr[j] == target)
            {
                ans.push_back(i);
                ans.push_back(j);
                return ans;
            }
        }
    }
    return {-1, -1};
}

int main()
{
    int n = 5;
    vector<int> arr = {2, 6, 5, 8, 11};
    int target = 14;
    vector<int> ans = twoSumIndices(n, arr, target);
    cout << "This is the answer for variant 2: [" << ans[0] << ", "
         << ans[1] << "]" << endl;
    return 0;
}

// Better Approach: Hashing
// Intuition:
// We can use a hash map to store the elements of the array as we iterate through it. For each element, we check if the complement (target - current element) exists in the hash map. If it does, we return "YES" or the indices. If we reach the end
// of the array without finding a pair, we return "NO" or {-1, -1}.
// Complexity Analysis
// Time Complexity: O(N) where N is the size of the array.
// Space Complexity: O(N) as we are using a hash map to store the elements.

// Variant 1: Return YES or NO
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

// Function to check if there exists a pair of elements in the array whose sum is equal to the target
string twoSum(int n, vector<int> &arr, int target)
{
    unordered_map<int, int> mpp; // Hash map to store element value and its index

    // Loop through the array
    for (int i = 0; i < n; i++)
    {
        int num = arr[i];              // Current element
        int moreNeeded = target - num; // The value needed to reach the target sum

        // Check if this needed value is already in the map
        if (mpp.find(moreNeeded) != mpp.end())
        {
            // If yes, we found two numbers that sum up to target
            return "YES";
        }

        // Otherwise, store the current number with its index in the map
        mpp[num] = i;
    }

    // If no such pair is found, return "NO"
    return "NO";
}

int main()
{
    int n = 5;                          // Number of elements in the array
    vector<int> arr = {2, 6, 5, 8, 11}; // Sample input array
    int target = 14;                    // Target sum we are trying to find

    // Call the function to check if a valid pair exists
    string ans = twoSum(n, arr, target);

    // Output the result
    cout << "This is the answer for variant 1: " << ans << endl;

    return 0;
}

// Variant 2: Return indices of the two numbers
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Function to return the indices of two elements in the array that sum up to the target
vector<int> twoSumIndicesHash(int n, vector<int> &arr, int target)
{
    unordered_map<int, int> mpp; // Hash map to store (value -> index)

    // Iterate through each element in the array
    for (int i = 0; i < n; i++)
    {
        int num = arr[i];              // Current number
        int moreNeeded = target - num; // The number we need to find to make the sum equal to target

        // Check if the needed number is already in the map
        if (mpp.find(moreNeeded) != mpp.end())
        {
            // If found, return the index of the needed number and current index
            return {mpp[moreNeeded], i};
        }

        // Otherwise, store the current number with its index
        mpp[num] = i;
    }

    // If no such pair exists, return {-1, -1}
    return {-1, -1};
}

int main()
{
    int n = 5;                          // Size of the array
    vector<int> arr = {2, 6, 5, 8, 11}; // Input array
    int target = 14;                    // Target sum

    // Call the function and get the answer (indices of two elements that sum to target)
    vector<int> ans = twoSumIndicesHash(n, arr, target);

    // Print the result
    cout << "This is the answer for variant 2: [" << ans[0] << ", "
         << ans[1] << "]" << endl;

    return 0; // End of program
}

// -----------------------------------------Optimal Approach: Two Pointers Technique-----------------------------------------
// Intuition:
// We can use the two pointers technique to find a pair of numbers that sum up to the target. The idea is to maintain two pointers, one at the start and one at the end of the sorted array. We will check the sum of the elements at these two pointers. If the sum
// is equal to the target, we return the indices. If the sum is less than the target, we move the left pointer to the right to increase the sum. If the sum is greater than the target, we move the right pointer to the left to decrease the sum.
// Note: The array must be sorted for this approach to work.
// Complexity Analysis
// Time Complexity: O(N) where N is the size of the array.
// Space Complexity: O(1) as we are using only a constant amount of space.

#include <iostream>
#include <vector>
using namespace std;

// Function that returns a pair of indices if a matching pair is found
pair<int, int> findPairWithSum(const vector<int> &arr, int target)
{
    int i = 0, j = arr.size() - 1;

    while (i < j)
    {
        int sum = arr[i] + arr[j];
        if (sum == target)
        {
            return {i, j}; // Return the indices
        }
        else if (sum < target)
        {
            i++;
        }
        else
        {
            j--;
        }
    }

    return {-1, -1}; // Return invalid indices if not found
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 6};
    int target = 7;

    pair<int, int> result = findPairWithSum(arr, target);

    if (result.first != -1)
    {
        cout << "Pair found at indices: " << result.first << " and " << result.second << endl;
        cout << "Values: " << arr[result.first] << " + " << arr[result.second] << " = " << target << endl;
    }
    else
    {
        cout << "No pair found" << endl;
    }

    return 0;
}
