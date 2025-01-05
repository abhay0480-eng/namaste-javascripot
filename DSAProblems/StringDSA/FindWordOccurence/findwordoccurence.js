const input = "This is an animal. This is buttery. Promise is an object represention of eventual completion or failure of asynchronous operations.";


/* Using Traditional for Loop */


function analyzeText(input) {
    const words = input.toLowerCase().match(/\b\w+\b/g);
    const letters = input.toLowerCase().replace(/[^a-z]/g, '').split('');
  
    const wordCount = {};
    const letterCount = {};
  
    // Count words
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    // Count letters
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    const repeatedWords = [];
    for (const word in wordCount) {
      if (wordCount[word] > 1) {
        repeatedWords.push(word);
      }
    }
  
    console.log(`Word count - ${repeatedWords.length}`);
    repeatedWords.forEach((word) => {
      console.log(`Word - ${word}`);
    });
  
    console.log("\nRepeating letters:");
    for (const letter in letterCount) {
      console.log(`${letter.toUpperCase()} - ${letterCount[letter]}`);
    }
  }



  /* Using forEach Loop */

function analyzeText(input) {
  const words = input.toLowerCase().match(/\b\w+\b/g);
  const letters = input.toLowerCase().replace(/[^a-z]/g, '').split('');

  const wordCount = {};
  const letterCount = {};

  // Count words
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Count letters
  letters.forEach((letter) => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  const repeatedWords = Object.keys(wordCount).filter((word) => wordCount[word] > 1);

  console.log(`Word count - ${repeatedWords.length}`);
  repeatedWords.forEach((word) => {
    console.log(`Word - ${word}`);
  });

  console.log("\nRepeating letters:");
  Object.keys(letterCount).forEach((letter) => {
    console.log(`${letter.toUpperCase()} - ${letterCount[letter]}`);
  });
}


/* Using reduce Method  */

function analyzeText(input) {
    const words = input.toLowerCase().match(/\b\w+\b/g); // Extract all words
    const letters = input.toLowerCase().replace(/[^a-z]/g, '').split(''); // Extract all letters
  
    // Count occurrences of words using reduce
    const wordCount = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
  
    // Count occurrences of letters using reduce
    const letterCount = letters.reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});
  
    // Find repeated words
    const repeatedWords = Object.keys(wordCount).filter((word) => wordCount[word] > 1);
  
    // Display results
    console.log(`Word count - ${repeatedWords.length}`);
    repeatedWords.forEach((word) => {
      console.log(`Word - ${word}`);
    });
  
    console.log("\nRepeating letters:");
    Object.keys(letterCount).forEach((letter) => {
      console.log(`${letter.toUpperCase()} - ${letterCount[letter]}`);
    });
  }
  
  // Example input
  analyzeText(input);