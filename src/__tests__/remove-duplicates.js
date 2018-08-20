const {
  removeDuplicates1,
  removeDuplicates2,
} = require('../remove-duplicates');

test('去除 [1, 1, 2] 重复项后的长度为 2, 数组变成 [1, 2]', () => {
  const nums1 = [1, 1, 2];
  const nums2 = [1, 1, 2];
  expect(removeDuplicates1(nums1)).toBe(2);
  expect(removeDuplicates2(nums2)).toBe(2);

  expect(nums1).toEqual([1, 2]);
  expect(nums2).toEqual([1, 2]);
});

test('去除 [0,0,1,1,1,2,2,3,3,4] 重复项后的长度 为 5, 数组变成 [0, 1, 2, 3, 4]', () => {
  const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

  expect(removeDuplicates1(nums1)).toBe(5);
  expect(removeDuplicates2(nums2)).toBe(5);

  expect(nums1).toEqual([0, 1, 2, 3, 4]);
  expect(nums2).toEqual([0, 1, 2, 3, 4]);
});