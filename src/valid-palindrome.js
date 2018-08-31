/**
 * link: https://leetcode.com/problems/valid-palindrome/description/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const len = s.length;
  let i = len - 1;
  let j = 0;
  while (i >= 0 && j < len) {
    const headS = s[j].toLowerCase();
    const tailS = s[i].toLowerCase();
    
    if ((headS > 'z' || headS < 'a') && (headS < '0' || headS > '9' )) {
      j++;
      continue;
    }
    
    if ((tailS > 'z' || tailS < 'a') && (tailS < '0' || tailS > '9' )) {
      i--;
      continue;
    }
    
    if (headS !== tailS) {
      return false;
    }
    i--;
    j++;
  }
  
  return true;
};

module.exports = isPalindrome;
