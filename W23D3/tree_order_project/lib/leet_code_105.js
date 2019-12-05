// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (!preorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const inOrderIdx = inorder.findIndex(el => el === root.val);

  const inOrderLeft = inorder.slice(0, inOrderIdx);
  const preOrderLeft = preorder.filter(el => inOrderLeft.includes(el));
  root.left = buildTree(preOrderLeft, inOrderLeft);

  const inOrderRight = inorder.slice(inOrderIdx + 1);
  const preOrderRight = preorder.filter(el => inOrderRight.includes(el));
  root.right = buildTree(preOrderRight, inOrderRight);

  return root;
}
