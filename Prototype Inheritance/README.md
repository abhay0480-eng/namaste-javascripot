# Prototype and Prototypal Inheritance in JavaScript

## 1. What is a Prototype?
Every JavaScript object has an internal property called `[[Prototype]]`. A prototype is an object from which other objects inherit properties and methods.

## 2. What is Prototypal Inheritance?
Prototypal inheritance allows an object to inherit properties and methods from another object through the prototype chain. This can be visualized as a chain of objects where one object can "borrow" functionality from another.

## 3. How Does it Work?
When accessing a property or method, JavaScript follows this order:
1. It first checks the object itself.
2. If not found, it looks in the object's prototype.
3. This process continues up the prototype chain until it reaches `null`, which signifies the end of the chain.

### Example:

```
const parent = { greet: "Hello" };
const child = Object.create(parent); // child inherits from parent
console.log(child.greet); // "Hello" (inherited from parent)
child.greet = "Hi";
console.log(child.greet); // "Hi" (own property)

```


## 4. Why is it Useful?
- **Code Reuse**: Instead of duplicating methods for every object, define them once in the prototype.
- **Memory Efficiency**: Shared methods are stored in one place rather than copied to each object.

### Example:

``` 
function Person(name) {
this.name = name;
}

Person.prototype.sayHello = function () {
console.log(Hello, my name is ${this.name});
};

const abhay = new Person("Abhay");
abhay.sayHello(); // "Hello, my name is Abhay"
```



## Key Points to Remember
- Every function in JavaScript has a prototype property, which is used when creating objects via `new`.
- Objects can inherit from other objects using `Object.create` or a constructor function with `new`.
- The prototype chain stops at `Object.prototype`, which is the top-level prototype.
- If a property or method isn’t found in the chain, it returns `undefined`.

### Prototype Chain Visualization:

child --> parent --> Object.prototype --> null


## 5. Why Prototypal Inheritance is Powerful
- **Efficiency**: Methods like `sayHello` are stored in one place (the prototype), not in every individual object.
- **Extensibility**: You can add new shared methods by updating the prototype, and all inheriting objects can use them.