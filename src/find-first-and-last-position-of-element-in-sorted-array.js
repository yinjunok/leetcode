/**
 * link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let pivot = -1;
  let low = 0;
  let high = nums.length - 1;
  // 因为 nums 数组是排好序的数组,
  // 所以先用二分搜索, 找到目标点的索引
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      pivot = mid;
      break;
    }
    
    if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  // 以找到的分割点作为起点
  // 分别向左, 右找到等于 target 的分界点.
  low = pivot;
  high = pivot;
  for (let i = pivot; i >= 0; --i) {
    if (nums[i] !== target) break;
    low = i;
  }
  for (let i = pivot; i < nums.length; ++i) {
    if (nums[i] !== target) break;
    high = i;
  }
  
  return [low, high];
};

module.exports = searchRange;
