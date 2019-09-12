Array.prototype.range = function (start, end) {
  // base case
  if (start === end) {
    return [this[start]];
  }

  // inductive step
  return [this[start]].concat(this.range(start + 1, end));
};

// console.log([0, 1, 2, 3, 4, 5].range(2, 4)) // => [2, 3, 4]

function sumRec (arr) {
  // base case
  if (arr.length === 0) {
    return 0;
  }

  // inductive step
  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([10, 20, 30])); // => 60


function exponent1(base, exp) {
    if (exp === 0) {
        return 1;
    }

    return base * exponent1(base, exp-1);
}


// console.log(exponent1(2, 8));
// console.log(exponent1(2, 7));

function exponent2(base, exp) {
    if (exp === 0) {
        return 1;
    } else if ( exp === 1) {
        return base;
    }
    
    let halfPower = exponent2(base, Math.floor(exp / 2));
    if (exp % 2 === 0) {
        return halfPower * halfPower;
    } else {
        return halfPower * halfPower * base;
    }
}


// console.log(exponent2(2, 8));
// console.log(exponent2(2, 7));

function fibonacci (n) {
  switch (n) {
    case 0:
      return [];
    case 1:
      return [1];
    case 2:
      return [1, 1];
  }
  
  let prev_fibs = fibonacci(n - 1);
  return prev_fibs.concat([prev_fibs[n - 2] + prev_fibs[n - 3]]);
}

// console.log(fibonacci(0)); // []
// console.log(fibonacci(1)); // [1]
// console.log(fibonacci(2)); // [1, 1]
// console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]

function deepDup(arr) {
     let duped = [];

     arr.forEach(ele => {
        if(ele instanceof Array) {
            duped.push(deepDup(ele));
        } else {
            duped.push(ele);
        }
     });
     return duped;
}

// let a1 = [1,[2,3]];
// let a2 = a1.slice();
// let a3 = deepDup(a1);
// a1[1].push(4);
// console.log(a1);
// console.log(a2);
// console.log(a3);

function bsearch (arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let middle_idx = Math.floor(arr.length / 2);

  switch (Math.sign(target - arr[middle_idx])) {
    case -1:
      return bsearch(arr.slice(0, middle_idx), target);
    case 0:
      return middle_idx;
    case 1:
      let sub_result = bsearch(arr.slice(middle_idx + 1), target);
      return (sub_result === -1 ? -1 : middle_idx + sub_result + 1);
  }
}

// let sorted_arr = [1, 3, 10, 17, 25]
// console.log(bsearch(sorted_arr, 25)); // => 4
// console.log(bsearch(sorted_arr, 1)); // => 0
// console.log(bsearch(sorted_arr, 26)); // => -1
// console.log(bsearch(sorted_arr, 0)); // => -1

function mergeSort (arr) {
  if (arr.length <= 1) {
    return arr.slice();
  }

  let middle_idx = Math.floor(arr.length / 2);

  let left = mergeSort( arr.slice(0, middle_idx) );
  let right = mergeSort( arr.slice(middle_idx) );
  
  return merge(left, right);
}

function merge (left, right) {
  let merged = [];
  
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      merged.push(right.shift());
    } else {
      merged.push(left.shift());
    }
  }

  return merged.concat(left).concat(right);
}

// console.log(mergeSort([5, 8, -10, 37, 25]));

function subsets (arr) {
  if (arr.length === 0) {
    return [[]];
  }

  let subSubs = subsets(arr.slice(1));
  let newSubs = subSubs.map( sub => arr.slice(0, 1).concat(sub) );

  return newSubs.concat(subSubs);
}

console.log(subsets([]));
console.log(subsets([1]));
console.log(subsets([2, 3])); 
console.log(subsets([1, 2, 3])); 