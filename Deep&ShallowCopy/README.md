# Deep Copying vs. Shallow Copying

Deep copying and shallow copying are essential concepts in JavaScript. A **deep copy** means that all values of the new variable are copied and disconnected from the original variable. A **shallow copy** means that certain (sub-)values are still connected to the original variable.

## Understanding JavaScript Value Storage

### Primitive Data Types

Primitive data types include the following:

- **Number** — e.g. `1`
- **String** — e.g. `'Hello'`
- **Boolean** — e.g. `true`
- **undefined**
- **null**

When you create these values, they are tightly coupled with the variable they are assigned to. They only exist once, meaning you do not have to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy. 

**Example:**

```
const a = 5;
let b = a; // this is the copy
b = 6;
console.log(b); // 6
console.log(a); // 5
```

### Composite Data Types — Objects and Arrays

Composite data types, such as objects and arrays, are stored just once when instantiated. Assigning a variable creates a pointer (reference) to that value.

If we make a copy `b = a`, and change some nested value in `b`, it actually changes `a`’s nested value as well, since `a` and `b` point to the same object.

**Example:**

```

const a = {
en: 'Hello',
de: 'Hallo',
es: 'Hola',
pt: 'Olà'
};
let b = a;
b.pt = 'Oi';
console.log(b.pt); // Oi
console.log(a.pt); // Oi
```


## Making Copies of Objects and Arrays

### Objects

There are multiple ways to make copies of objects in JavaScript.

#### Spread Operator

Introduced with ES2015, the spread operator is a concise way to create a new object by spreading out all values.

**Example:**

```
const a = {
en: 'Bye',
de: 'Tschüss'
};
let b = {...a};
b.de = 'Ciao';
console.log(b.de); // Ciao
console.log(a.de); // Tschüss
```


#### Object.assign

Before the spread operator, `Object.assign` was commonly used to copy objects. Be cautious, as the first argument in `Object.assign()` gets modified and returned.

**Example:**

```
const a = {
en: 'Bye',
de: 'Tschüss'
};
let b = Object.assign({}, a);
b.de = 'Ciao';
console.log(b.de); // Ciao
console.log(a.de); // Tschüss
```


### Pitfall: Nested Objects

When copying objects with nested structures, both methods above will not copy nested objects, leading to shallow copies.

**Example:**

```
const a = {
foods: {
dinner: 'Pasta'
}
};
let b = {...a};
b.foods.dinner = 'Soup'; // changes for both objects
console.log(b.foods.dinner); // Soup
console.log(a.foods.dinner); // Soup
```


To make a deep copy of nested objects, you need to manually copy all nested objects.

**Example:**

```
et b = {foods: {...a.foods}};
b.foods.dinner = 'Soup';
console.log(b.foods.dinner); // Soup
console.log(a.foods.dinner); // Pasta

```


### Deep Copies Without Thinking

If you don’t know how deep the nested structures are, you can use `JSON.stringify` and `JSON.parse` to create a deep copy.

**Example:**

```
et b = JSON.parse(JSON.stringify(a));
b.foods.dinner = 'Soup';
console.log(b.foods.dinner); // Soup
console.log(a.foods.dinner); // Pasta
```


### Arrays

Copying arrays is similar to copying objects.

#### Spread Operator

You can use the spread operator to copy an array.

**Example:**

```
const a = [1, 2, 3];
let b = [...a];
b[1] = 4;
console.log(b[1]); // 4
console.log(a[1]); // 2

```



#### Array Functions — map, filter, reduce

These methods return a new array with all (or some) values of the original one.

**Example:**

```
const b = a.map((el, index) => index === 1 ? 4 : el);
console.log(b[1]); // 4
console.log(a[1]); // 2

```

#### Array.slice

Using `array.slice()` or `array.slice(0)` creates a copy of the original array.

**Example:**

```
let b = a.slice(0);
b[1] = 4;
console.log(b[1]); // 4
console.log(a[1]); // 2
```

### Nested Arrays

Similar to objects, using the methods above to copy an array with another array or object inside will generate a shallow copy. To prevent that, use `JSON.parse(JSON.stringify(someArray))`.

