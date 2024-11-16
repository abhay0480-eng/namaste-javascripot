# Unique Elements Finder

## Overview

This project contains a JavaScript implementation to find unique elements in a 2D array. The solution includes multiple methods to flatten the 2D array and subsequently extract unique elements. This problem is commonly encountered in coding interviews, particularly in machine coding rounds, where candidates are assessed on their problem-solving and coding skills.

## Problem Statement

Given a 2D array, the task is to:
1. Flatten the 2D array into a 1D array.
2. Identify and return the unique elements from the flattened array.

## Implementation Details

The implementation consists of several functions, each demonstrating different techniques for flattening the array and finding unique elements.

### Flattening Methods

1. **Using `Array.flat()`**
   - This method utilizes the built-in `flat()` function to flatten the array.
   - **Function:** `flatArryUsingFlat(arr)`

2. **Using `Array.map()`**
   - This method flattens the array by mapping over each sub-array and pushing its elements into a new array.
   - **Function:** `flatarryUsingMap(arr)`

3. **Using `Array.forEach()`**
   - This method employs `forEach()` to iterate through each sub-array and push its elements into a new array.
   - **Function:** `flatarryUsingForEach(arr)`

### Finding Unique Elements

1. **Using Nested Loops**
   - This method iterates through the array with nested loops to check for duplicates and collect unique elements.
   - **Function:** `uniqueElementusingFor(arr)`

2. **Using `Array.filter()`**
   - This method filters the array by checking the index of each element in the flattened array to determine uniqueness.
   - **Function:** `uniqueElementUsingFilter(arr)`

3. **Using `Set`**
   - This method leverages the `Set` object to automatically filter out duplicate values, returning only unique elements.
   - **Function:** `uniqueElementUsingSet()`

### Example Usage

To use the functions, simply call them with a 2D array as an argument. For example:

```
javascript
const arr = [[12, 34], [12, 12, 3], [5, 6, 3], [4, 4]];
const flatArray = flatArryUsingFlat(arr);
const uniqueArray = uniqueElementUsingSet(flatArray);
console.log(uniqueArray); // Output: [12, 34, 3, 5, 6, 4]
```


### Output

The console will log the results of the different flattening methods and the unique elements found in the flattened array.

### Conclusion

This implementation provides a comprehensive approach to solving the problem of finding unique elements in a 2D array. It showcases various JavaScript array methods and demonstrates how to effectively manipulate arrays to achieve the desired outcome. This code can serve as a reference for similar problems encountered in coding interviews or practical applications.

## Requirements

- JavaScript (ES6 or later)
- Node.js (for running the script)

## How to Run

1. Clone the repository or download the file.
2. Open a terminal and navigate to the directory containing the `findUniqueElement.js` file.
3. Run the script using Node.js:

   ```bash
   node findUniqueElement.js
   ```

4. Observe the output in the console.

## License

This project is open-source and available for anyone to use and modify.