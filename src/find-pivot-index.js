/**
 * link: https://leetcode.com/problems/find-pivot-index/description/
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // 如果数组小于等于 2, 不可能出现将数组分割成左右两部分的 pivot
  if (nums.length <= 2) return -1;
  
  let left = 0;
  let right = 0;
  // 累加右边
  for (let i = 1; i < nums.length; ++i) {
    right += nums[i];
  }
  
  for (let i = 0; i < nums.length; ++i) {
    // 如果左右不相等
    // 左边累加
    // 右边累减
    if (left !== right) {
      left += nums[i];
      right -= nums[i + 1];
      continue;
    }
    
    return i;
  }
  
  return -1;
};

module.exports = pivotIndex;
