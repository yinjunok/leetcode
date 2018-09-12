/**
 * link: https://leetcode.com/problems/longest-palindrome/description/
 * 计算出字符串能构成的最长回文.
 * 偶成回文的情况:
 * 1. 字符数量全偶数, 两边刚好均分.
 * 2. 有一个字符数量奇数, 将一个字符放中间, 两边均分.
 * 
 * 因为是可以从字符串里面挑字符来构成字符串.
 * 所以如果字符是偶数直接累加.
 * 字符是奇数, 可以挑出偶数个字符, 累加. 最后加一.
 * 最后加一是奇数个字符是可以选一个放中间, 构成回文.
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s.length;
  // 用一个 hash 保存字符数量
  const hash = {};

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (hash[char] === undefined) {
      hash[char] = 1;
    } else {
      hash[char] += 1;
    }
  }

  // 如果只有一种字符, 直接返回
  const keys = Object.keys(hash);
  if (keys.length === 1) return hash[keys[0]];

  let counter = 0;
  let hasOdd = false; // 是否有奇数个字符. 如果有, 最后计数器需要加一.
  keys.forEach(key => {
    const val = hash[key];
    // 如果是偶数直接累加
    // 如果是奇数, 减一后累加
    if (val % 2 === 0) {
      counter += val;
    } else {
      hasOdd = true;
      counter += val - 1;
    }
  });
  
  // 如果有奇数个的字符, 则需要在最后加一返回.
  if (hasOdd === true) {
    counter += 1;
  }
  return counter;
};

module.exports = longestPalindrome;
