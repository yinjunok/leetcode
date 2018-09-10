class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// 根据数组生成二叉树
BinaryTree.produce = function (arr) {
  const queue = [];
  const root = new BinaryTree(arr.shift());
  // 添加是否访问过的标记
  root._left = false;
  root._right = false;
  queue.push(root);

  while (arr.length > 0) {
    const node = new BinaryTree(arr.shift());
    const cur = queue[0];
    // 添加是否访问过的标记
    node._left = false;
    node._right = false;

    if (node.val === null) {
      if (cur._left === false) {
        cur._left = true;
      } else {
        cur._right = true;
        delete cur._left;
        delete cur._right;
        queue.shift();
      }
    } else {
      queue.push(node);

      if (cur._left === false) {
        cur._left = true;
        cur.left = node;
      } else {
        cur._right = true;
        cur.right = node;
        delete cur._left;
        delete cur._right;
        queue.shift();
      }
    }
  }

  // 清理队列中的标记
  while (queue.length > 0) {
    const node = queue.shift();
    delete node._left;
    delete node._right;
  }

  return root;
};

module.exports = BinaryTree;