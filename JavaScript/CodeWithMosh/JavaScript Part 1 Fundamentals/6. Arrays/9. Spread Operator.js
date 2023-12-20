// In the prevoius lesson, we use 'concat' to combine two arrays.
// In ES6, we can use the Spread Operator to do it.
const first = [1, 2, 3];
const second = [4, 5, 6];

// We are adding the individual elements of the first and second array to the new array.
const combined = [...first, ...second];
console.log(combined); // [1,2,3,4,5,6]

// with the spread operator, there are extra benefits
// If we need to add an element in the middle of the array and at last, we can do it easily.
const combined2 = [...first, "a", ...second, "b"];

// In the prevous lesson, we have used slice to copy the array. combine.slice()
// With the spread operator

// Both are same
const copy = combined2;
const copy2 = [...combined2];

console.log(copy); // [1,2,3,"a",4,5,6,"b"]
console.log(copy2); // [1,2,3,"a",4,5,6,"b"]
