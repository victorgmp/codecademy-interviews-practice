const generateTestLinkedList = require('./generateTestLinkedList');

const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;
 
  // As long as the end of the list is not reached
  while (fast !== null) {
    // Move the fast pointer at least one step
    fast = fast.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};

const findMiddleAlternate = linkedList => {
  let count = 0;
  let fast = linkedList.head;
  let slow = linkedList.head;
 
  while(fast !== null) {
    fast = fast.getNextNode();
    if (count % 2 !== 0) {
      slow = slow.getNextNode();
    }
    count++;
  }
  return slow;
}

// Test your function yourself:
console.log(findMiddle(generateTestLinkedList(7)));

// Leave this so that we can test your code:
module.exports = findMiddle;