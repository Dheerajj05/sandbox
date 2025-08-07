// Problem Statement: Given an array, we have to find the largest element in the array.
// Example 1:
// Input: arr[] = {2,5,1,3,0};
// Output: 5
// Explanation: 5 is the largest element in the array. 

// Example2: 
// Input: arr[] = {8,10,5,7,9};
// Output: 10
// Explanation: 10 is the largest element in the array. 

// Brute Force Approach:
// Solution1: Sorting
// Intuition:
// We can sort the array in ascending order, hence the largest element will be at the last index of the array. 

// Approach: 
// Sort the array in ascending order.
// Print the (size of the array -1)th index.
// DryRun: 
// Before sorting: arr[] = {2,5,1,3,0};

// After sorting: arr[] = {0,1,2,3,5};

// Hence answer : arr[sizeofthearray-1] = 5


#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
 
int sortArr(vector<int>& arr) {
    sort(arr.begin(),arr.end());
    return arr[arr.size()-1];
}
 
int main() {
    vector<int> arr1 = {2,5,1,3,0};
    vector<int> arr2 = {8,10,5,7,9};
   
    cout<<"The Largest element in the array is: "<<sortArr(arr1)<<endl;
    cout<<"The Largest element in the array is: "<<sortArr(arr2);
}

// Complexity Analysis

// Time Complexity: O(N*log(N))

// Space Complexity: O(n)

// ----------------------------------------------------------------------------------------------------

// Solution2: Linear Search
// Intuition:
// We can traverse the array and keep track of the largest element found so far.        

// Approach:
// Initialize a variable to store the largest element, starting with the first element of the array.
// Traverse the array from the second element to the last element.
// If the current element is greater than the largest element, update the largest element.

#include <iostream>
using namespace std;
int findLargestElement(int arr[], int n) {
 
  int max = arr[0];
  for (int i = 0; i < n; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
int main() {
  int arr1[] = {2,5,1,3,0};
  int n = 5;
  int max = findLargestElement(arr1, n);
  cout << "The largest element in the array is: " << max << endl;
 
  int arr2[] =  {8,10,5,7,9};
  n = 5;
  max = findLargestElement(arr2, n);
  cout << "The largest element in the array is: " << max<<endl;
  return 0;
}