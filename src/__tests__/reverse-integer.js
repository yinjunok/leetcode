const reverse = require('../reverse-integer');

test('反转 123', () => {
  expect(reverse(123)).toBe(321);
});


test('反转 120', () => {
  expect(reverse(120)).toBe(21);
});

test('反转 -120', () => {
  expect(reverse(-120)).toBe(-21);
});

test('反转 -564', () => {
  expect(reverse(-564)).toBe(-465);
});

test('2147483647 溢出', () => {
  expect(reverse(2147483647)).toBe(0)
});
