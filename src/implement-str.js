/**
 * source: https://leetcode.com/problems/implement-strstr/description/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }

  let len = haystack.length - needle.length + 1;
  
  for (let i = 0; i < len; ++i) {
    let flag = true;
    for (let j = 0; j < needle.length; ++j) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    
    if (flag === true) {
      return i;
    }
  }
  
  return -1;
};

module.exports = strStr;