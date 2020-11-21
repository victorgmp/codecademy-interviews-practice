// import MinHeap class
const MinHeap = require('./MinHeap');

// instantiate a MinHeap class
const minHeap = new MinHeap();

// populate minHeap with descending numbers from 10001 to 1
console.log('Adding');
for (let i=10000; i >=1; i--) {
  minHeap.add(i);
}

// remove the minimum value from heap
console.log('Removing');
console.log(`Minimum value = ${minHeap.popMin()}`);

// console.log(minHeap);
// minHeap.add(42);
// console.log(minHeap);

// // helper function to return a random integer
// function randomize() { return Math.floor(Math.random() * 40); }

// // populate minHeap with random numbers
// for (let i = 0; i < 6; i++) {
//   minHeap.add(randomize());
// }

// // display the bubbled up numbers in the heap
// console.log('Bubbled Up', minHeap.heap);

// // remove the minimum value from heap
// for (let i = 0; i < 6; i++) {
//   minHeap.popMin();
//   console.log('Heapified', minHeap.heap);
// }
