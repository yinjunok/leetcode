/**
 * link: https://leetcode.com/problems/rotate-list/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null) return head;
  // 转成数组, 方便循环.
  const queue = [];
  let cur = head;
  while (cur !== null) {
    queue.push(cur);
    cur = cur.next;
  }

  // 如果 k 大于数组的长度, 后面的操作会出现重复的循环, 所以只要求余, 余数就是不重复的次数.
  k %= queue.length;
  for (let i = 0; i < k; ++i) {
    queue.unshift(queue.pop());
  }
  
  cur = queue[0];
  let r = queue[0];
  for (let i = 1; i < queue.length; ++i) {
    cur.next = queue[i];
    cur = queue[i];
  }
  
  cur.next = null;
  
  return r;
};

module.exports = rotateRight;
