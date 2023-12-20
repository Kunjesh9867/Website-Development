const canEat = {
    eat: function () {
        this.hunger--;
        console.log("eating");
    },
};

const canWalk = {
    walk: function () {
        console.log("walking");
    },
};

const person = Object.assign({}, canEat, canWalk);
console.log(person);
// {eat: ƒ, walk: ƒ}

function Person() {}

Person.prototype = Object.assign({}, canEat, canWalk);
