const symmetricTree = require('../symmetric-tree');
const BinaryTree = require('../util/binary-tree');

it('[1,2,2,3,4,4,3] should be true', () => {
  const tree = BinaryTree.Produce([1,2,2,3,4,4,3]);
  expect(symmetricTree(tree)).toBe(true);
});

it('[1,2,2,null,3,null,3] should be false', () => {
  const tree = BinaryTree.Produce([1,2,2,null,3,null,3]);
  expect(symmetricTree(tree)).toBe(false);
});
