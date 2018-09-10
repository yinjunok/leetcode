const deleteDuplicates = require('../remove-duplicates-from-sorted-list');

let listNode = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
    }
  }
};

it('should be [1, 2]', () => {
  expect(deleteDuplicates(listNode)).toEqual({
    val: 1,
    next: {
      val: 2,
      next: null,
    }
  });
});
