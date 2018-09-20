const rotateRight = require('../rotate-list');
const arrayToLinked = require('../util/array-to-linked');

it('', () => {
  const origin = arrayToLinked([1, 2, 3, 4, 5]);
  const k = 2;

  const result = [4, 5, 1, 2, 3];
  expect(rotateRight(origin, k)).toEqual(arrayToLinked(result));
});


it('', () => {
  const origin = arrayToLinked([0, 1, 2]);
  const k = 4;

  const result = [2, 0, 1];
  expect(rotateRight(origin, k)).toEqual(arrayToLinked(result));
});

it('', () => {
  const origin = arrayToLinked([]);
  const k = 0;

  const result = [];
  expect(rotateRight(origin, k)).toEqual(arrayToLinked(result));
});

it('', () => {
  const origin = arrayToLinked([1, 2, 3]);
  const k = 200000;

  const result = [2, 3, 1];
  expect(rotateRight(origin, k)).toEqual(arrayToLinked(result));
});
