# Output Questions on Local Storage in JavaScript

1. **Storing and Retrieving a Number**:
   ```javascript
   localStorage.setItem("number", 123);
   console.log(localStorage.getItem("number") === 123);
   ```
   **Question**: What will be the output of the console log?

2. **Handling Missing Keys**:
   ```javascript
   console.log(localStorage.getItem("missingKey") === null);
   localStorage.setItem("key", null);
   console.log(localStorage.getItem("key") === null);
   ```
   **Question**: What will be the output of the two console logs?

3. **Storing Objects**:
   ```javascript
   const obj = { name: "Alice" };
   localStorage.setItem("user", obj);
   console.log(localStorage.getItem("user"));
   ```
   **Question**: What will be the output of the console log?

4. **Overwriting Local Storage Values**:
   ```javascript
   localStorage.setItem("test", "hello");
   localStorage.test = "world";
   console.log(localStorage.getItem("test"));
   ```
   **Question**: What will be the output of the console log?

5. **Iterating Over Local Storage**:
   ```javascript
   localStorage.setItem("key1", "value1");
   localStorage.setItem("key2", "value2");
   for (const key in localStorage) {
     if (key === "key1") {
       console.log(localStorage[key]);
     }
   }
   ```
   **Question**: What will be the output of the console log?

6. **Handling Large Strings**:
   ```javascript
   let largeString = "a".repeat(5 * 1024 * 1024); // ~5MB string
   try {
     localStorage.setItem("large", largeString);
     console.log("Success");
   } catch (error) {
     console.log("Failed");
   }
   ```
   **Question**: What will be the output of the console log?

7. **Clearing Local Storage**:
   ```javascript
   localStorage.setItem("key1", "value1");
   localStorage.setItem("key2", "value2");
   localStorage.clear();
   console.log(localStorage.getItem("key1"));
   console.log(localStorage.length);
   ```
   **Question**: What will be the output of the two console logs?

8. **Storing Undefined Values**:
   ```javascript
   localStorage.setItem("key", undefined);
   console.log(localStorage.getItem("key"));
   ```
   **Question**: What will be the output of the console log?

9. **Updating Keys**:
   ```javascript
   let key = "test";
   localStorage.setItem(key, "value1");
   key = "updatedTest";
   localStorage.setItem(key, "value2");
   console.log(localStorage.getItem("test"));
   console.log(localStorage.getItem("updatedTest"));
   ```
   **Question**: What will be the output of the two console logs?

10. **Removing Items from Local Storage**:
    ```javascript
    localStorage.setItem("a", "1");
    localStorage.setItem("b", "2");
    console.log(localStorage.length);
    localStorage.removeItem("a");
    console.log(localStorage.length);
    ```
    **Question**: What will be the output of the two console logs?