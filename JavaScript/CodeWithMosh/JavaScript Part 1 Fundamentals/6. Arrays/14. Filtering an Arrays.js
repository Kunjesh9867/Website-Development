const numbers = [1, -1, 2, 3];
const moreThanZero = numbers.filter(function (value) {
  return value >= 0;
});
console.log(moreThanZero); // [ 1, 2, 3 ]

// In Real world application, we will be dealing with Objects instead of numbers.
