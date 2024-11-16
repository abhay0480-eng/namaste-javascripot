/* Closures in JavaScript */

/* Example 1: Basic Closure */
function x() {
    var a = 7; // Variable `a` is defined in the outer function

    function y() {
        console.log(a); // Inner function `y` accesses variable `a` from the outer function
    }
    y(); // Call the inner function
}

x(); // Invoke the outer function




/* Example 2: Intermediate Closure */
function x() {
    var a = 7; // Variable `a` is defined in the outer function

    function y() {
        console.log(a); // Inner function `y` accesses variable `a`
    }

    a = 100; // Modify the variable `a` in the outer function
    return y; // Return the inner function `y`
}

var z = x(); // Call the outer function and assign the returned inner function to `z`
console.log(z); // Log the function `z` (which is `y`)

// Call the inner function `z`, which still has access to the modified `a`
z(); // Outputs: 100




/* Example 3: Advanced Closure */
function grandparent() {
    var c = 200; // Variable `c` defined in the grandparent function
    function parent() {
        var a = 7; // Variable `a` defined in the parent function
    
        function child() {
            console.log(a, c); // Inner function `child` accesses both `a` and `c`
        }
        child(); // Call the inner function
    }
    parent(); // Call the parent function
}

grandparent(); // Invoke the grandparent function
