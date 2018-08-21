function searchInsertPosition(arr, target) {
  let low = 0, high = arr.length;
  const { floor } = Math;

  while (low <= high) {
    let mid = floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

module.exports = searchInsertPosition;
