/**
 * source: https://leetcode.com/problems/symmetric-tree/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isEqual(root, root);
};

function isEqual(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  
  return (left.val === right.val) && isEqual(left.left, right.right) && isEqual(left.right, right.left);
}

module.exports = isSymmetric;