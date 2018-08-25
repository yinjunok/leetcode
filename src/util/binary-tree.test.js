const BinaryTree = require('./binary-tree');

it('[1,2,2,3,4,4,3]', () => {
  const tree = BinaryTree.Produce([1,2,2,3,4,4,3]);
  expect(tree).toEqual({
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      }
    },
    right: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      }
    }
  });
});

it('[1,2,2,null,3,null,3]', () => {
  const tree = BinaryTree.Produce([1,2,2,null,3,null,3]);
  expect(tree).toEqual({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: null,
      }
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: null,
      }
    }
  });
});