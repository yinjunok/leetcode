const lowestCommonAncestor = require('../lowest-common-ancestor-of-a-binary-search-tree');
const BinaryTree = require('../util/binary-tree');

it('should be 6', () => {
  const p = new BinaryTree(2);
  const q = new BinaryTree(8);
  const tree = BinaryTree.produce([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const result = lowestCommonAncestor(tree, p, q);
  expect(result.val).toBe(6);
});

it('should be 2', () => {
  const p = new BinaryTree(2);
  const q = new BinaryTree(4);
  const tree = BinaryTree.produce([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const result = lowestCommonAncestor(tree, p, q);
  expect(result.val).toBe(2);
});
