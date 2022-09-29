
// Function.prototype.inherits = function(parent){
//     function Surrogate(){};
//     Surrogate.prototype = parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

Function.prototype.inherits = function(parent){
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}
function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

MovingObject.prototype.say = function(){
  console.log('Well done');
}
Asteroid.prototype.test = function(){
  console.log('Working??');
}
const a = new Asteroid;
const b = new MovingObject;
b.say();
a.say();
// b.test();
a.test();



