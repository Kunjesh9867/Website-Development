//? Basics
{
  // let radius = 1;
  // let x = 1;
  // let y = 1;

  // Object Oriented Programming (OOP)
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

  circle.draw(); // Method
  

  console.log(circle["location"]["x"]); // Bracket Notation
  console.log(circle.location.x); // Dot Notation
}

// In OOP language, if the function is part of a object, we call it a method.
// Like Java, in which we defines METHODS in a CLASS(Main) .







