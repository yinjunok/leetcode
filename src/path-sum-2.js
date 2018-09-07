/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) return [];
  const result = [];
  walkTree(root, 0, sum, [], result);
  return result;
};

const walkTree = (node, sum, target, list, result) => {
  if (node.left === null && node.right === null) {
    if (sum + node.val === target) {
			list.push(node.val);
      result.push(list);
			return;
    }
  }
  if (node.left !== null) {
    walkTree(node.left, sum + node.val, target, [...list, node.val], result);
  }
  if (node.right !== null) {
    walkTree(node.right, sum + node.val, target, [...list, node.val], result);
  }
};

module.exports = pathSum;
