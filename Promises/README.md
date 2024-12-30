# Understanding Promises in JavaScript

## What is a Promise?

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows developers to write asynchronous code in a more manageable way, avoiding the complexities of nested callbacks, often referred to as "callback hell."

## States of a Promise

A Promise can be in one of three states:

1. **Pending**: The initial state, meaning the operation is still ongoing.
2. **Fulfilled**: The operation completed successfully, and the promise has a resulting value.
3. **Rejected**: The operation failed, and the promise has a reason for the failure.

## Real-World Example: Ordering a Pizza

To illustrate how promises work, consider the analogy of ordering a pizza:

1. **Pending**: When you place an order for a pizza, it is being prepared. This is the "pending" state of the promise.
2. **Fulfilled**: Once the pizza is ready and delivered to you, the promise is "fulfilled," and you receive your pizza.
3. **Rejected**: If there is an issue (like the restaurant runs out of ingredients), the promise is "rejected," and you are informed that your order cannot be completed.

## Using Promises in JavaScript

In JavaScript, promises are commonly used for handling asynchronous operations, such as fetching data from an API. You can manage the success or failure of these operations using the `.then()` and `.catch()` methods.

### Example Code

Here’s a simple example of using a promise to fetch data:
