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


function print(){
    console.log("print")
}
function hello(print){
    print()
    console.log("hello")
}

hello(print)

How this is a callback back function it first print "print" then "hello", but according to callback function it execute later in the code

In your code, the function print is passed as an argument to the function hello, and hello calls it inside its body. This fits the definition of a callback function, which is simply a function passed as an argument to another function and executed within that function.

However, your confusion comes from the assumption that a callback function must always execute later. That’s not necessarily true. A callback function can be executed synchronously or asynchronously, depending on how it is invoked.

Why is print() executed first?

Your hello function is calling the print function immediately inside its body:

```
function hello(print) {
    print();  // Immediately executes the function
    console.log("hello");
}
```

Since JavaScript executes code synchronously by default, print() runs first, logs "print", and then console.log("hello") runs next.

What if we wanted it to be asynchronous?

A callback typically executes later when used in asynchronous operations, like setTimeout or fetch. If you wanted print() to run after "hello", you could modify your code:

```
function hello(print) {
    setTimeout(print, 1000); // Executes later after 1 second
    console.log("hello");
}

hello(print);
```

Conclusion:
	•	A callback function is just a function passed as an argument and called inside another function.
	•	Callbacks can be executed immediately (synchronously) or later (asynchronously) depending on how they’re used.
	•	Your example is a synchronous callback, which is why "print" appears before "hello".