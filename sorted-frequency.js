function sortedFrequency(arr, searchNum) {
  const firstIdx = findFirstIdx(arr, searchNum);
  const lastIdx = findLastIdx(arr, searchNum);

  // console.log("first idx of " + searchNum + " is " + firstIdx);
  // console.log("last idx of " + searchNum + " is " + lastIdx);

  const searchNumFound = firstIdx !== -1 && lastIdx !== -1 ? true : false;

  return searchNumFound ? arr.slice(firstIdx, lastIdx + 1).length : -1;
}

function findFirstIdx(arr, searchNum) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middle = Math.floor((leftIdx + rightIdx) / 2);

    if (searchNum > arr[middle]) {
      // if our search term is greater than the current middle, move the search grid to the right
      // check if the number to the right is our search num, if it is, we found our first idx
      if (arr[middle + 1] === searchNum) return middle + 1;
      leftIdx = middle + 1;
    } else if (searchNum < arr[middle]) {
      // if the the search term is less than the current middle middle, move the search grid to the left
      rightIdx = middle - 1;
    } else if (searchNum === arr[middle]) {
      // if we found our batch of search nums check to the left
      // if the num on the left is less than, OR there is no left idx we have found our first idx
      if (middle - 1 < 0 || arr[middle - 1] < searchNum) {
        return middle;
      }
      // if the num is the same, move the search grid to the left
      rightIdx = middle - 1;
    }
  }
  return -1;
}

function findLastIdx(arr, searchNum) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middle = Math.floor((leftIdx + rightIdx) / 2);

    if (searchNum > arr[middle]) {
      // if our search term is greater than the current middle, move the search grid to the right
      leftIdx = middle + 1;
    } else if (searchNum < arr[middle]) {
      // if the the search term is less than the current middle middle, check the num to the left, if
      // it is our search term, we've found the last instance, if not, move the search grid to the left
      if (arr[middle - 1] === searchNum) return middle - 1;
      rightIdx = middle - 1;
    } else if (searchNum === arr[middle]) {
      // if we found our batch of search nums check to the left
      // if the num on the right is greater than, OR there is no right idx we have found our last idx
      if (middle + 1 > arr.length - 1 || arr[middle + 1] > searchNum) {
        return middle;
      }
      // if the num is the same, move the search grid to the right
      leftIdx = middle + 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
