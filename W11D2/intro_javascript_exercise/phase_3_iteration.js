Array.prototype.bubbleSort = function () {
    let sorted = false;
    let result = this.slice();

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i+1] < result[i]) {
                sorted = false;
                [result[i], result[i+1]] = [result[i+1], result[i]];
            }
        }
    }
    return result;

};

// console.log([2,4,1,3].bubbleSort());

String.prototype.substrings = function() {
    let subs = [];

    for (let i = 0; i < this.length; i ++) {
        for (let j = i; j < this.length; j ++){
            subs.push(this.slice(i,j+1));
        }
    }
    return subs;
};

// console.log('cats'.substrings()) //['c','ca']
