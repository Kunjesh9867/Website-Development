// This is the old method of cloning an object
{
  const circle = {
    radius: 1,
    draw() {
      console.log("draw");
    },
  };

  const another = {};
  for (let key in circle) another[key] = circle[key];
  console.log(another);
}

// Object.assign()
{
  const circle = {
    radius: 1,
    draw() {
      console.log("draw");
    },
  };

  const another = Object.assign({}, circle);
  // {}     ->   Source(an object) [it can be empty, with properties]
  // circel ->   target(any number of timesk)
  console.log(another);
}

// Spread
{
  const circle = {
    radius: 1,
    draw() {
      console.log("draw");
    },
  };

  const another = { ...circle };
  console.log(another);
}
