const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIfGreaterThan = function (el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?\n`, ans => {
    ans === 'yes' ? callback(true) : callback(false);
  });
};

// askIfGreaterThan(1, 2, (sorted) => {
//   if (sorted) {
//     console.log('all done!');
//   } else {
//     console.log('keep going!');
//   }
//   reader.close();
// });

const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if ( i < arr.length - 1 ) {
    askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
      if (isGreaterThan ) {
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

// let arr = [3, 2, 1];
// innerBubbleSortLoop(arr, 0, false, () => console.log(arr));

const absurdBubbleSort = function(arr, sortCompletionCallback) {
  const outerBubbleSortLoop = function(madeAnySwaps) {
    madeAnySwaps ? 
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
      : sortCompletionCallback(arr);
  };
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});