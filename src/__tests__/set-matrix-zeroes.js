const setZeroes = require('../set-matrix-zeroes');

it('', () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  setZeroes(matrix);
  expect(matrix).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
  ]);
});

it('', () => {
  const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ];
  setZeroes(matrix);
  expect(matrix).toEqual([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0]
  ]);
});

