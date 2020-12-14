const recursiveKnapsack = function(weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } else {
    const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - weights], weights, values, i - 1);
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
    return Math.max(includeItem, excludeItem);
  }
};

// Use this to test your function:
const weightCap = 50;
const weights = [31, 10, 20, 19, 4, 3, 6];
const val = [70, 20, 39, 37, 7, 5, 10];
console.log(recursiveKnapsack(weightCap, weights, val));
