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
  const circle2 = {
    radius: 2,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw: function () {
      console.log("draw");
    },
  };
}

// Factory Function
{
  function createCircle(radius) {
    const circle = {
      radius,  // radius: radius is replaced by (ES6) = radius
      draw: function () {
        console.log("draw" + radius);
      },
    };
    return circle;
  }
}

createCircle(1).draw();
createCircle(2).draw();
