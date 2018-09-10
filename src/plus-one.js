/**
 * source: https://leetcode.com/problems/plus-one/description/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length - 1;
  
  let val = 0;
  for (let i = len; i >= 0; --i) {
    val = digits[i] + 1;
    if (val < 10) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = val % 10;
    }
  }
  if (val > 9) {
    digits.unshift(1);
  }
  return digits;
};

module.exports = plusOne;
