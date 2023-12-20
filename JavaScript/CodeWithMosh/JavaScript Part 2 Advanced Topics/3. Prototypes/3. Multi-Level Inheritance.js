function Circle(radius) {
    this.radius = radius;
    function draw() {
        console.log('draw');
    }
};

const circle = new Circle(1);