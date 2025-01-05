## Callback Functions

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. This concept is fundamental in JavaScript, especially for handling asynchronous operations.

### Synchronous vs. Asynchronous Callbacks

- **Synchronous Callbacks**: These are executed immediately within the function they are passed to.
- **Asynchronous Callbacks**: These are executed after a certain event occurs, such as the completion of a network request or a timer.

### Example

Here’s a simple example of a callback function in JavaScript:


```
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data); // Calling the callback function with the data
        }, 1000);
    }
    fetchData((data) => {
    console.log("Data received:", data);
    });

```


### Use Cases

Callbacks are commonly used in:
- Event handling (e.g., responding to button clicks)
- Asynchronous operations (e.g., fetching data from an API)
- Array methods (e.g., `map`, `filter`, `reduce`)

### Potential Issues

While callbacks are powerful, they can lead to "callback hell," where multiple nested callbacks make code difficult to read and maintain. Modern JavaScript provides Promises and async/await syntax to help mitigate this issue, making asynchronous code easier to manage.