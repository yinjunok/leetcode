/**
 * source: https://leetcode.com/problems/same-tree/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 两节点为 null, 说明递归完了, 应该为 true
  if (p === null && q === null) {
    return true;
  }
  // 结构不同
  if (p === null && q !== null || q === null && p !== null) {
    return false;
  }
  
  // 最后才判断值, 因为节点可能是 null.
  if (p.val !== q.val) {
    return false;
  }
  
  return isSameTree(p.left, q.left) && isSameTree(q.right, p.right);
};

module.exports = isSameTree;