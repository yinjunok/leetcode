const pivotIndex = require('../find-pivot-index');

it('should be 0', () => {
  expect(pivotIndex([-1, -1, -1, 0, 1, 1])).toBe(0);
});

it('should be 3', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
});

it('should be -1', () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1);
});

it('should be -1', () => {
  expect(pivotIndex([1, 1])).toBe(-1);
});
