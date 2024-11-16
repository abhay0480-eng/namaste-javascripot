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




