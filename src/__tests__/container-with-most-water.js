const { maxArea1, maxArea2 } = require('../container-with-most-water');

it('should be 49', () => {
  expect(maxArea1([1,8,6,2,5,4,8,3,7])).toBe(49);
  expect(maxArea2([1,8,6,2,5,4,8,3,7])).toBe(49);
});

