// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  var table = new Array(n + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < n - 1; i++) {
    table[i + 1] = table[i + 1] + table[i];
    table[i + 2] = table[i + 2] + table[i];
  }

  table[n] = table[n] + table[n - 1];
  return table[n];
}