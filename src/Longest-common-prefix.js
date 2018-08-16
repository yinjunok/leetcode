/**
 * source: https://leetcode.com/problems/longest-common-prefix/description/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let [first, ...rest] = strs;
  let result = '';
  for (let i = 0; i < first.length; ++i) {
    for (let j = 0; j < rest.length; ++j) {
      if (first[i] !== rest[j][i]) {
        return result;
      }
    }
    result += first[i];
  }
  return result;
};

module.exports = longestCommonPrefix;