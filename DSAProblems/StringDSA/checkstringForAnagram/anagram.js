const areAnagrams = (str1, str2) => {
    // Remove spaces and convert to lowercase
    const normalize = (str) => str.replace(/\s+/g, '').toLowerCase();
    str1 = normalize(str1);
    str2 = normalize(str2);

    // Check if lengths are the same
    if (str1.length !== str2.length) return false;

    // Sort and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
};

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false