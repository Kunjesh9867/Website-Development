const first = [1, 2, 3];
const second = [4, 5, 6];

// Combine
const combine = first.concat(second); // [1,2,3,4,5,6]

// Slice
const slice = combine.slice(2, 4); // [3,4]
//                         startIndex, endIndex(excluded)

{
  // Combine

  // In Reference type, the value is not copied, but the reference is copied.
  // So, if we change the value of the original array, the value of the copied array will also change.
  // This is called Shallow Copy.
  // To avoid this, we can use Deep Copy.
  // Deep Copy is a bit complex, so we will use a simple method to do it.
  // We will use the Spread Operator to do it.

  // Shallow Copy
  const first = [{ id: 1 }];
  const second = [4, 5, 6];
  const combine = first.concat(second);
  first.id = 10;
  console.log(first); // [{id:10}]
  console.log(combine); // [{id:10},4,5,6] => the value of the first array is changed

  // The same thing is applied to "splice"
}

const combine2 = combine.slice() // [1,2,3,4,5,6] => copy the entire array
