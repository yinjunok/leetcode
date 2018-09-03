/**
 * link: https://leetcode.com/problems/majority-element/description/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const table = {};
  const half = nums.length / 2;

  for (let val of nums) {
    if (table[val]) {
      table[val] += 1;
      if (table[val] > half) {
        return val;
      }
    } else {
      table[val] = 1;
    }
  }
};

module.exports = majorityElement;
