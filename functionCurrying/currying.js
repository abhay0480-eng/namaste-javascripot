
/* Function Currying */

/* Basic Example: Add two Numbers */

// Function that takes one argument and returns another function
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


/* Intermediate Example: Multiply */

// Function that takes one argument and returns a function
function multiply(x) {
    // Inner function takes the second argument
    return function(y) {
        // Returns another function that takes the third argument
        return function(z) {
            // Returns the product of x, y, and z
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


/* Advanced Example: String Separator */

// Function that takes a separator and returns a function
function formatSeperator(separator) {
    // Inner function takes a prefix
    return function(prefix) {
        // Returns another function that takes a suffix
        return function(suffix) {
            // Returns a formatted string with prefix, separator, and suffix
            return `${prefix} ${separator} ${suffix}`;
        }
    }
}

// Create a specialized function that formats with a dash
const formatwithdash = formatSeperator("-");
// Create a specialized function that prefixes with "Hello"
const formatwithdashandhello = formatwithdash("Hello");

// Log the formatted string
console.log(formatwithdashandhello("abhay")); // Outputs: "Hello - abhay"


/* Real Use Cases: Data Transformation */

// Function that takes a transformation function and returns a function
function transformData(func) {
    // Inner function takes an array of data
    return function(dataArray) {
        // Maps the transformation function over the data array
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





