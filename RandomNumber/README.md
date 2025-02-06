
1. Basics of Random Numbers in JavaScript
1.1. Generating Random Numbers
JavaScript provides Math.random(), which returns a pseudo-random floating-point number between [0, 1) (inclusive of 0, exclusive of 1).


const random = Math.random(); // 0 ≤ random < 1

1.2. Generating Numbers in a Range
To generate numbers in a specific range:

/ Between min (inclusive) and max (exclusive)
function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Integer between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Integer between min and max (both inclusive)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


2. Common Use Cases
2.1. Shuffling an Array (Fisher-Yates Algorithm)
A classic interview question. Naive approaches (e.g., array.sort(() => Math.random() - 0.5)) are biased. Use Fisher-Yates shuffle instead:


```
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
}
```

2.2. Generating Random Strings/IDs

```
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
```

2.3. Random Colors

```
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}
```

