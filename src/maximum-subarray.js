/**
 * 动态规划
 * source: https://leetcode.com/problems/maximum-subarray/description/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let cur = nums[0];
  let result = nums[0];
  const { max } = Math;

  for (let i = 0; i < nums.length; ++i) {
    cur = max(nums[i], cur + nums[i]);
    result = max(result, cur);
  }

  return result;
};

module.exports = maxSubArray;
