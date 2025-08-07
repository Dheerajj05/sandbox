// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

// Note: Two consecutive equal values are considered to be sorted.

// Example 1:
// Input: N = 5, array[] = {1,2,3,4,5}
// Output: True.
// Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

// Example 2:
// Input: N = 5, array[] = {5,4,6,7,8}
// Output: False.
// Explanation: The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.

// Here element 5 is not smaller than or equal to its future elements.

// Brute Force Approach:

// Start from index 0 and compare each element with all elements ahead of it.

// If the current element is greater than any future element, return False.

// Continue checking until the end of the array.

// If no violations are found, return True.

// For arrays of size 0 or 1, return True directly.

#include <iostream>
using namespace std;

bool isSorted(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[i])
        return false;
    }
  }

  return true;
}

int main() {

  int arr[] = {1, 2, 3, 4, 5}, n = 5;
  bool ans = isSorted(arr, n);
  if (ans) cout << "True" << endl;
  else cout << "False" << endl;
  return 0;
}

// Complexity Analysis  
// Time Complexity: O(N^2) where N is the size of the array.
// Space Complexity: O(1) as we are using only a constant amount of space.

// -----------------------------------------------------------------------------------------------------

// Optimal Approach: Linear Scan    
// Intuition:
// We can traverse the array and check if each element is less than or equal to the next element. If we find any element that is greater than the next one, we can immediately return false.
// If we reach the end of the array without finding any violations, we return true.

#include <iostream>

using namespace std;

bool isSorted(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1])
      return false;
  }

  return true;
}

int main() {

  int arr[] = {1, 2, 3, 4, 5}, n = 5;

  printf("%s", isSorted(arr, n) ? "True" : "False");

}