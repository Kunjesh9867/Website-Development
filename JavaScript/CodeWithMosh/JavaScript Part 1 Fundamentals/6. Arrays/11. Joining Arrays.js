// 'join' method joins all the elements of an array into a string.
// Default separator is a comma.

const numbers = [1, 2, 3];
const joined = numbers.join(",");
console.log(joined); // 1,2,3
console.log(typeof joined); // string

// Another method that come handy = 'split' method.
// Split is used to split a string and convert it into an array.
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts); // ["This", "is", "my", "first", "message"]

// This technique is useful when we make a URL slug.
// URL does not contain spaces, so we can replace spaces with a dash using this technique.

// This is the array now 
// We can use 'join'
const combined = parts.join("-");
console.log(combined); // This-is-my-first-message