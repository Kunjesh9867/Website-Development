let numbers = [1, 2, 3, 4];

// Solution 1
// numbers = [];
// Remember that, this old array will be in the memory, so if there are no other reference, it will be removed by garbage collector
// If we have reference
// let another = numbers; // Make sure to put it at the top of the file, after numbers declaration
// then it will not be removed by garbage collector

{
  let numbers = [1, 2, 3, 4];
  let another = numbers;
  numbers = [];
  console.log(another); // [1,2,3,4]
  console.log(numbers); // []
}

// Solution 2  Mosh's Favourite
{
  let numbers = [1, 2, 3, 4];
  let another = numbers;

  numbers.length = 0;
  console.log(another); // []
  console.log(numbers); // []
}

// Solution 3
{
  let numbers = [1, 2, 3, 4];
  let another = numbers;

  numbers.splice(0, numbers.length);
  console.log(another); // []
  console.log(numbers); // []
}

// Solution 4
{
  let numbers = [1, 2, 3, 4];
  let another = numbers;

  while (numbers.length > 0) numbers.pop();

  console.log(another); // []
  console.log(numbers); // []

  // Performance Costs 
}
