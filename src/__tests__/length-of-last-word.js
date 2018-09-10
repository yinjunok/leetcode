const lengthOfLastWord = require('../length-of-last-word');

it('should be 5', () => {
  expect(lengthOfLastWord('Hello World')).toBe(5);
});

it('should be 1', () => {
  expect(lengthOfLastWord('a ')).toBe(1);
});
