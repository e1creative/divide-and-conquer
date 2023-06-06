function countZeroes(arr) {
  const firstZeroIdx = findFirstZeroIdx(arr);

  return firstZeroIdx > -1 ? arr.slice(firstZeroIdx).length : 0;
}

function findFirstZeroIdx(arr) {
  // get our left and right
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the mid point
    let middle = Math.floor((leftIdx + rightIdx) / 2);

    // check if we landed on a zero
    if (arr[middle] === 0) {
      // zeros are to the right.  if idx to the left is a one then we found our first zero!
      // if idx to the left is a 1 then we have our first zero, so return the current idx
      if (arr[middle - 1] === 1 || middle - 1 < 0) return middle;

      // if idx to the left is not a one then, its a zero, and we can move cut our search to the left half of the array
      rightIdx = middle - 1;

      // else, we are on a 1.  if idx to the right is a zero we found our first zero
    } else {
      // check if the idx to the right is a zero, if it is, we found our first zero
      if (arr[middle + 1] === 0) return middle + 1;

      // if idx to the right is still a 1 then we can shift our left idx to check the right half of the current array
      leftIdx = middle + 1;
    }
  }

  return -1;
}

module.exports = countZeroes;
