// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
  var height = grid.length;
  var width = grid[0].length;
  var table = Array.from(new Array(height), () => new Array(width));
  table[0][0] = grid[0][0];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (j < width - 1) {
        var newMinRight = table[i][j] + grid[i][j + 1];
        table[i][j + 1] = Math.min(newMinRight, table[i][j + 1]) || newMinRight;
      }

      if (i < height - 1) {
        var newMinDown = table[i][j] + grid[i + 1][j];
        table[i + 1][j] = Math.min(newMinDown, table[i + 1][j]) || newMinDown;
      }
    }
  }

  return table[height - 1][width - 1];
}