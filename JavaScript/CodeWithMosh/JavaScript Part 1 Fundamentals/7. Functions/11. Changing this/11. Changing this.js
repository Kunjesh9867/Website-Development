// Making a variable equal to this
{
  const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
      const that = this;
      this.tags.forEach(function (tag) {
        console.log(that.title, tag);
      });
    },
  };
  video.showTags();
  /*
        a a
        a b
        a c
  */
} // DONT USE THIS APPROACH

{
  function playVideo() {
    console.log(this);
  }
  // We have some method in the functions
  // call(), apply(), bind()
  playVideo.call({ name: "Mosh" }); // this -> {name: 'Mosh'}
  playVideo.apply({ name: "Mosh" }); // this -> {name: 'Mosh'}

  // Difference between call() and apply()
  /*
        If the function has arguments, function(arg1, arg2, arg3)
        In call():
            playVideo.call({ name: 'Mosh' },arg1, arg2, arg3);
        In apply():
            playVideo.apply({ name: 'Mosh' },[arg1, arg2, arg3]);
    */

  // bind()
  // Always Always Always. Returns a new function and sets 'this' to point to the object passed as an argument

  const fn = playVideo.bind({ name: "Mosh" }); // will not point to function
  fn();
  // OR
  playVideo.bind({ name: "Mosh" })();
}

/*
    const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(function (tag) {
        console.log(this.title, tag);
      }.bind(this));
    },
  };
*/

// Starting from ECMA 6, we have arrow functions
// Arrow functions inherit 'this' from the containing function
{
  const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach((tag) => {
        console.log(this.title, tag);
      });
    },
  };
  video.showTags();
}
