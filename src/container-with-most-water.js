/**
 * link: https://leetcode.com/problems/container-with-most-water/description/
 * 要使面积最大, 宽与高要尽可能的大.
 * 宽最大的情况是在首位与末尾的情况,
 * 然后我们的任务就成了找最大高.
 * 从两边开始查找, 高度小的那边往中间靠.
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function(height) {
  let max = 0; // 记录过程中最大的面积
  let low = 0; // 起点初始从数组首位开始
  let high = height.length - 1; // 末点初始从数组最后开始
  
  while (low < high) {
    // 边的最小高度
    let min = Math.min(height[low], height[high]);
    max = Math.max(max, min * (high - low));
    // 判断哪一边需要往中间靠拢.
    if (height[low] > height[high]) {
      high -= 1;
    } else {
      low += 1;
    }
  }
  
  return max;
};

// 暴力求解
var maxArea2 = function(height) {
  let sum = 0;
  for (let i = 0; i < height.length - 1; ++i) {
    for (let j = i + 1; j < height.length; ++j) {
      let min = Math.min(height[i], height[j]);
      sum = Math.max(sum, min * (j - i));
    }
  }
  return sum;
};

module.exports = {
  maxArea1,
  maxArea2,
};
