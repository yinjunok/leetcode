const mergeTwoLists = require('../merge-two-lists');

// 1 2 4
// 1 3 4
const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    }
  }
};

const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    }
  }
};

const result = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next : null,
          }
        }
      }
    }
  }
};

test('l1, l2 排序', () => {
  expect(mergeTwoLists(l1, l2)).toEqual(result);
});