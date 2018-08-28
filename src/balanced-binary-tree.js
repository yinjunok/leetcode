const maxDepth = require('./maximum-depth-of-binary-tree');

/**
 * source: https://leetcode.com/problems/balanced-binary-tree/description/
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
var isBalanced = function(root) {
  if (root === null) {
    return true;
  }
  
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  const diff = Math.abs(left - right);
  
  if (diff > 1) {
    return false;
  }
  
  return isBalanced(root.left) && isBalanced(root.right);
};

module.exports = isBalanced;
