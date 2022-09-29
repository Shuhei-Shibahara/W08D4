const sum = function(arg1,arg2,arg3,arg4){
  let total = 0;
  for(let i=0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

console.log(sum(1,2,3,4));

const sum2 = function(...numArgs){
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum2(1, 2, 3, 4));



Function.prototype.myBind = function(context, ...bindTimeArgs){
  return (...callTimeArgs) => {
    return this.apply(context, bindTimeArgs.concat(callTimeArgs))
  }
}



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true



function curriedSum(numArgsNeeded){
  let arr = []
  const _curried = function(arg){
    arr.push(arg)
    if (arr.length === numArgsNeeded){
      return arr.reduce((a, b) => a + b, 0)
    } else {
      return _curried
    }
  }
  return _curried
}



function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:

const sum1 = curriedSum(4);
console.log(sum1(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs){
  let arr = []
  const _curried = (args) => {
    arr.push(args)
    if (arr.length === numArgs){
      return this(...arr)
    } else {
      return _curried;
    }
  }
  return _curried;
}

console.log(sumThree.curry(3)(4)(20)(6)); // == 30