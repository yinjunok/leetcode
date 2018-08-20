// source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * O(n^2) 时间复杂度的解法
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates1 = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }

  for (let i = 0; i < nums.length - 1; ++i) {
    let counter = 0;
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[j] !== nums[i]) {
        break;
      } else {
        counter++;
      }
    }
    if (counter === 0) continue;
    nums.splice(i + 1, counter);
  }

  return nums.length;
};

/**
 * O(n) 时间复杂的的解法
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = function(nums) {
  if (nums.length < 2) {
    return nums.length;
  }

  let counter = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[counter] !== nums[i]) {
      counter++;
      nums[counter] = nums[i];
    }
  }

  // 索引是从 0 开始计数, 长度是以 1 开始计数, 所以计数器需要加一
  counter++;
  /*
   * 从网上看到的解法, 直接就返回了去重后的长度.
   * 但是我觉得这样不符合题意, 题目中说是要从数组里去掉重复的元素,
   * 以上的操作并没有去除重复的元素, 只是让他们在 0 ~ counter 内不重复.
   * 奇怪的是, 这样居然可以跑通 leetcode 所有测试, 也不知道 leetcode 的测试时怎么写的.
   * 我们可以利用 JS 数组可以给 length 直接赋值的特性, 直接把 counter 之后的元素去掉.
   */
  nums.length = counter;
  return counter;
}

module.exports = {
  removeDuplicates1,
  removeDuplicates2,
}