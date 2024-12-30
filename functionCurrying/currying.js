
/* Function Currying */

/* *************** 1. Partial Application *********************************************************/

// Curried function
function multiply(x) {
    return function(y) {
        return x * y;
    }
}

const double2 = multiply(2); // Partially applied function
console.log(double2(5)); // Outputs: 10



//normal function
function multiply(x, y) {
    return x * y;   
}

const double23 = (y) => multiply(2, y); // Requires a wrapper function
console.log(double23(5)); // Outputs: 10




/* ******************* 2. Function Composition ************************************** */

// Currying makes it easier to compose functions together, allowing you to create new functions by combining existing ones.

/* Currying function */
function add(x) {
    return function(y) {
        return x + y;
    }
}

function multiply(x) {
    return function(y) {
        return x * y;
    }
}

const add3 = add(3);
const multiplyBy2 = multiply(2);

const add3ThenMultiplyBy2 = function(z) {
    return multiplyBy2(add3(z));
};

console.log(add3ThenMultiplyBy2(4)); // Outputs: 14


/* normal function */
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Function composition is less elegant
function add3ThenMultiplyBy2(z) {
    return multiply(2, add(3, z)); // Requires knowledge of both functions
}

console.log(add3ThenMultiplyBy2(4)); // Outputs: 14



/* ********************************** 3. Higher-Order Functions ************************************************
Currying naturally leads to the creation of higher-order functions, which can return other functions. This is less intuitive with normal functions. */

// curried function
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    }
}

const sayHello = createGreeting("Hello");
console.log(sayHello("Alice")); // Outputs: "Hello, Alice!"


// normal function
function createGreeting(greeting, name) {
    return `${greeting}, ${name}!`; // Requires both arguments at once
}

console.log(createGreeting("Hello", "Alice")); // Outputs: "Hello, Alice!"



/* ************************************** 4. Easier Testing and Debugging ****************************************

Curried functions can be easier to test in isolation since they are often smaller and focused on a single task. */

// curried function
function add(x) {
    return function(y) {
        return x + y;
    }
}

// Testing add(3) separately
const add32 = add(3);
console.log(add32(4)); // Outputs: 7

//normal function
function add(x, y) {
    return x + y;
}

// Testing requires both parameters
console.log(add(3, 4)); // Outputs: 7


/* Conclusion
While normal functions are versatile and can handle many scenarios, function currying provides specific advantages in terms of partial application, function composition, higher-order functions, and modularity. These features can lead to cleaner, more maintainable, and more expressive code, especially in functional programming paradigms. */


