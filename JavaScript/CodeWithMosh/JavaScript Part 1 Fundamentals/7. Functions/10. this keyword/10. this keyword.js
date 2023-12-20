// method -> object
// function -> global (window[web browser], global[Node])

{
  const video = {
    title: "a",
    play() {
      console.log(this);
    },
  };

  // 'this' refers to the parent object of method
  video.play(); // {title: 'a', play: ƒ}

  // Infact, if we add another method to the object, 'this' will still refer to the parent object
  video.stop = function () {
    console.log(this);
  };
  video.stop(); // {title: 'a', play: ƒ, stop: ƒ}
}

{
  function playVideo() {
    console.log(this);
  }

  playVideo(); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
}

// Constructor Function
{
  function Video(title) {
    this.title = title;
    console.log(this);
  }
  const v = new Video("b"); // Video {title: 'b'}
  //? this is a reference to the new empty object {}
}

//^ Important Concept
{
  const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(function (tag) {
        console.log(this.title, tag);
      });
    },
  };

  video.showTags();
  /*
    undefined a
    undefined b
    undefined c
  */
  // This is because 'this' is inside a function (window object)

  // To fix this, we can use
  /*
        const video = {
            title: "a",
            tags: ["a", "b", "c"],
            showTags() {
            this.tags.forEach(function (tag) {
                console.log(this.title, tag);
            }, this); //^ 'this' is the second argument for forEach
            },
        };
  */
   // Not all methods have a second argument for 'this'
   // We will discuss another way to fix this in the next lecture
}
