function findRotatedIndex(arr, searchNum) {
  const rotationIdx = findRotationIdx(arr);

  // once we get the rotation index, we have 2 sorted arrays to work with based on the idx's
  // we can run our binary search on both arrays to find our search num index

  const searchNumIdx = findSearchNumIdx(arr, searchNum, rotationIdx);

  // console.log("search num Idx: ", searchNumIdx);
  // console.log("----------------");

  // return the index of searchNum in the arr, else return -1
  return searchNumIdx ? searchNumIdx : -1;
}

function findSearchNumIdx(arr, searchNum, rotationIdx) {
  // if our searchNum is less than the first element in our array,
  // we know that the num MIGHT be location in the "2nd part" of the array
  // we need to use our rotationIdx as the starting leftIdx
  // searching from that index to the end

  let leftIdx;
  let rightIdx;

  // if our searchNum happens to be the first element in the arr, return 0 as the idx
  if (searchNum === arr[0]) return 0;

  // if our searchNum greater than the first element in the array, we know we need to search
  // from the beginning of the arry up until the point at which the array rotates!
  if (searchNum > arr[0]) {
    leftIdx = 0;
    rightIdx = rotationIdx - 1;
  }
  // if our searchNum is less than the first element in the array, we know we need to start
  // our search from the rotation point
  if (searchNum < arr[0]) {
    leftIdx = rotationIdx;
    rightIdx = arr.length - 1;
  }

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (searchNum === arr[middleIdx]) return middleIdx;

    // if middle - 1 < middle > middle + 1 then we found the reverse point
    if (searchNum < arr[middleIdx]) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }

  return null;
}

function findRotationIdx(arr, searchNum) {
  // arrays are reversed, so we need to find the point at which the array reverses
  // the reverse point can be found where the middle - 1 < middle > middle + 1

  // return the searchNumIdx OR null;

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    let leftNum = arr[middleIdx - 1];
    let middleNum = arr[middleIdx];
    let rightNum = arr[middleIdx + 1];

    if (leftNum < middleNum && middleNum > rightNum) return middleIdx + 1;

    if (leftNum > middleNum && middleNum < rightNum) return middleIdx;

    if (leftNum < middleNum && middleNum < rightNum) {
      if (arr[leftIdx] < middleNum) {
        // L          M            R
        // [37,44,66,102,110,10,22,24]
        leftIdx = middleIdx + 1;
      } else if (arr[leftIdx] > middleNum) {
        // L         M           R
        // [37,44,10,22,24,26,28,30]
        rightIdx = middleIdx - 1;
      }
    }
  }

  return null;
}

// L          M            R
// [37,44,66,102,110,10,22,24]
//               L   M     R
// [37,44,66,102,110,10,22,24]

findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1

module.exports = findRotatedIndex;
