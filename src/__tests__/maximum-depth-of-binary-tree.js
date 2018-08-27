const maxDepth = require('../maximum-depth-of-binary-tree');
const Binary = require('../util/binary-tree');

it('should be 3', () => {
  const tree = Binary.produce([3,9,20,null,null,15,7]);
  expect(maxDepth(tree)).toBe(3);
});
