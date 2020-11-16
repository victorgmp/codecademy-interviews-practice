const LinkedList = require('./LinkedList');
const testLinkedList = require('./testLinkedList.js');
// Complete this function
const nthLastNode = (linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count ++;
  }
  return current;
};

// Test your function yourself:
console.log(nthLastNode(testLinkedList, 4));

// Leave this so that we can test your code:
module.exports = nthLastNode;
