/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let cur = root;
  const pVal = p.val;
  const qVal = q.val;
  // 从顶部开始向下查找, 当出现分叉的时候, 这个节点就是目标节点.
  let condition = true;
  while (condition) {
    if (cur.val >= pVal && cur.val <= qVal) {
      return cur;
    }
    
    if (cur.val <= pVal && cur.val >= qVal) {
      return cur;
    }
    
    if (cur.val > pVal && cur.val > qVal) {
      cur = cur.left;
    }
    
    if (cur.val < pVal && cur.val < qVal) {
      cur = cur.right;
    }
  }
};

module.exports = lowestCommonAncestor;
