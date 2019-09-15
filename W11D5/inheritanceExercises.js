// Function.prototype.inherits = function(SuperClass) {
//   const SubClass = this;

//   const Surrogate = function() {};
//   Surrogate.prototype = SuperClass.prototype;
//   SubClass.prototype = new Surrogate();  
//   SubClass.prototype.constructor = SubClass;
// };

Function.prototype.inherits = function(SuperClass) {
    const SubClass = this;

    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
};

function MovingObject() { }

MovingObject.prototype.sharedAction = () => {
  console.log("This is our shared action!");
};

function Ship() { }
Ship.inherits(MovingObject);

// class Ship extends MovingObject {
//   constructor() {}

//   move() {}
// }

function Asteroid() { }
Asteroid.inherits(MovingObject);

Asteroid.prototype.asteroidAction = function () {
  console.log("Only an asteroid could do this!");
};

let ship = new Ship();
let asteroid = new Asteroid();
let movingObject = new MovingObject();

ship.sharedAction();
asteroid.sharedAction();
asteroid.asteroidAction();
// console.log(JSON.stringify(Ship.prototype.__proto__));
// console.log(JSON.stringify(MovingObject.prototype));
// console.log(Ship.prototype.constructor === Ship);
// console.log(Asteroid.prototype instanceof MovingObject);