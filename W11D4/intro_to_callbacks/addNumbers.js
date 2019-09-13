const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Enter a number!\n', userInput => {
      const number = parseInt(userInput);
      sum += number;
      console.log(`\nPartial sum: ${sum}\n`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    })
  } else {
    completionCallback(sum);
  }
};

addNumbers(0, 3, sum => { console.log(`Total Sum: ${sum}\n`); reader.close(); });