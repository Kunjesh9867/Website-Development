const numbers = [1, 2, 3];

for (let i of numbers) {
  console.log(i);
}

// In many example available online, they use "forEach" loop.
// Each array has a method called "forEach".  array.forEach()
// This method takes a function as an argument.

// Function Declaration
numbers.forEach(function (i) {
  console.log(i);
});

// Arrow function - 1
numbers.forEach((i) => {
  console.log(i);
});
// Arrow Function - 2
numbers.forEach((i) => console.log(i));



// forEach also take 2nd parameter, index
numbers.forEach((index, i) => console.log(index, i));
//                                          1    0
//                                          2    1
//                                          3    2
numbers.forEach((i, index) => console.log(index, i));
//                                          0    1
//                                          1    2
//                                          2    3

// We can also use for-in loop to iterate an array.
// Personal Preference 