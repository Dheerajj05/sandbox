// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Two Pointers Approach
// Intuition:
// We can use the two pointers technique to find the maximum area. The idea is to maintain two pointers, one at the start and one at the end of the array. We will calculate the area formed by the lines at these two pointers and the x-axis. We will then move the pointer
// that points to the shorter line inward, as moving the taller line inward will not increase the area. We will repeat this process until the two pointers meet.
// Complexity Analysis
// Time Complexity: O(N) where N is the size of the array.
// Space Complexity: O(1) as we are using only a constant amount of space.

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Function to compute the maximum area that can be formed between two lines
int maxArea(vector<int>& height) {
    int i = 0;                      // Left pointer at the start
    int j = height.size() - 1;     // Right pointer at the end
    int maxArea = 0;               // Store the maximum area found

    // Loop while left pointer is less than or equal to right
    while (i <= j) {
        int h = min(height[i], height[j]); // Height is the minimum of two lines
        int w = j - i;                     // Width is the distance between lines
        maxArea = max(maxArea, h * w);     // Update maxArea if current area is larger

        // Move the pointer pointing to the shorter line
        if (height[i] < height[j]) {
            i++; // Move left pointer to the right
        } else {
            j--; // Move right pointer to the left
        }
    }

    return maxArea; // Return the maximum area found
}

int main() {
    // Sample input
    vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};

    // Call the function and store result
    int result = maxArea(height);

    // Output the result
    cout << "Max water that can be contained: " << result << endl;

    return 0;
}
