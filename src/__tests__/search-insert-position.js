const searchInsert = require('../search-insert-position');

test('输入([1, 3, 5, 6], 5) 输出: 2', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test('输入([1, 3, 5, 6], 2) 输出: 1', () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test('输入([1, 3, 5, 6], 7) 输出: 4', () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test('输入([1, 3, 5, 6], 0) 输出: 0', () => {
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});
