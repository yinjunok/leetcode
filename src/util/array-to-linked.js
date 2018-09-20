// 数组转成链表

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const arrayToLinked = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let cur = new ListNode(arr[0]);
  const head = cur;
  for (let i = 1; i < arr.length; ++i) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  cur.next = null;
  return head;
};

module.exports = arrayToLinked;
