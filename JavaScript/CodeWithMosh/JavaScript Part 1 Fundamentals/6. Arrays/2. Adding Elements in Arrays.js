const numbers = [3, 4];
// numbers =[]; // error because const can't be reassigned
// However, we can change the elements of the array

// Earlier, we have learned that arrays are objects
// So, by using . notation, we can see all the properties of the array

// End
numbers.push(5, 6);
console.log(numbers); // [3, 4, 5, 6]

// Beginning
numbers.unshift(1, 2);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Middle
numbers.splice(2, 0, "a", "b");
//            start, deleteCount, items to add
console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5, 6]
