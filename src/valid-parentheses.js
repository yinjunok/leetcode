/**
 * source: https://leetcode.com/problems/valid-parentheses/description/
 * @param {string} s
 * @return {boolean}
 */
const left = ['(', '{', '['];
const symbolMap = {
  ')': '(',
  '}': '{',
  ']': '[',
};

var isValid = function (s) {
  if (s === '') {
    return true;
  }
  const stack = [];
  let sArr = s.split('');
  while (sArr.length != 0) {
    const char = sArr.shift();
    if (left.indexOf(char) !== -1) {
      stack.push(char);
    } else {
      if (stack.pop() !== symbolMap[char]) {
        return false;
      }
    }
  }

  // 如果栈没被清空, 说明有没匹配到的符号
  if (stack.length !== 0) {
    return false;
  }

  return true;
};

module.exports = isValid;
