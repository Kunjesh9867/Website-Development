const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];



// The methods from the last lesson will not work here
console.log(courses.includes({ id: 1, name: "a" })); // false
// Here the reference of the above & course details are different



// By looking at the mozilla docs
const search = courses.find(function (argument) {   // This function is called "predicate" or "callback function"
  return argument.name === "a";
});
console.log(search); // { id: 1, name: 'a' }
// If there is no matching => "undefined"



// Similarly, we have findIndex method
// It return the index
// If no matching => -1
const searching2 = courses.findIndex(function (argument) {
  return argument.name === "a";
});
console.log(searching2); // 0 = index
