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







function createShoppingCart() {
    let cart = []; // Cart is private to this function

    return {
        addItem: (item) => {
            cart.push(item);
            console.log(`${item} added to your cart.`);
        },
        removeItem: (item) => {
            const index = cart.indexOf(item);
            if (index > -1) {
                cart.splice(index, 1);
                console.log(`${item} removed from your cart.`);
            } else {
                console.log(`${item} is not in your cart.`);
            }
        },
        viewCart: () => {
            console.log("Your cart contains:", cart.length > 0 ? cart : "No items in the cart.");
        },
    };
}

// Create a cart for a user
const myCart = createShoppingCart();

// Add items to the cart
myCart.addItem("Apple");
myCart.addItem("Banana");
myCart.viewCart(); // Your cart contains: ['Apple', 'Banana']

// Remove an item
myCart.removeItem("Apple");
myCart.viewCart(); // Your cart contains: ['Banana']

// Try to access the cart variable directly (will fail)
console.log(typeof cart); // Undefined, as cart is private








function createAuthSystem() {
    let userData = null; // Private variable to store logged-in user data

    return {
        login: (username, password) => {
            // Simulated authentication logic
            if (username === "admin" && password === "1234") {
                userData = { username: "admin", role: "admin" }; // Save user data
                console.log("Login successful!");
            } else {
                console.log("Invalid credentials.");
            }
        },
        logout: () => {
            if (userData) {
                console.log(`${userData.username} logged out.`);
                userData = null; // Clear user data
            } else {
                console.log("No user is logged in.");
            }
        },
        getUser: () => {
            if (userData) {
                return userData; // Return private user data
            } else {
                console.log("No user is logged in.");
                return null;
            }
        },
    };
}

// Create an authentication instance
const auth = createAuthSystem();

// Try to access user data (not possible directly)
console.log(typeof userData); // "undefined"

// Log in as admin
auth.login("admin", "1234"); // Login successful!

// Access user details
console.log(auth.getUser()); // { username: "admin", role: "admin" }

// Log out
auth.logout(); // admin logged out.

// Try accessing user details after logout
console.log(auth.getUser()); // No user is logged in.
