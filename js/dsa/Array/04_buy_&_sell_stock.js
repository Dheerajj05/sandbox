// Problem Statement: Buy and sell stock
// Given an array of stock prices where the ith element represents the price of a stock on day i,
// find the maximum profit you can achieve by buying and selling the stock once.
// You can only complete one transaction (i.e., buy one and sell one share of the stock).
// If no profit can be made, return 0.

// Example:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.

// Brute Force Approach:
// - Iterate through all pairs of days and calculate the profit for each pair.
// - This approach has a time complexity of O(n^2), where n is the number of days.
// - This is inefficient for large arrays.  

function maxProfitBruteForce(prices) {
    let maxProfit = 0; // Initialize maxProfit to 0

    for (let i = 0; i < prices.length-1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i]; // Calculate profit if bought on day i and sold on day j
            if (profit > maxProfit) {
                maxProfit = profit; // Update maxProfit if the current profit is greater
            }
        }
    }

    return maxProfit; // Return the maximum profit found
}

// Optimal Approach:
// - Use a single pass through the array to find the minimum price seen so far and calculate the profit at each step.
// Greedy approach: keep track of the minimum price and calculate potential profit at each price point.
// - This has a time complexity of O(n) and a space complexity of O(1). 

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i<prices.length;i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]; // Update minPrice if the current price is lower
        }
        const profit = prices[i] - minPrice; // Calculate profit if sold at the current price
        if(profit>maxProfit){
            maxProfit = profit; // Update maxProfit if the current profit is greater
        }
    }
}