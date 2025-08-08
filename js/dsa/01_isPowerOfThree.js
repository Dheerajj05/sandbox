// Given an integer n, write a function that returns true if n is a power of three, and false otherwise.
// An integer n is a power of three if there exists an integer x such that n == 3^x.
// For example, 1, 3, 9, 27, and 81 are powers of three, while 2, 4, 5, and 10 are not. 

//Intuition:
// We can use a loop to repeatedly divide n by 3 until n is no longer divisible by 3. If we end up with 1, then n is a power of three;
// otherwise, it is not.    

function isPowerOfThree(n) {
    if (n < 1) return false; // Handle negative numbers and zero

    while (n % 3 === 0) {
        n /= 3; // Divide n by 3 as long as it is divisible
    }

    return n === 1; // If we end up with 1, then n is a power of three
}