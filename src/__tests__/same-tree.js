const isSameTree = require('../same-tree');

it('should be true', () => {
  const tree_1 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    }
  };

  const tree_2 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    }
  };

  expect(isSameTree(tree_1, tree_2)).toBe(true);
});