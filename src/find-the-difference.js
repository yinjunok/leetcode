/**
 * link: https://leetcode.com/problems/find-the-difference/description/
 * 找出不同字符, 不同的情况有两种:
 *  1. 额外的字符, 就是 s 字符串里没有而 t 里面出现了的.
 *  2. 都有, 但是出现次数不同的字符.
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
  const sMap = {};
  const tMap = {};
  const len = Math.max(s.length, t.length);
  
  for (let i = 0; i < len; ++i) {
    if (s[i] !== undefined) {
      if (sMap[s[i]] === undefined) {
        sMap[s[i]] = 1;
      } else {
        sMap[s[i]] += 1;
      }
    }
    
    if (t[i] !== undefined) {
      if (tMap[t[i]] === undefined) {
        tMap[t[i]] = 1;
      } else {
        tMap[t[i]] += 1;
      }
    }
  }
  
  for (let p in tMap) {
    if (sMap[p] === undefined) return p;
    if (sMap[p] !== tMap[p]) return p;
  }
};

module.exports = findTheDifference;
