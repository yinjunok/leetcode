/**
 * link: https://leetcode.com/problems/set-matrix-zeroes/description/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = [];
  const column = [];
  
  // 收集需要修改的行和列
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === 0) {
        row.push(i);
        column.push(j);
      }
    }
  }

  // 修改行
  for (let i = 0; i < row.length; ++i) {
    const index = row[i];
    for (let j = 0; j < matrix[index].length; ++j) {
      matrix[index][j] = 0;
    } 
  }

  // 修改列
  for (let i = 0; i < column.length; ++i) {
    let index = column[i];
    for (let j = 0; j < matrix.length; ++j) {
      matrix[j][index] = 0;
    }
  }
};

module.exports = setZeroes;
