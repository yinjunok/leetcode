const longestPalindrome = require('../longest-palindrome');

it('should be 7', () => {
  expect(longestPalindrome('abccccdd')).toBe(7);
});

it('should be 1', () => {
  expect(longestPalindrome('a')).toBe(1);
});

it('should be 12', () => {
  // 全偶数
  expect(longestPalindrome('tattarrattat')).toBe(12);
});

it('should be ', () => {
  // 全奇数
  expect(longestPalindrome('aaabbbccc')).toBe(7);
});
