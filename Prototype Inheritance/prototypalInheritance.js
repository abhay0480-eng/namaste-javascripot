const parent = { greet: "Hello" };
const child = Object.create(parent); // child inherits from parent
console.log(child.greet); // "Hello" (inherited from parent)
child.greet = "Hi";
console.log(child.greet); // "Hi" (own property)



function Person(name) {
    this.name = name;
    }


Person.prototype.sayHello = function () {
console.log(`Hello, my namee is ${this.name}`);
};

const abhay = new Person("Abhay");
abhay.sayHello(); // "Hello, my name is Abhay"