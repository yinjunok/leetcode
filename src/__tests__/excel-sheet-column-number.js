const titleToNumber = require('../excel-sheet-column-number');

it('should be 1', () => {
  expect(titleToNumber('A')).toBe(1);
});

it('should be 28', () => {
  expect(titleToNumber('AB')).toBe(28);
});

it('should be 701', () => {
  expect(titleToNumber('ZY')).toBe(701);
});
