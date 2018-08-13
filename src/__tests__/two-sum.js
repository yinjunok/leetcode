const twoSum = require('../two-sum');

test('在数组 [2, 7, 11, 15] 中寻找相加等于 9 的索引', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('在数组 [2, 7, 11, 15] 中寻找相加等于 13 的索引', () => {
  expect(twoSum([2, 7, 11, 15], 13)).toEqual([0, 2]);
});

test('在数组 [-2, 7, 11, 15] 中寻找相加等于 9 的索引', () => {
  expect(twoSum([-2, 7, 11, 15], 9)).toEqual([0, 2]);
});


test('在数组 [-2, 7, 11, 15] 中寻找相加等于 100 的索引', () => {
  expect(twoSum([-2, 7, 11, 15], 100)).toEqual(null);
});
