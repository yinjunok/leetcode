const palindromeNumber = require('../palindrome-number');

test('1221 存在回文', () => {
  expect(palindromeNumber(1221)).toBe(true);
});

test('-1221 负数不存在回文', () => {
  expect(palindromeNumber(-1221)).toBe(false);
});

test('120 尾数有 0 的, 只有整数 0 才有回文', () => {
  expect(palindromeNumber(120)).toBe(false);
});

