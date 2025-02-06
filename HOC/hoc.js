const radius = [2,4,6,9,10]

/* Problem: Write a function to calculate area, circumference and diameter for each and every radius value */

const area = (radius) => {
    return Math.PI * radius * radius
}

const circumference = (radius) => {
    return 2 * Math.PI * radius
}

const diameter = (radius) => {
    return 2 * radius
}

/**
 * Higher-Order Function: calculate
 * This function takes a logic function and an array of radius values,
 * applies the logic function to each radius, and returns an array of results.
 * 
 * @param {function} logic - A function that defines the calculation to perform (area, circumference, or diameter).
 * @param {Array} radius - An array of radius values to process.
 * @returns {Array} - An array of results after applying the logic function to each radius.
 */
const calculate = (logic, radius) => {
    let output = []

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(area, radius));
console.log(calculate(circumference, radius));
console.log(calculate(diameter, radius));



/* HOF function Rate Limiting */



function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
  
  // Debounce a search input handler
  const debouncedSearch = debounce((query) => {
    console.log("Searching for:", query);
  }, 300);
  
  document.getElementById("searchInput").addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
  });