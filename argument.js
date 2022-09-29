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
markov.says.myBind(pavlov)("meow", "a tree");


Function.prototype.myBind = function(context, ...bindTimeArgs){
  return (...callTimeArgs) => {
    return this.apply(context, bindTimeArgs.concat(callTimeArgs))
  }

}

class Cat{
  constructor(){
    this.name = 'A Cat';
  }
}

func = function (obj) {
  console.log(`${obj.name} does not like food ${this.name}`)
};
class Human{
  constructor(){
    this.name = 'A Human';
  }
}

const person1 = new Human();
const cat1 = new Cat();
const boundFunc = func.bind(person1);
console.log(boundFunc(cat1));
// person1.func('mike', 'paulo');
// func('mike').bind(cat1);
// func.myBind()

setTimeout(function1, 1000)