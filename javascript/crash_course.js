// console object for output and more
console.log("This is a normal output");
console.error("This is an error");
console.warn("This is a warning");

// varaibles in js, var (global scope), let (local scope), const (immutable local scope)
let score = 10;
score = 11;
console.log(score);

const day_of_month = 09;
// day_of_month = 31 // error because const

// builtin data types
// String, Numbers, Boolean, null, undefined, Symbol
const name = "John"; // String
const age = 30; // Number
const rating = 4.5; // Number
const is_cool = true; // Boolean
const X = null; // null means nothing
const Y = undefined; // undefined type for uninitialized vars
let Z;
// to cheeck type of something
console.log(typeof z);

// string operations
console.log("My name is " + name + " and I am " + age);
const greetings = `My name is ${name} and I am ${age}`;
console.log(greetings);
const s = "Hello World!";
console.log(s.length);
console.log(s[0]); // strings as arrays
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.split(" ")); // split on every letter by default

/* arrays in js */
// const numbers = new Array[1, 2, 3, 4, 5];
// data types do not need to be consistent in arrays
const mix = ["stings", 4, true];
console.log(mix);
const fruits = ["apples", "oranges", "pears"];
console.log("fruits[0] is ", fruits[0]); // arrays are zero indexted
fruits.push("mangos"); // add element to the last
fruits.unshift("strawberries"); // add element to the start of array
console.log(fruits);
console.log("index of ogranges is ", fruits.indexOf("oranges"));
console.log(Array.isArray(fruits)); // to check if something is array

// object literals, notice, keys are not strings
const person = {
  firstName: "john",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};
console.log(person);
console.log("using dot notation for object ", person.hobbies[1]);
person.email = "doe@gmail.com"; // add new property to object

// destructuring from js object
const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(
  "destructuring embeded object in person to get a property, address: {city} ",
  city
);

// arrays of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false,
  },
];
console.log(todos);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loops
for (let i = 0; i < 5; i++) {
  console.log(`for loop iteration number ${i}`);
}
for (let todo of todos) {
  console.log(todo.text);
}
// while loop
let i = 0;
while (i < 5) {
  console.log(`while loop iteration number ${i}`);
  i++;
}

// other high level operations on arrays
//forEach apply a function to each element in an array
todos.forEach(function (todo) {
  console.log(todo);
});
// returns an array after applying a function to each item
const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);
// return an array after applying a filter
const todoCompleteted = todos.map(function (todo) {
  return todo.isCompleted == true;
});
console.log(todoCompleteted);

// conditionals
const x = "10";
if (x == 10) {
  console.log("two eqaul only matches value");
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

if (x === 10) {
  console.log("x is 10");
} else {
  console.log("three equals also match data types");
  console.log("x is string 10");
}

// ternary operator
const x1 = 10;
const color = x1 > 10 ? "red" : "blue";
console.log(color);

// switch statements
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
}

// functions
function addNums(num1, num2) {
  console.log(`function addNums called with arguments ${num1} and ${num2}`);
  console.log("result is", num1 + num2);
}
addNums(5, 4);

// arrow function, if one statement, don't need to use curly bracees, also no need for return keyword if one statement
const addNums1 = (num1, num2) => {
  console.log(
    `arrow function addNums called with arguments ${num1} and ${num2}`
  );
  console.log("result is", num1 + num2);
};

// OOP in js
// objects using constructor functions
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

Person.prototype.getFullYear = function () {
  return this.dob.getFullYear();
};

// instantiate an object
const person1 = new Person("john", "Doe", "1980-1-15");
console.log(person1);
console.log(person1.getFullName());

// using class
class Emp {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getFullYear() {
    return this.dob.getFullYear();
  }
}

