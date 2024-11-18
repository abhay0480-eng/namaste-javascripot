/* "this" keyword in JavaScript */

/* In Global Space */

// In the global context, "this" refers to the global object.
// In a browser, this is the window object; in Node.js, it's the global object.
console.log(this); // Outputs: global object (window in browsers, global in Node.js)

/* "this" Inside a Function */

// Function declaration
function x() {
    // The value of "this" depends on the calling context.
    console.log(this); 

    /* "this" Inside Non-Strict Mode */
    // In non-strict mode, if a function is called without an object context,
    // "this" defaults to the global object (window in browsers).
    // If "this" is undefined or null, it is replaced with the global object.

    /* "this" Inside Strict Mode */
    // In strict mode, "this" remains undefined if the function is called without an object context.
    // Example:
    // x() -> undefined (because it's called as a standalone function)
    // window.x() -> window (because it's called as a method of the window object)
}

// Calling the function x() in the global context
x(); // Outputs: undefined (in strict mode) or global object (in non-strict mode)
window.x(); // Outputs: window object (in browsers)





/* "this" Behaves in Object Methods */

// Defining two student objects
const student1 = {
    firstName: "Abhay"
};

const student2 = {
    firstName: "Rajat"
};

// Function to print the student's name along with a roll number
function printName(rollnumber) {
    // "this" refers to the object that calls the function
    console.log(`${this.firstName} ${rollnumber}`);
}

// Using call() to invoke printName with student1 as the context
printName.call(student1, 222); // Outputs: "Abhay 222"

// Using apply() to invoke printName with student2 as the context
printName.apply(student2, [555]); // Outputs: "Rajat 555"

// Using bind() to create a new function with student2 as the context
const boundPrintName = printName.bind(student2, 555);
boundPrintName(); // Outputs: "Rajat 555"

// "this" keyword usage inside call, apply, and bind methods
// call() and apply() allow you to specify the context for "this" when invoking a function.
// bind() creates a new function with a specified context for "this".





/* "this" in Arrow Functions */

// Arrow functions do not have their own "this" context.
// Instead, they inherit "this" from the lexical scope in which they are defined.
const obj = {
    a: 10,
    // Arrow function inside an object
    x: () => {
        console.log(this); // Outputs: window object (in browsers) because it inherits "this" from the global scope
    }
};

// Calling the arrow function
obj.x(); // Outputs: window object (in browsers)




/* "this" in Nested Arrow Function */

// Demonstrating "this" in a nested arrow function
const obj1 = {
    a: 10,
    // Regular function that contains a nested arrow function
    x: function() {
        // In this context, "this" refers to obj1
        const y = () => {
            console.log(this); // Outputs: 10 (the value of "a" in obj1)
        };
        y(); // Calling the nested arrow function
    }
};

// Calling the method x() of obj1
obj1.x(); // Outputs: 10