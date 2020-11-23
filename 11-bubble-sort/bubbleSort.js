const swap = require('./swap');

const bubbleSort = (input) => {
  let swapCount = 0;
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        console.log(`Swapping pair ${input[i]}, ${input[i + 1]} in [${input}]`);
        swap(input, i, i + 1);
        swapCount += 1;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};

module.exports = bubbleSort;

// Reverse-sorted array:
bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
// Sorted array:
bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
