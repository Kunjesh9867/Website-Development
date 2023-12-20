const message = "hi";
// When you write message. you will see all the methods that you can use on a string
// But string is a primitive(value) type, so why does it have the properties/methods?

// In JS, we have

// String Primitive
const message2 = "hi";
console.log(typeof message2); // string

// String Object
// String("hi")
const message3 = new String("hi");
console.log(typeof message3); // object

// When we use 'dot notation' javascript internally wrap it as an object


// String Properties
console.log(message.length); // 2
console.log(message[0]); // h
console.log(message[1]); // i
console.log(message.includes("Hi")); // false
console.log(message.startsWith("h")); // true
console.log(message.endsWith("i")); // true
console.log(message.indexOf("i")); // 1
console.log(message.indexOf("e")); // -1
console.log(message.replace("hi", "hello")); // hello
console.log(message.toUpperCase()); // HI
console.log(message.toLowerCase()); // hi
console.log(message.trim()); // hi   // Variation = trimEnd(), trimStart()
console.log(message.split("")); // ["h", "i"]
console.log(message.split(" ")); // ["hi"]


// Escape Notation

// \' = '
// \" = "
// \\ = \
// \n = new line



