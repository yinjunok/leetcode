const longestCommonPrefix = require('../Longest-common-prefix');

test('["", ""] 应该返回 ""', () => {
  expect(longestCommonPrefix(['', ''])).toBe('');
});

test('["flower","flow","flight"]', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
});

test('["dog","racecar","car"]', () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe('');
});


test('["dog"]', () => {
  expect(longestCommonPrefix(["dog"])).toBe('dog');
});