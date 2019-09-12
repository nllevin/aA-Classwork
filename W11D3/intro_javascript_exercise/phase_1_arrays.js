/*

Monkey Patching Arrays

*/

Array.prototype.uniq = function () {
  let uniqs = [];
  for (let i = 0; i < this.length; i++) {
    let ele = this[i];
    if (!uniqs.includes(ele)) {
      uniqs.push(ele);
    }
  }
  return uniqs;
};
// console.log([1, 2, 2, 3, 3, 3].uniq()); // => [1, 2, 3]

Array.prototype.two_sum = function () {
  let pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};
// console.log([0, 3, -10, -3, 5, 1, 2, 0, -5, 10].two_sum()) // => [[0, 7], [1, 3], [2, 9], [4, 8]]

Array.prototype.transpose = function () {
    let transposed = [];

    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this[i].length; j++){
            if (i === 0) {
                transposed.push([this[i][j]]);
            } else {
                transposed[j].push(this[i][j]);
            }
        }
    }

    return transposed;
}

// console.log([[1,2,3],[4,5,6]].transpose()) //[[1, 4],[2, 5], [3, 6]]


