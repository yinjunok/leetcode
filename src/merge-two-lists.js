class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * source: https://leetcode.com/problems/merge-two-sorted-lists/description/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const mergeList = new ListNode(0);
  let tail = mergeList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 === null ? l2 : l1;
  return mergeList.next;
};

module.exports = mergeTwoLists;