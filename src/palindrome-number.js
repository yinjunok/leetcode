/**
 * source: https://leetcode.com/problems/palindrome-number/description/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 如果 x 小于 0, 一定不是回文
  // 如果 x 尾数是 0, 则只有 0 才能使回文 
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  // 如果 x 只有一位数, 则一定是回文
  if (x > 0 && x < 10) {
    return true;
  }
  
  // 把数分成左右两半, 把右边的反转: 1221 分成 12 和 21 
  // 如果左右两边相等, 则是回文
  let half = 0;
  while (x > half) {
    half = half * 10 + x % 10;
    x = parseInt(x / 10, 10);
  }

  return half === x || x === parseInt(half / 10, 10);
};

module.exports = isPalindrome;