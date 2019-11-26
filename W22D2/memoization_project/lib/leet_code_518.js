// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// passing:
// var change = function (amount, coins, memo = {}, sorted = false) {
//   if ([amount, coins] in memo) return memo[[amount, coins]];
//   if (amount === 0) return 1;

//   let combos = 0;

//   if (!sorted) {
//     coins.sort();
//   }


//   for (let i = coins.length - 1; i >= 0; i--) {
//     var coin = coins[i];
//     var newCombos;

//     if (coin > amount) {
//       continue;
//     } else {
//       newCombos = change(amount - coin, coins.slice(0, i + 1), memo, true);
//     }

//     combos = combos + newCombos;
//   }

//   memo[[amount, coins]] = combos;
//   return combos;
// };

// better: 
var change = function (amount, coins, memo = {}) {
  let key = amount + "-" + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let numCombos = 0;
  let coin = coins[coins.length - 1];

  for (let qty = 0; qty * coin <= amount; qty++) {
    numCombos = numCombos + change(amount - qty * coin, coins.slice(0, -1), memo);
  }

  memo[key] = numCombos;
  return memo[key];
};