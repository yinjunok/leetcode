const plusOne = require('../plus-one');

it('should be [1, 0]', () => {
  expect(plusOne([9])).toEqual([1, 0]);
});

it('should be [1, 2, 4]', () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

it('should be [1, 0, 0]', () => {
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
});
