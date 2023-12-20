const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers); // [1,2,3,4]
console.log(last); // 4

// Beginning
const first = numbers.shift();
console.log(numbers); // [2,3]
console.log(first); // 1

// Middle
//numbers.splice(2, 1); // [2,3] => no number will be removed as it does not exists
numbers.splice(1, 2);
// 1 = index
// 2 = how many elements to remove
console.log(numbers); // [2]


