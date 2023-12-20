// Arrays
{
  const numbers = [2, 3, 1];
  numbers.sort();
  console.log(numbers); // [1, 2, 3]

  // If we want to sort in reverse order, we can use 'reverse' method.
  numbers.reverse();
  console.log(numbers); // [3, 2, 1]
}

// Objects
// In case of objects, we have to do some extra work.
{
  const courses = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "JavaScript" },
  ];

  // Task: We want JavaScript before Node.js
  // We cannot use 'sort' method.
  courses.sort();
  console.log(courses); // [ { id: 1, name: 'Node.js' }, { id: 2, name: 'JavaScript.js' } ]
}

{
  const courses = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "JavaScript" },
    //{ id: 3, name: "Kunjesh" },
  ];
  courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  console.log(courses); // [ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ]
}
