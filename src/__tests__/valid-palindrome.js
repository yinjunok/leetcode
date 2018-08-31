const isPalindrome = require('../valid-palindrome');

it('should be true', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

it('should be false', () => {
  expect(isPalindrome('race a car')).toBe(false);
});

it('should be false', () => {
  expect(isPalindrome('0P')).toBe(false);
});

it('should be true', () => {
  expect(isPalindrome('ABba')).toBe(true);
});
