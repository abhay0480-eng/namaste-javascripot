function wrapUp() {
    let count = 1; // Initialize count variable

    // Add an event listener to the button with id "clickMe"
    document.getElementById("clickMe").addEventListener("click", () => {
        // Callback function that executes when the button is clicked
        // This function forms a closure, capturing the `count` variable from the outer function `wrapUp`
        console.log("Count:", ++count); // Increment count and log the current count
    });
}

wrapUp();



// Simulate an asynchronous operation to fetch user data
function fetchUserData(userId, callback) {
    console.log(`Fetching data for user with ID: ${userId}...`);
    setTimeout(() => {
        const userData = {
            id: userId,
            name: "John Doe",
            email: "john.doe@example.com",
        };
        callback(userData); // Pass user data to the callback function
    }, 2000); // Simulates network delay
}

// Callback function to process the user data
function displayUser(user) {
    console.log(`User Name: ${user.name}`);
    console.log(`User Email: ${user.email}`);
}

// Callback function to save user data
function saveUserToDatabase(user) {
    console.log(`Saving ${user.name} to the database...`);
    setTimeout(() => {
        console.log(`User ${user.name} has been saved successfully!`);
    }, 1000);
}

// Usage: Fetch user data and display it
fetchUserData(101, displayUser);

// Usage: Fetch user data and save it to the database
fetchUserData(102, saveUserToDatabase);



