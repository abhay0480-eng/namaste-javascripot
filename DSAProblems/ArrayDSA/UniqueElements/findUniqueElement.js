

// Given a 2D array
const arr = [[12, 34], [12, 12, 3], [5, 6, 3], [4, 4]];

// Variables to hold the flattened and unique arrays
let flatArray;
let uniqueArray;

/**
 * Function to flatten a 2D array using the Array.flat() method
 * @param {Array} arr - The 2D array to flatten
 * @returns {Array} - A flattened array
 */
function flatArryUsingFlat(arr) {
    const output = arr.flat(); // Flatten the array
    return output;
}

/**
 * Function to flatten a 2D array using Array.map()
 * @param {Array} arr - The 2D array to flatten
 * @returns {Array} - A flattened array
 */
function flatarryUsingMap(arr) {
    let output = [];
    arr.map((item, index) => {
        arr[index].map((item) => output.push(item)); // Push each element into the output array
    });
    return output;
}

/**
 * Function to flatten a 2D array using Array.forEach()
 * @param {Array} arr - The 2D array to flatten
 * @returns {Array} - A flattened array
 */
function flatarryUsingForEach(arr) {
    let output = [];
    arr.forEach((element) => {
        element.forEach((item) => output.push(item)); // Push each element into the output array
    });
    return output;
}

// Log the results of the different flattening methods
console.log(flatArryUsingFlat(arr));
console.log(flatarryUsingMap(arr));
console.log(flatarryUsingForEach(arr));

// Flatten the array using the flat method
flatArray = flatArryUsingFlat(arr);
console.log(flatArray);

/**
 * Function to find unique elements in an array using a nested loop
 * @param {Array} arr - The array to filter for unique elements
 * @returns {Array} - An array of unique elements
 */
function uniqueElementusingFor(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                flag = false; // Mark as duplicate
                break;
            }
        }
        if (flag) {
            output.push(arr[i]); // Push unique element to output
        }
    }
    return output;
}

// Uncomment to use the uniqueElementusingFor function
// uniqueArray = uniqueElementusingFor(flatArray);
// console.log(uniqueArray);

/**
 * Function to find unique elements in an array using Array.filter()
 * @param {Array} arr - The array to filter for unique elements
 * @returns {Array} - An array of unique elements
 */
function uniqueElementUsingFilter(arr) {
    const filter = arr.filter((item, index) => flatArray.indexOf(item) === index); // Filter unique elements
    return filter;
}

// Uncomment to use the uniqueElementUsingFilter function
// uniqueArray = uniqueElementUsingFilter(flatArray);
// console.log(uniqueArray);

/**
 * Function to find unique elements in an array using Set
 * @param {Array} arr - The array to filter for unique elements
 * @returns {Array} - An array of unique elements
 */
function uniqueElementUsingSet() {
    const unique = [...new Set(flatArray)]; // Use Set to filter unique elements
    return unique;
}

// Get unique elements using the Set method
uniqueArray = uniqueElementUsingSet(flatArray);
console.log(uniqueArray);