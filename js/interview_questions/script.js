//Map, Filter, Reduce
console.log("Map, Filter, Reduce");

//What is Map?
// Map is used to transform each element in an array into a new value
// It returns a new array with the transformed values
// The callback function receives three arguments: the current element, the index of the current element,
// and the original array itself
// The callback function should return the new value for each element
// The original array is not modified
const numbers = [1, 2, 3, 4, 5];    
const doubled = numbers.myMap((num, i ,arr) => {
  return  num * 2 + i;
});

console.log(doubled); // [2, 5, 8, 11, 14]

//What is Filter?
// Filter is used to filter out elements from an array based on a condition
// It returns a new array with the elements that satisfy the condition
// The callback function receives three arguments: the current element, the index of the current element,
// and the original array itself
// The callback function should return true for elements that should be included in the new array,
// and false for elements that should be excluded
// The original array is not modified
const filtered = numbers.filter((num, i, arr) => {
  return num > 2;
});
console.log(filtered); // [3, 4, 5]

//What is Reduce?
// Reduce is used to reduce an array to a single value
// It applies a callback function to each element in the array, accumulating a result
// The callback function receives four arguments: the accumulator (the accumulated value so far),
// the current element, the index of the current element, and the original array itself
// The callback function should return the new accumulated value
// The original array is not modified
//acc is the computation of the previous iteration, currentValue is the current element being processed,
// index is the current index, and array is the original array
// If an initial value is provided, it will be used as the first argument to the callback function
// If no initial value is provided, the first element of the array will be used as the initial value of the accumulator
const sum = numbers.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0); // The second argument is the initial value of the accumulator
console.log(sum);


//Map, Filter and reduce polyfills
//MAP Polyfill

// Array.map((num, i ,arr)=> {})

Array.prototype.myMap = function(callback) {
    let temp = [];
    for(i =0 ; i<this.length; i++){

        temp.push(callback(this[i], i, this));
   

    }
    return temp;
}
// For Sparse Arrays
Array.prototype.myMapSparse = function(callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) { // Check if the index exists in the array
            temp.push(callback(this[i], i, this));
        }
    }
    return temp;
}


//Filter Polyfill
//Array.filter((num, i , arr)=> {})

Array.prototype.myFilter = function(callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
};


//Reduce Polyfill
//Array.reduce((acc,currentValue, index, Arr) => {}, initialValue)
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator !== undefined
            ? callback(accumulator, this[i], i, this)
            : this[i];
    }
    return accumulator;
};


//Difference between Map and ForEach?
// Map returns a new array with the transformed values, while forEach does not return anything.
// Map is used for transforming data, while forEach is used for executing a function on each element of the array.
// Map is chainable, meaning you can call other array methods on the result
// of map, while forEach is not chainable.  

//What is a scope in JavaScript?
// Scope refers to the visibility and accessibility of variables in different parts of the code.

//Difference between var, let, and const?
// var is function-scoped or globally-scoped, meaning it is accessible within the function or globally if declared outside a function.
// let is block-scoped, meaning it is only accessible within the block in which it is defined (e.g., inside a loop or an if statement).
// const is also block-scoped like let, but it is used to declare variables that cannot be reassigned
// after their initial assignment. However, if the variable is an object or an array, its properties or elements can still be modified.
//// In summary:
// - var: function/global scope, can be redeclared and reassigned
// - let: block scope, can be reassigned but not redeclared in the same scope
// - const: block scope, cannot be reassigned, but properties of objects or elements of arrays can be modified

