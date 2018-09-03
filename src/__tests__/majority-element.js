const majorityElement = require('../majority-element');

it('should be 3', () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
});

it('single element array should be 2', () => {
  expect(majorityElement([2])).toBe(2);
});
