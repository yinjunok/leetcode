/**
 * source: https://leetcode.com/problems/reverse-integer/description/
 * @param {number} x
 * @return {number}
 */

const range = Math.pow(2, 31) - 1;
var reverse = function(x) {
  const temp = [];
    
  if (Math.abs(x) > range || x === 0) {
    return 0;
  }
    
  while (x !== 0) {
    let remainder = x % 10;
    temp.push(remainder);
    x = (x - remainder) / 10;
  }
    
  let result = 0;
  while (temp[0] !== undefined) {
    result += temp.shift() * Math.pow(10, temp.length);
  }
    
  if (Math.abs(result) > range) {
    return 0;
  }
    
  return result;
};

module.exports = reverse;
