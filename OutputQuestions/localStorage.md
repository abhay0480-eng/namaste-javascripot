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

11. **Output Question**:
```javascript
   let str = "jscafe"
   str[0] = "p"
   console.log(str)
```
**Question**: What will be the output of the two console logs?

console.log("5"+3);
console.log(5+"3");
console.log(5+true);
console.log(5+false);
console.log("5"-3);
console.log(5-"3");
console.log("5"*3);
console.log(5*"3");




console.log(5 > '15' < 5);
console.log(7 < '15' < 5);
console.log(7 < '85' > 5);


// let str = "jscafe"
// str[0] = "p"
// console.log(str)


// console.log(5 > '15' < 5);
// console.log(7 < '15' < 5);
// console.log(7 < '85' > 5);


// console.log(1);

// setTimeout(()=>{
//     console.log(2);
    
// },1000)



// setTimeout(()=>{
//     console.log(3);
    
// },0)

// console.log(4);



// numb = 6

// console.log(numb);

// let numb;


// console.log(typeof typeof 1);


// const numbers = [1,2, 3, 4]
// const [y] = numbers;

// console.log(y);



// let a = 3;
// let b = new Number(3);

// console.log(a==b);
// console.log(a===b);




// console.log(3+4+'5');


// let numb = 0
// console.log(numb++);
// console.log(++numb);


// function fnc(){
//     try {
//         console.log(1);
        
//     } catch (error) {
//         console.log(2);
        
//     } finally {
//         console.log(3);
        
//     }
//     console.log(4);
    
// }

// fnc()


// console.log([] == []);




// const namee = "Abhay";
// age = 21

// console.log(delete namee);
// console.log(delete age);



// let newList = [1].push(2);
// console.log(newList);

// console.log(newList.push(3));



// var employeeId = 'abc'

// function foo(){
//     employeeId = "123"
//     return ;

//     function employeeId(){

//     }
// }
// foo()
// console.log(employeeId);


// const a = {}
// const b = {key: "b"}
// const c = {key: "c"}

// a[b] = 123
// a[c] = 234

// console.log(a[b]);

// const a = {
//     count: 0
// }
// const b = a;
// b.count = a.count++

// console.log(b.count, a.count);

// let a = 5;
// let b = a++;
// console.log(a, b);

// console.log(a+b);

// var x=1
// console.log(x);

// function x(){
//     console.log("2");
    
// }
// x()


// var arrA = [1,2,3,4]
// var arrB = arrA.slice()
// arrB[0] = 0;
// console.log(arrA);


// let person = {name: 'sai'}
// const members = [person]
// person = null;
// console.log(members);
// console.log(person);



// const box = {
//     x: 5, y: 10
// }

// Object.freeze(box);
// box.x = 100;

// console.log(box);


// console.log([1,2] + ![]);

// let x = "Learn"
// console.log(x.substring(5,1));


// let a = [];
// let b = false;
// console.log(a == b);


// const data = {
//     name: "bbh",
//     name: "bnhg"
// }
// console.log(data.name);


// let a = [1,4]
// let b = [2,8]
// console.log(a+b);


// let x; // x to satisfy condition

// let x={
// flag: 1,
// toString: function(){
//     return this.flag++
// }
// }
// console.log(x);
// console.log(x);
// console.log(x);


// if(x==1 && x==2 && x==3){
//     console.log("hello");
    
// }


















