// Base object (prototype)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Student subclass
function Student(name, age, major) {
    Person.call(this, name, age); // Call the parent constructor
    this.major = major;
}


// Inherit from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


// Override the introduce method
Student.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I study ${this.major}.`);
};


// Teacher subclass
function Teacher(name, age, subject) {
    Person.call(this, name, age); // Call the parent constructor
    this.subject = subject;
}


// Inherit from Person
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


// Override the introduce method
Teacher.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I teach ${this.subject}.`);
};

const student = new Student('Alice', 20, 'Computer Science');
const teacher = new Teacher('Mr. Smith', 40, 'Mathematics');

student.introduce(); // Output: Hello, my name is Alice, I am 20 years old, and I study Computer Science.
teacher.introduce(); // Output: Hello, my name is Mr. Smith, I am 40 years old, and I teach Mathematics.
                            