const arrayToLinked = require('./array-to-linked');

it('[]', () => {
  const arr = [1];
  expect(arrayToLinked(arr)).toEqual({val: 1, next: null});
});

it('should be null', () => {
  const arr = [];
  expect(arrayToLinked(arr)).toEqual(null);
});

it('[1, 2]', () => {
  const arr = [1, 2];
  expect(arrayToLinked(arr)).toEqual({
    val: 1,
    next: {
      val: 2,
      next: null,
    }
  });
});

it('[1, 2, 3]', () => {
  const arr = [1, 2, 3];
  expect(arrayToLinked(arr)).toEqual({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null,
      }
    }
  });
});
