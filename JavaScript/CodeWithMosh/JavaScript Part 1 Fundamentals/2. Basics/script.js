{
  let name;
  console.log(name); // undefined
  let name2 = "Kunjesh";
  console.log(name2); // Kunjesh

  // Cannot be a reserved keyword
  // Should be meaningful
  // Cannot start with a number (1name)
  // Cannot contain a space or hyphen (-)
  // Are case-sensitive

  let firstName; // Camel Case

  // You can declare multiple variables in one line
  let firstName2 = "Kunjesh",
    lastName2 = "Ramani";
  // The best practice is to declare each variable in a separate line
}

//? Constants
{
  let interestRate = 0.3;
  interestRate = 1;
  console.log(interestRate); // 1

  const interestRate2 = 0.3;
  // interestRate2 = 1; // TypeError: Assignment to constant variable.
}

//? Primitive Types
{
  // String
  // Number
  // Boolean
  // undefined is a type and also a value
  // null is a type and (typeof null) is object

  let name = "Kunjesh"; // String Literal
  let age = 30; // Number Literal
  let isApproved = true; // Boolean Literal
  let firstName = undefined; // undefined
  let firstName2; // undefined
  let selectedColor = null; // null
  // In ES6, we have a new primitive type called Symbol
}

//? Dynamic Typing
{
  // There are two types of programming languages
  // 1. Static Typing
  // 2. Dynamic Typing

  // In Static Typing, we have to specify the type of the variable
  // The variable cannot be changed to another type

  // In Dynamic Typing, we don't have to specify the type of the variable
  // The variable can be changed to another type

  let name = "Kunjesh";
  let age = 30;
  let isApproved = true;
  let firstName = undefined;
  let firstName2;
  let selectedColor = null;

  console.log(typeof name); // string
  // Write name=1; and run the code again, you will see the type of name is now number
  // In dyanmic typing, the type of the variable will be determined at runtime based on the value assigned to it.
}

//? Objects
{
  // And object is like a real world object
  // An object is a collection of key-value pairs

  let person = {
    name: "Kunjesh",
    age: 20,
  };

  console.log(person); // {name: "Kunjesh", age: 20}

  // Dot Notation
  person.name = "John";
  console.log(person.name); // John

  // Bracket Notation
  person["name"] = "Mary";
  console.log(person.name); // Mary

  // Bracket Notation is used when we don't know the name of the property
  let selection = "name";
  person[selection] = "Kunjesh";
  console.log(person.name); // Kunjesh
}

//? Arrays
{
  // An array is a data structure that we use to represent a list of items
  let selectedColors = ["red", "blue"];
  console.log(selectedColors); // ["red", "blue"]
  console.log(selectedColors[0]); // red (index starts from 0)

  // The length of the array is dynamic
  selectedColors[2] = 1;
  console.log(selectedColors); // ["red", "blue", 1]

  console.log(typeof selectedColors); // object

  console.log(selectedColors.length); // 3
}

//? Functions
// Functions is used for 2 purposes
// 1. To perform a task
// 2. To calculate a value

{
  // A function is a set of statements that performs a task or calculates a value
  function greet() {
    console.log("Hello World");
  }

  greet(); // Hello World

  function greet2(name) {
    // Here, name is a parameter
    console.log("Hello " + name);
  }
  greet2("Kunjesh"); // Hello Kunjesh => Here, Kunjesh is an argument

  function greet3(name, lastName) {
    console.log("Hello " + name + " " + lastName);
  }
  greet3("Kunjesh", null); // Hello Kunjesh null
  greet3("Kunjesh", true); // Hello Kunjesh true
}

//? Types of Functions
{
  function square(number) {
    return number * number;
  }

  let number = square(2);
  console.log(number); // 4
  // OR
  console.log(square(2)); // 4
}
