const numbers = [1, 2, 3, 4];
console.log(numbers.indexOf("a")); // -1
console.log(numbers.indexOf(1)); // 0
// Type of elements matters, if '1' => -1 (because it is a string, not a number)

console.log(numbers.lastIndexOf(1)); // 0

//? What if we want to check if an element exists in the array?
// We can use the .includes() method
// But first lets see the .indexOf() method

console.log(numbers.indexOf(1) !== -1); // if true, then element exists
console.log(numbers.includes(1));

//? What if we want to get the index of element after certain elements?
console.log(numbers.indexOf(1, 2)); // means, search for 1 after index 2 

