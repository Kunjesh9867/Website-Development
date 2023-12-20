{
  const circle = {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw: function () {
      console.log("draw");
    },
  };
  console.log(circle["location"]["x"]);
}



{
  const arr = [0, 1, 2, 3];
  arr[5] = 5;
  console.log(arr);
  // Browser: [0, 1, 2, 3, empty, 5]
  // Node: [0, 1, 2, 3, <1 empty item>, 5]
}



// Slicing of Array
{
  const arr = [0, 1, 2, 3, 4, 5];
  const slice = arr.slice(0, 0);
  console.log(slice); // []

  const slice2 = arr.slice(6, 8);
  console.log(slice2); // []

  const slice3 = arr.slice(0, -1);
  console.log(slice3); // [0, 1, 2, 3, 4]

  const slice4 = arr.slice(0, -2);
  console.log(slice4); // [0, 1, 2, 3]

  const slice5 = arr.slice(-3, -2);
  console.log(slice5); // [3]

  console.log(arr[-1]); // undefined
  console.log(arr[1 - arr.length]); // undefined
  // 1 - 6 = -5
}
