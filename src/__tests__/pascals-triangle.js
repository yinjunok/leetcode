const generate = require('../pascals-triangle');

it('5 should be', () => {
  expect(generate(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
});
