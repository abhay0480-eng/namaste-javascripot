# JavaScript Concepts and Challenges

## Table of Contents

1. [Core JavaScript Concepts](#core-javascript-concepts)
   - [Local Storage](#local-storage)
   - [Prototype and Prototypal Inheritance](#prototype-and-prototypal-inheritance)
   - [Event Bubbling and Capturing](#event-bubbling-and-capturing)
   - [Event Delegation](#event-delegation)
   - [Call, Apply, Bind](#call-apply-bind)
   - [Polyfill for Bind](#polyfill-for-bind)
   - [Function Currying](#function-currying)
   - [Understanding "this"](##understanding-this)
     - ["this" in Global Space](#this-in-global-space)
     - ["this" Inside a Function](#this-inside-a-function)
     - ["this" in Strict Mode](#this-in-strict-mode)
   - [Promises](#promises)
     - [Promise.all, Promise.allSettled, Promise.race, and Promise.any](#promiseall-promiseallsettled-promiserace-and-promiseany)
   - [Async/Await](#asyncawait)
   - [Array Methods](#array-methods)
     - [map, filter, reduce](#map-filter-reduce)
     - [Higher-Order Functions (HOF)](#higher-order-functions-hof)
     - [Callback Functions](#callback-functions)
   - [Closures](#closures)
   - [Deep Copy and Shallow Copy](#deep-copy-and-shallow-copy)
   - [this Keyword in Functions and Arrow Functions](#this-keyword-in-functions-and-arrow-functions)




2. [Machine Coding Challenges](#machine-coding-challenges)
   
   1. Create a Dynamic Todo List App

      Problem Statement:
      1. Build a Todo List application with the following features:
         •	Add a task with a name and description.
         •	Mark tasks as completed.
         •	Edit a task.
         •	Delete a task.
         •	Filter tasks by their completion status (All, Completed, Pending).

         Requirements:
            •	Use React functional components and hooks (useState, useEffect).
            •	Maintain proper folder structure (e.g., components, utils, etc.).
            •	Ensure a responsive UI with basic styling.

   2. Swapping of complete todo to incomplete and vice versa and also impletenment search todo with debuncing  

   3. const arr = [[1,2,3], [2,3,4], [3,4,5]] find unique elements in new array list



3. [Code Snippet Questions](#code-snippet-questions)

4. [Data Structures and Algorithms (DSA) Topics](#data-structures-and-algorithms-dsa-topics)
   - [Basic DSA Problems](#basic-dsa-problems)
   - [Array-Based Questions](#array-based-questions)
   - [String-Based Questions](#string-based-questions)
   - [Object-Based Questions](#object-based-questions)

---

## Core JavaScript Concepts

### Local Storage
- Understanding how to store data in the browser using the Web Storage API.

### Prototype and Prototypal Inheritance
- Exploring JavaScript's prototype chain and how inheritance works.

### Event Bubbling and Capturing
- Learning about the event propagation model in the DOM.

### Event Delegation
- Implementing event delegation to optimize event handling.

### Call, Apply, Bind
- Understanding the differences and use cases for these function methods.

### Polyfill for Bind
- Creating a polyfill for the `bind` method to ensure compatibility.

### Function Currying
- Transforming a function with multiple arguments into a sequence of functions.

### Understanding "this"
- Exploring the context of `this` in different scenarios.

#### "this" in Global Space
- How `this` behaves in the global execution context.

#### "this" Inside a Function
- Understanding how `this` is determined within regular functions.

#### "this" in Strict Mode
- The behavior of `this` when using strict mode in JavaScript.

### Promises
- Creating and consuming promises for asynchronous operations.

#### Promise.all, Promise.allSettled, Promise.race, and Promise.any
- Understanding the different methods for handling multiple promises.

### Async/Await
- Simplifying asynchronous code using async/await syntax.

### Array Methods
- Exploring common array methods in JavaScript.

#### map, filter, reduce
- Understanding how to manipulate arrays using these methods.

#### Higher-Order Functions (HOF)
- Functions that take other functions as arguments or return them.

#### Callback Functions
- Understanding the role of callbacks in asynchronous programming.

### Closures
- Exploring how closures work and their use cases.

### Deep Copy and Shallow Copy
- Understanding the differences between deep and shallow copies of objects.

### this Keyword in Functions and Arrow Functions
- Comparing how `this` behaves in regular functions versus arrow functions.

---

## Machine Coding Challenges

### 1. Create a Dynamic Todo List App

**Problem Statement**:  
Build a Todo List application with the following features:
- Add a task with a name and description.
- Mark tasks as completed.
- Edit a task.
- Delete a task.
- Filter tasks by their completion status (All, Completed, Pending).

**Requirements**:
- Use React functional components and hooks (useState, useEffect).
- Maintain a proper folder structure (e.g., components, utils, etc.).
- Ensure a responsive UI with basic styling.

---

### 2. Swapping Todo Completion Status

**Problem Statement**:  
Implement functionality to swap the completion status of a todo item from completed to incomplete and vice versa. Additionally, implement a search feature for todos with debouncing.

---

### 3. Find Unique Elements in a Nested Array

**Problem Statement**:  
Given a nested array, find unique elements and return them in a new array.

**Example**:
```javascript
const arr = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
// Output: [1, 2, 3, 4, 5]
```

---

## Code Snippet Questions

1. **Arrow Function vs Regular Function**
   ```javascript
   var obj = {
       i: 10,
       b: () => console.log(this.i, this),
       c: function() {
           console.log(this.i, this);
       }
   }
   obj.b(); // Output: undefined, Window object
   obj.c(); // Output: 10, obj



   console.log("5"+3); // 53
   console.log(5+"3"); // 53
   console.log(5+true); // 6
   console.log(5+false); // 5
   console.log("5"-3); // 2
   console.log(5-"3"); // 2
   console.log("5"*3); // 15
   console.log(5*"3"); // 15
   ```

2. **Delete Operator**
   ```javascript
   delete obj; // Deletes the entire object
   delete obj.i; // Deletes the property i from obj
   ```

3. **Null vs Undefined**
   ```javascript
   null == undefined; // true
   ```

4. **Closure Example**
   ```javascript
   function x() {
       var a = 7;
       function y() {
           console.log(a);
       }
       a = 100;
       return y;
   }
   var z = x();
   console.log(z); // Outputs the function y
   z(); // Outputs: 100
   ```

5. **Prototypal Inheritance**
   ```javascript
   function Animal() {
       this.type = 'Animal';
   }
   Animal.prototype.getType = function() {
       return this.type;
   };
   var dog = new Animal();
   console.log(dog.getType()); // Output: Animal
   ```

6. **Function Scope Issue**
   ```javascript
   function createFunctions() {
       var funcs = [];
       for (var i = 0; i < 3; i++) {
           funcs[i] = function() {
               console.log(i);
           };
       }
       return funcs;
   }
   var functions = createFunctions();
   functions[0](); // Output: 3
   functions[1](); // Output: 3
   functions[2](); // Output: 3
   ```

7. **Context Loss**
   ```javascript
   var obj = {
       value: 10,
       getValue: function() {
           return this.value;
       }
   };
   var getValue = obj.getValue;
   console.log(getValue()); // Output: undefined
   ```

---

## Data Structures and Algorithms (DSA) Topics

### Basic DSA Problems
1. **Find the Maximum and Minimum Values in an Array**
2. **Count Frequency of Elements in an Array** (using basic and using `.reduce`)
3. **Remove Duplicates from an Array** (using basic method, using Set, and using `.filter`)
4. **Flatten a Nested Array** (One Level Deep)

### Array-Based Questions

#### Basic
1. **Remove Duplicates from an Array**
   - **Scenario:** A user selects multiple items from a dropdown, but some selections are repeated.
   - **Example:** 
     - Input: `[1, 2, 2, 3, 4, 4]`
     - Output: `[1, 2, 3, 4]`

2. **Sum of All Numbers in an Array**
   - **Scenario:** Calculate the total price of items in a shopping cart.
   - **Example:** 
     - Input: `[10, 20, 30, 40]`
     - Output: `100`

#### Intermediate
3. **Find the Maximum Subarray Sum (Kadane’s Algorithm)**
   - **Scenario:** Analyze sales data to find the period with the highest total sales.
   - **Example:** 
     - Input: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
     - Output: `6` (Explanation: `[4, -1, 2, 1]` has the maximum sum.)

4. **Rotate an Array by K Positions**
   - **Scenario:** In a carousel, shift the displayed images by a certain number of positions.
   - **Example:** 
     - Input: `arr = [1, 2, 3, 4, 5], k = 2`
     - Output: `[4, 5, 1, 2, 3]`

#### Advanced
5. **Find All Pairs with a Given Sum**
   - **Scenario:** Find all product combinations within a price limit in an e-commerce app.
   - **Example:** 
     - Input: `arr = [1, 2, 3, 4, 5], target = 6`
     - Output: `[[1, 5], [2, 4]]`

6. **Trapping Rainwater Problem**
   - **Scenario:** Calculate the amount of water trapped between skyscrapers after a rainstorm.
   - **Example:** 
     - Input: `arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]`
     - Output: `8`

### String-Based Questions

#### Basic
1. **Count the Number of Vowels and Consonants**
   - **Scenario:** Analyze a product review to identify vowels and consonants.
   - **Example:** 
     - Input: `"hello world"`
     - Output: `{ vowels: 3, consonants: 7 }`

2. **Reverse Each Word in a Sentence**
   - **Scenario:** Implement a “mirror text” feature for a chat application.
   - **Example:** 
     - Input: `"hello world"`
     - Output: `"olleh dlrow"`

#### Intermediate
3. **Check for Anagrams**
   - **Scenario:** Verify if two usernames are anagrams to prevent duplicates.
   - **Example:** 
     - Input: `"listen", "silent"`
     - Output: `true`

4. **Longest Palindromic Substring**
   - **Scenario:** Highlight the longest palindrome in a user’s text input.
   - **Example:** 
     - Input: `"babad"`
     - Output: `"bab"` or `"aba"`

#### Advanced
5. **Minimum Window Substring**
   - **Scenario:** Find the shortest substring containing all required characters (e.g., for a search feature).
   - **Example:** 
     - Input: `s = "ADOBECODEBANC", t = "ABC"`
     - Output: `"BANC"`

6. **Group Anagrams**
   - **Scenario:** Group similar search queries in a search history feature.
   - **Example:** 
     - Input: `["eat", "tea", "tan", "ate", "nat", "bat"]`
     - Output: `[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`

### Object-Based Questions

#### Basic
1. **Count the Occurrence of Each Word**
   - **Scenario:** Analyze user comments to find the most frequently used words.
   - **Example:** 
     - Input: `"this is a test this is only a test"`
     - Output: `{ this: 2, is: 2, a: 2, test: 2, only: 1 }`

2. **Convert an Object to a Query String**
   - **Scenario:** Create a query string from a filter object for API requests.
   - **Example:** 
     - Input: `{ name: "Alice", age: 25 }`
     - Output: `"name=Alice&age=25"`

#### Intermediate
3. **Flatten a Nested Object**
   - **Scenario:** Transform nested API data into a flat structure for easier manipulation.
   - **Example:** 
     - Input: `{ a: { b: { c: 1 } } }`
     - Output: `{ "a.b.c": 1 }`

4. **Find the Deepest Nested Key in an Object**
   - **Scenario:** Navigate a complex configuration object to find the most deeply nested setting.
   - **Example:** 
     - Input: `{ a: { b: { c: { d: 5 } } } }`
     - Output: `{ key: "d", value: 5 }`

#### Advanced
5. **Implement a Debounce Function**
   - **Scenario:** Prevent multiple API calls when a user types in a search box.
   - **Example:** 
     - Input: A function to call on input.
     - Output: Only one API call after the user stops typing.

6. **Deep Compare Two Objects**
   - **Scenario:** Verify if two API responses have the same data.
   - **Example:** 
     - Input: 
       ```javascript
       obj1 = { a: 1, b: { c: 2 } }
       obj2 = { a: 1, b: { c: 2 } }
       ```
     - Output: `true`