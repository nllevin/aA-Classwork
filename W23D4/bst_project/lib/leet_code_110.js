// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return true;
  return (
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
    && isBalanced(root.left)
    && isBalanced(root.right)
  );
};

const getHeight = root => {
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}