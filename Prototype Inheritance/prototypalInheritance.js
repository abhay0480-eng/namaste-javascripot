const parent = { greet: "Hello" };
const child = Object.create(parent); // child inherits from parent
console.log(child.greet); // "Hello" (inherited from parent)
child.greet = "Hi";
console.log(child.greet); // "Hi" (own property)



function Person(name) {
    this.name = name;
    }
Person.prototype.sayHello = function () {
console.log(`Hello, my name is ${this.name}`);
};

const abhay = new Person("Abhay");
abhay.sayHello();

// "Hello, my name is Abhay"


// ... existing code ...

// New Product class
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.getDetails = function() {
    return `${this.name} costs $${this.price.toFixed(2)}`;
};

// New Book class that inherits from Product
function Book(name, price, author) {
    Product.call(this, name, price); // Call the parent constructor
    this.author = author;
}

// Set up inheritance
Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

// Add a method to Book
Book.prototype.getDetails = function() {
    return `${this.name} by ${this.author} costs $${this.price.toFixed(2)}`;
};

// Example usage
const book1 = new Book("The Great Gatsby", 10.99, "F. Scott Fitzgerald");
console.log(book1.getDetails()); // "The Great Gatsby by F. Scott Fitzgerald costs $10.99"

// ... existing code ...



function User(name, email){
    this.name = name;
    this.email = email
}

User.prototype.login = function() {
    console.log(`${this.name} has logged in.`);
}


User.prototype.logout = function() {
    console.log(`${this.name} has logged out.`);
}


function Admin(name,email){
    User.call(this,name,email);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.manageUsers = function() {
    console.log(`${this.name} is managing Users`);
    
}

function RegularUser(name, email){
    User.call(this, name, email)
}

RegularUser.prototype = Object.create(User.prototype)
RegularUser.prototype.constructor = RegularUser

RegularUser.prototype.viewContent = function() {
    console.log(`${this.name} is viewing Content`);
    
}

const adminUser = new Admin("Abhay", "abhay@gmail.com")
adminUser.login()
adminUser.manageUsers();    // "Alice is managing users."
adminUser.logout();         // "Alice has logged out."

const regularUser = new RegularUser("Bob", "bob@example.com");
regularUser.login();        // "Bob has logged in."
regularUser.viewContent();  // "Bob is viewing content."
regularUser.logout(); 