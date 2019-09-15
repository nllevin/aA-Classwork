const argsSum = function() {
  // let nums = Array.from(arguments);
  let nums = [].slice.call(arguments);
  return nums.reduce( (sum, num) => sum + num );
};

console.log(argsSum(1, 2, 3));

const restSum = function(...nums) {
  return nums.reduce( (sum, num) => sum + num );
};

console.log(restSum(1, 2, 3));

// myBind

Function.prototype.myArgsBind = function() {
  let context = arguments[0];
  let bindArgs = [].slice.call(arguments, 1);
  let that = this;

  return function() {
    let callArgs = [].slice.call(arguments);
    that.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myRestBind = function(context, ...bindArgs) {
    return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
};

// Sample code to test myBind

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
markov.says.myRestBind(pavlov, "meow", "Kush")();
markov.says.myRestBind(pavlov)("meow", "a tree");
markov.says.myRestBind(pavlov, "meow")("Markov");
const notMarkovSays = markov.says.myRestBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

const curriedSum = function (numArgs) {
    const nums = [];

    const _curriedSum = num => {
        nums.push(num);
        if (nums.length === numArgs) {
            return nums.reduce((sum, num) => sum + num);
        } else {
            return _curriedSum;
        }
    };

    return _curriedSum;
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));

Function.prototype.curryApply = function (numArgs) {
    const args = [];
    const _curry = arg => 
        (args.push(arg) === numArgs) ? this.apply(null, args) : _curry;
    return _curry;
};

const currySum = argsSum.curryApply(3);
console.log(currySum(5)(30)(20));

Function.prototype.curryCall = function (numArgs) {
    const args = [];
    const _curry = arg =>
        (args.push(arg) === numArgs) ? this.call(null, ...args) : _curry;
    return _curry;
};

const curryCallSum = argsSum.curryCall(3);
console.log(curryCallSum(5)(30)(20));