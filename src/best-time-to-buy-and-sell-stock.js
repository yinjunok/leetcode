/**
 * link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
  // 暴力循环法, 时间复杂度 O(n^2)
  let result = 0;
  for (let i = prices.length - 1; i > 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      const diff = prices[i] - prices[j];
      if (diff > result) {
        result = diff;
      }
    }
  }
  return result;
};

var maxProfit2 = function(prices) {
  // 来自讨论区的算法, 时间复杂度 O(n);
  let maxCur = 0, maxSoFar = 0;
  for(let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
};

module.exports = {
  maxProfit1,
  maxProfit2,
};