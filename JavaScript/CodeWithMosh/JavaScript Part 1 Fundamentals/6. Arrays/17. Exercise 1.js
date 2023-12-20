// Exercise: 1 - Array from Range

// Output:
// arrayFromRange(1,4) => [1,2,3,4]
// arrayFromRange(-10,-4) => [-10,-9,-8,-7,-6,-5,-4]

const numbers = arrayFromRange(-10, -9);
console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (min; min <= max; min++) {
    output.push(min);
  }
  return output;
}
