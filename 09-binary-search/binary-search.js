const binarySearch = (arr, target) => {
  // Add left and right variables below
  let left = 0;
  let right = arr.length;

  while (right > left) {
    // Add indexToCheck calculation below
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    if (checking === target) {
      return indexToCheck;
    }
    if (target > checking) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }

  return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 1;

console.log(binarySearch(searchable, target));

module.exports = { binarySearch };
