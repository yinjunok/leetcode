/**
 * source: https://leetcode.com/problems/pascals-triangle/description/
 * 杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];
  
  for (let i = 1; i <= numRows; ++i) {
    const tempArr = [];
    tempArr.length = i;
    tempArr.fill(1, 0);
		if (i <= 2) {
			result.push(tempArr);
			continue;
		}
		
    const preArr = result[i - 2];
    for (let j = 1; j < i - 1; ++j) {
      tempArr[j] = preArr[j - 1] + preArr[j];
    }
		
    result.push(tempArr);
  }
  
  return result;
};

module.exports = generate;
