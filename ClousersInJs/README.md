# Understanding Closures in JavaScript

This project provides examples of closures in JavaScript, demonstrating how inner functions can access variables from their outer functions even after the outer function has finished executing.

## What is a Closure?

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This allows for powerful programming patterns, such as data encapsulation and function factories.

## Examples

### Example 1: Basic Closure

In this example, the inner function `y` accesses the variable `a` defined in the outer function `x`. When `x` is called, it invokes `y`, which logs the value of `a`.

### Example 2: Intermediate Closure

Here, the outer function `x` modifies the variable `a` before returning the inner function `y`. When `z` (which is `y`) is called later, it still has access to the modified value of `a`, demonstrating that closures can capture variables by reference.

### Example 3: Advanced Closure

In this example, we have a nested function structure with `grandparent`, `parent`, and `child`. The `child` function can access variables from both its immediate parent (`a`) and its grandparent (`c`), showcasing how closures can span multiple levels of function nesting.

## License

This project is licensed under the MIT License.