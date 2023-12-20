// Remaining
{
    const _radius = new WeakMap();
    // A WeakMap is a dictionary where keys = objects & values = anything
    // The keys are weak: if there are no references to the keys, they will be garbage collected
    class Circle {
        constructor(radius) {
            _radius.set(this, radius);
        }
    }
    const c = new Circle(1);
}
