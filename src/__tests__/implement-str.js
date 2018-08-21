const strStr = require('../implement-str');

test('参数相等应该应该返回 0', () => {
  expect(strStr('a', 'a')).toBe(0);
  expect(strStr('abc', 'abc')).toBe(0);
});

test('没有子串应该返回 -1', () => {
  expect(strStr('abcd', 'efg')).toBe(-1);
});

test('测试末尾边界', () => {
  expect(strStr('abcdef', 'ef')).toBe(4);
});