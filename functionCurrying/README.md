# Function Currying in JavaScript

## Overview

Function currying is a powerful technique in JavaScript that allows you to transform a function with multiple arguments into a series of functions that each take a single argument. This approach can enhance code readability, reusability, and maintainability. This README provides a detailed explanation of function currying, along with examples ranging from basic to advanced use cases.

## Table of Contents

1. [What is Function Currying?](#what-is-function-currying)
2. [Basic Example: Adding Two Numbers](#basic-example-adding-two-numbers)
3. [Intermediate Example: Multiplication](#intermediate-example-multiplication)
4. [Advanced Example: String Separator](#advanced-example-string-separator)
5. [Real Use Cases: Data Transformation](#real-use-cases-data-transformation)
6. [Conclusion](#conclusion)

---

## What is Function Currying?

Function currying is a technique where a function is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions, meaning you can create specialized functions by pre-filling some arguments. Currying is particularly useful in functional programming and can lead to cleaner and more modular code.

---

## Basic Example: Adding Two Numbers

In this example, we create a simple function that adds two numbers using currying.



// Function that takes one argument and returns another function

```
function add(x) {
// Inner function takes the second argument
return function(y) {
// Returns the sum of x and y
return x + y;
}
}
// Create a specialized function that adds 3
const add3 = add(3);
// Log the results of adding 3 to 10 and 15
console.log(add3(10)); // Outputs: 13
console.log(add3(15)); // Outputs: 18
```


### Explanation
- The `add` function takes one argument `x` and returns another function that takes a second argument `y`.
- When `add3` is called with a number, it adds that number to `3`.

---

## Intermediate Example: Multiplication

This example demonstrates how to create a function that multiplies three numbers using currying.

// Function that takes one argument and returns a function

```
function multiply(x) {
// Inner function takes the second argument
return function(y) {
// Returns another function that takes the third argument
return function(z) {
// Returns the product of x, y, and z
return x y z;
}
}
}
// Create a specialized function that multiplies by 2
const multiplyBy2 = multiply(2);
// Create a specialized function that multiplies by 2 and 5
const multiplyBy2and5 = multiplyBy2(5);
// Log the result of multiplying 2, 5, and 10
console.log(multiplyBy2and5(10)); // Outputs: 100
```


### Explanation
- The `multiply` function takes one argument `x` and returns a function that takes `y`, which in turn returns another function that takes `z`.
- This allows us to create specialized functions like `multiplyBy2` and `multiplyBy2and5`.

---

## Advanced Example: String Separator

In this example, we create a function that formats a string with a specified separator.

// Function that takes a separator and returns a function

```
function formatSeperator(separator) {
// Inner function takes a prefix
return function(prefix) {
// Returns another function that takes a suffix
return function(suffix) {
// Returns a formatted string with prefix, separator, and suffix
return ${prefix} ${separator} ${suffix};
}
}
}
// Create a specialized function that formats with a dash
const formatwithdash = formatSeperator("-");
// Create a specialized function that prefixes with "Hello"
const formatwithdashandhello = formatwithdash("Hello");
// Log the formatted string
console.log(formatwithdashandhello("abhay")); // Outputs: "Hello - abhay"

```

### Explanation
- The `formatSeperator` function takes a `separator` and returns a function that takes a `prefix`, which in turn returns another function that takes a `suffix`.
- This allows for flexible string formatting.

---

## Real Use Cases: Data Transformation

Currying can also be applied in data transformation scenarios, where you can create specialized functions for processing data.


// Function that takes a transformation function and returns a function

```
function transformData(func) {
// Inner function takes an array of data
return function(dataArray) {
// Maps the transformation function over the data array
return dataArray.map(func);
}
}
// Transformation functions
const double = (x) => x 2; // Function to double a number
const square = (x) => x x; // Function to square a number
// Create specialized functions for doubling and squaring data
const doubleData = transformData(double)([1, 2, 3, 4]);
const squareData = transformData(square)([1, 2, 3, 4]);
// Log the transformed data
console.log(doubleData); // Outputs: [2, 4, 6, 8]
console.log(squareData); // Outputs: [1, 4, 9, 16]
```

### Explanation
- The `transformData` function takes a transformation function and returns another function that processes an array of data.
- This allows for easy application of different transformations, such as doubling or squaring numbers.

---

## Conclusion

Function currying is a powerful technique that can lead to more modular and reusable code. By breaking down functions into smaller, single-argument functions, you can create specialized functions that enhance code clarity and maintainability. The examples provided illustrate various use cases of currying, from simple arithmetic operations to more complex data transformations.

Feel free to explore and modify the examples to better understand how currying can be applied in your own JavaScript projects!