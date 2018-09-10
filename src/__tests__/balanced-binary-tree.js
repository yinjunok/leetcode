const BinaryTree = require('../util/binary-tree');
const isBalanced = require('../balanced-binary-tree');

it('should be true', () => {
  const tree = BinaryTree.produce([3,9,20,null,null,15,7]);
  expect(isBalanced(tree)).toBe(true);
});

it('should be false', () => {
  const tree = BinaryTree.produce([1,2,2,3,3,null,null,4,4]);
  expect(isBalanced(tree)).toBe(false);
});

it('should be false', () => {
  const tree = BinaryTree.produce([1, 2, 2, 3, null, null, 3, 4, null, null, 4]);
  expect(isBalanced(tree)).toBe(false);
});
