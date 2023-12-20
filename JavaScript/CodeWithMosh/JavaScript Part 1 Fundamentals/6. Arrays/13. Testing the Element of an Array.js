// ES6: every() method = All elements in the array are positive.
{
  const numbers = [1, 2, 3];
  const allPositive = numbers.every(function (value) {
    return value >= 0;
  });
  console.log(allPositive); // true
  // If numbers = [1,-1,2,3] => false
}

// ES6: some() method = Atleast one element in the array is positive.
{
  const numbers = [-1, -2, 1];
  const atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
  });
  console.log(atLeastOnePositive); // true
  // If numbers = [-1,-2,-3] => false
}
