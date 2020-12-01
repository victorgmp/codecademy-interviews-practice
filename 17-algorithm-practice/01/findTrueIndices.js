const findTrueIndices = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      result.push(i);
    }
  }

  return result;
};

const test = findTrueIndices([false, false]);
// should return [2, 3, 5, 7]
console.log(test);

// Leave this line for testing:
module.exports = findTrueIndices;

// const findTrueIndices = (arr) => {
//   const result = [];
//   arr.forEach((value, index) => {
//     if (value === true) {
//       result.push(index);
//     }
//   });

//   return result;
// };

// const test = findTrueIndices([true]);
// // should return [2, 3, 5, 7]
// console.log(test);

// // Leave this line for testing:
// module.exports = findTrueIndices;
