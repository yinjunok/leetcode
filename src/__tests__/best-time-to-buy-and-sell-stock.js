const { maxProfit1, maxProfit2 } = require('../best-time-to-buy-and-sell-stock');

it('should be 5', () => {
  expect(maxProfit1([7,1,5,3,6,4])).toBe(5);
  expect(maxProfit2([7,1,5,3,6,4])).toBe(5);
});

it('should be 0', () => {
  expect(maxProfit1([7,6,4,3,1])).toBe(0);
  expect(maxProfit1([7,6,4,3,1])).toBe(0);
});
