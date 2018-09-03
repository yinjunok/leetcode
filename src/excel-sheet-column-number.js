/**
 * link: https://leetcode.com/problems/excel-sheet-column-number/description/
 * 本质上就是一个进制转换问题, 知道进制转换的公式, 可以马上就写出算法.
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const { pow } = Math;
  const { hash } = titleToNumber;
  
  let result = 0;
  for (let i = 0; i < s.length; ++i) {
    result += hash[s[i]] * pow(26, s.length - i - 1);
  }
  
  return result;
};

const { fromCharCode } = String;
titleToNumber.hash = {};
for (let i = 65; i < 91; ++i) {
  titleToNumber.hash[fromCharCode(i)] = i - 64;
}

module.exports = titleToNumber;
