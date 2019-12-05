// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// time: O(nlog(n));
// function sortedArrayToBST(nums) {
//   if (!nums.length) return null;
//   const midIdx = Math.floor(nums.length / 2);
//   const root = new TreeNode(nums[midIdx]);
//   root.left = sortedArrayToBST(nums.slice(0, midIdx));
//   root.right = sortedArrayToBST(nums.slice(midIdx + 1));
//   return root;
// }

// time: O(log(n))
function sortedArrayToBST(nums, start = 0, end = nums.length - 1) {
  if (start > end) return null;
  const midIdx = start + Math.floor((end - start) / 2);
  const root = new TreeNode(nums[midIdx]);
  root.left = sortedArrayToBST(nums, start, midIdx - 1);
  root.right = sortedArrayToBST(nums, midIdx + 1, end);
  return root;
}