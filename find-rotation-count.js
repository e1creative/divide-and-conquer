function findRotationCount(arr) {
  // rotate counter-clockwise
  // how many times has a number been popped off the end and placed in the front?
  // find out rotation index, compare to the length of the array

  const rotationIdx = findRotationIdx(arr);

  console.log("rotation idx: ", rotationIdx);
  console.log("----------------");

  return rotationIdx > 0 ? rotationIdx : 0;
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
      // if there are only 2 indexes left to check there was no rotation
      // because we are flooring the middle, the rightIdx will never equal the middleIdx
      if (leftIdx === middleIdx) return 0;

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

  return 0;
}
// L      m       R
// [7, 9, 11, 12, 15]

//            L   R
// [7, 9, 11, 12, 15]

findRotationCount([15, 18, 2, 3, 6, 12]); // 2
findRotationCount([7, 9, 11, 12, 5]); // 4
findRotationCount([7, 9, 11, 12, 15]); // 0

module.exports = findRotationCount;
