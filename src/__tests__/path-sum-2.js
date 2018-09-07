const pathSum = require('../path-sum-2');
const Tree = require('../util/binary-tree');

it('should be', () => {
  const tree = Tree.produce([5,4,8,11,null,13,4,7,2,null,null,5,1]);
  expect(pathSum(tree, 22)).toEqual(
    [
      [5,4,11,2],
      [5,8,4,5]
   ]
  );
});

