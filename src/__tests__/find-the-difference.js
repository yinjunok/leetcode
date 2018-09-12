const findTheDifference = require('../find-the-difference');

it('should be e', () => {
  expect(findTheDifference('abcd', 'abcde')).toBe('e');
});

it('should be a', () => {
  expect(findTheDifference('abcd', 'aabcd')).toBe('a');
});
