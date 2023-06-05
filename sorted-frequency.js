function sortedFrequency(arr, searchNum) {
  const firstIdx = findFirstIdx(arr, searchNum);
  // const lastIdx = findLastIdx(arr, searchNum);

  // const searchhNumFound = firstIdx !== -1 && lastIdx !== -1 ? true : false;

  // return searchhNumFound ? arr.splice(firstIdx, lastIdx + 1).length : -1;

  console.log(firstIdx);
}

function findFirstIdx(arr, searchNum) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middle = Math.floor((leftIdx + rightIdx) / 2);

    if (searchNum === arr[middle]) {
      // if we found our batch of search nums check to the left and right
      //if the num on the left is less than we have found our first idx
      if (arr[middle - 1] < searchNum) return middle;
      // if the num is the same, move the search grid to the left
      rightIdx = middle - 1;
    } else if (searchNum > arr[middle]) {
      // if our search term is greater than the current middle, move the search grid to the right
      leftIdx = middle + 1;
    } else if (searchNum < arr[middle]) {
      // if the the search term is less than the current middle middle, move the search grid to the left
      rightIdx = middle - 1;
    }
  }
  return -1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1

module.exports = sortedFrequency;
