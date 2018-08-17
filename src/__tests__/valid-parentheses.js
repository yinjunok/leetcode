const valid = require('../valid-parentheses');

test('() 应该是 true', () => {
  expect(valid('()')).toBe(true);
});

test('()[]{} 应该是 true', () => {
  expect(valid('()[]{}')).toBe(true);
});

test('(] 应该是 false', () => {
  expect(valid('(]')).toBe(false);
});

test('([)] 应该是 false', () => {
  expect(valid('([)]')).toBe(false);
});

test('{[]} 应该是 true', () => {
  expect(valid('{[]}')).toBe(true);
});

test('[ 应该是false', () => {
  expect(valid('[')).toBe(false);
});

test('(( 应该是 false', () => {
  expect(valid('((')).toBe(false);
});