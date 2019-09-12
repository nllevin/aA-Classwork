Array.prototype.myEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

// [1,2,3].myEach(el => console.log(el));

Array.prototype.myMap = function (cb) {
  let mapped = [];
  this.myEach( el => {
    mapped.push(cb(el));
  });
  return mapped;
};

// console.log([1,2,3].myMap(el => 10 * el)); // [10, 20, 30]

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  let arr = this;

  if (acc === undefined) {
    acc = this[0];
    arr = arr.slice(1);
  }

  arr.myEach( el => {
    acc = callback(acc, el);
  });

  return acc;
};

// // without initialValue
// console.log([1, 2, 3].myReduce(function (acc, el) {
//   return acc + el;
// })); // => 6

// // with initialValue
// console.log([1, 2, 3].myReduce(function (acc, el) {
//   return acc + el;
// }, 25)); // => 31