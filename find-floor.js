function findFloor(sortedArr, val) {
  // accepts a sorted array and a value x
  // returns the floor of x in the array.
  // The floor of x in an array is the largest element in the array
  // which is smaller than or equal to x. If the floor does not exist, return -1.

  // this will return the IDX of the floor or null
  const valIdx = findValIdx(sortedArr, val);

  // console.log("floor is: ", sortedArr[valIdx]);
  // console.log("----------------");

  return valIdx ? sortedArr[valIdx] : -1;
}

function findValIdx(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  // if the val is equal to our left most array num, the floor is the left most array num
  if (val === arr[leftIdx]) return leftIdx;

  // if the val is outside of our array on the left, there is no floor
  if (val < arr[leftIdx]) return null;

  // if the val is greater than or equal to our array last array num, the floor is the last array num
  if (val >= arr[rightIdx]) return rightIdx;

  while (leftIdx <= rightIdx) {
    console.log("checking.....");
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    let leftNum = arr[leftIdx];
    let middleNum = arr[middleIdx];
    let rightNum = arr[rightIdx];

    // if the val is our middleNum return middleIdx
    if (val === middleNum) return middleIdx;

    // if val greater than the middleNum
    if (val > middleNum) {
      // if we are on our last cycle and the val we are looking for isn't here, we know the largest closest val is the one
      if (leftIdx === rightIdx) return middleIdx;
      leftIdx = middleIdx + 1;
    }

    // if val less than the middle num
    if (val < middleNum) {
      // if we are on our last cycle and the val we are looking for isn't here, we know the largest closest val is the one
      if (leftIdx === rightIdx && middleIdx - 1 > 0) return middleIdx - 1;
      rightIdx = middleIdx - 1;
    }
  }
  return null;
}
// looking for 13 or floor

//  L       m       R
// [8, 10, 10, 12, 19]

//             Lm   R
// [8, 10, 10, 12, 19]

//                 LmR
// [8, 10, 10, 12, 19]

findFloor([1, 2, 8, 10, 10, 12, 19], 9); // 8
findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0); // -1

findFloor([8, 10, 10, 12, 19], 7); // -1
findFloor([8, 10, 10, 12, 19], 13); // 12

module.exports = findFloor;
