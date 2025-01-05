# Function Currying in JavaScript

## Overview

Function currying is a powerful technique in JavaScript that transforms a function with multiple arguments into a series of functions that each take a single argument. This approach enhances code readability, reusability, and maintainability. This README provides a detailed explanation of function currying, its advantages over traditional functions, and examples ranging from basic to advanced use cases.

## Table of Contents

1. [What is Function Currying?](#what-is-function-currying)
2. [Why Use Function Currying?](#why-use-function-currying)
3. [When is Function Currying Necessary?](#when-is-function-currying-necessary)
4. [Basic Example: Adding Two Numbers](#basic-example-adding-two-numbers)
5. [Intermediate Example: Multiplication](#intermediate-example-multiplication)
6. [Advanced Example: String Separator](#advanced-example-string-separator)
7. [Real Use Cases: Data Transformation](#real-use-cases-data-transformation)
8. [Conclusion](#conclusion)

---

## What is Function Currying?

Function currying is a technique where a function is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions, meaning you can create specialized functions by pre-filling some arguments. Currying is particularly useful in functional programming and can lead to cleaner and more modular code.

---

## Why Use Function Currying?

1. **Improved Readability**: Currying allows you to break down complex functions into simpler, more understandable pieces. Each function only deals with one argument at a time, making it easier to follow the logic.

2. **Reusability**: By creating specialized functions through currying, you can reuse them in different contexts without rewriting the logic.

3. **Partial Application**: Currying enables you to create functions with some arguments pre-filled, which can be useful in scenarios where you need to apply the same logic with different parameters.

4. **Functional Composition**: Currying facilitates the composition of functions, allowing you to build more complex operations from simpler ones.

---

## When is Function Currying Necessary?

Function currying is particularly beneficial in the following situations:

1. **Event Handling**: When you need to pass additional parameters to event handlers, currying allows you to create a function that captures those parameters.

   ```javascript
   function createEventHandler(eventType) {
       return function(event) {
           console.log(`Event: ${eventType}, Target: ${event.target}`);
       }
   }

   const clickHandler = createEventHandler('click');
   document.addEventListener('click', clickHandler);
   ```

2. **Higher-Order Functions**: In functional programming, when you want to create functions that return other functions, currying is essential for maintaining clarity and modularity.

   ```javascript
   function createMultiplier(factor) {
       return function(x) {
           return x * factor;
       }
   }

   const double = createMultiplier(2);
   console.log(double(5)); // Outputs: 10
   ```

3. **Data Transformation**: When working with data processing functions, currying allows you to create specialized transformation functions that can be reused across different datasets.

   ```javascript
   function transformData(func) {
       return function(dataArray) {
           return dataArray.map(func);
       }
   }

   const addOne = (x) => x + 1;
   const addOneToData = transformData(addOne);
   console.log(addOneToData([1, 2, 3])); // Outputs: [2, 3, 4]
   ```

---

## Basic Example: Adding Two Numbers

In this example, we create a simple function that adds two numbers using currying.

```javascript
function add(x) {
    return function(y) {
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

```javascript
function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
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

```javascript
function formatSeparator(separator) {
    return function(prefix) {
        return function(suffix) {
            return `${prefix} ${separator} ${suffix}`;
        }
    }
}

// Create a specialized function that formats with a dash
const formatWithDash = formatSeparator("-");

// Create a specialized function that prefixes with "Hello"
const formatWithDashAndHello = formatWithDash("Hello");

// Log the formatted string
console.log(formatWithDashAndHello("abhay")); // Outputs: "Hello - abhay"
```

### Explanation
- The `formatSeparator` function takes a `separator` and returns a function that takes a `prefix`, which in turn returns another function that takes a `suffix`.
- This allows for flexible string formatting.

---

## Real Use Cases: Data Transformation

Currying can also be applied in data transformation scenarios, where you can create specialized functions for processing data.

```javascript
function transformData(func) {
    return function(dataArray) {
        return dataArray.map(func);
    }
}

// Transformation functions
const double = (x) => x * 2; // Function to double a number
const square = (x) => x * x; // Function to square a number

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