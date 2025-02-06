function createNestedObject(path, value) {
    const keys = path.split('.');
    const result = {};
    let current = result;
    
    // Create nested structure except last key
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        current[key] = current[key] || {};
        current = current[key];
    }
    
    // Assign value to last key
    current[keys[keys.length - 1]] = value;
    
    return result;
}

// Example usage:
console.log(createNestedObject("a.b.c", "someValue"));
// Output: { a: { b: { c: 'someValue' } } }