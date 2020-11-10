const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Create your .addToHead() method below:
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;

    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }

    this.head = newHead;

    if (!this.tail) this.tail = newHead;
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;    

    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }

    this.tail = newTail;

    if (!this.head) this.head = newTail;
  }

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) return;

    this.head = removedHead.getNextNode();

    if (this.head) this.head.setPreviousNode(null);

    if (removedHead === this.tail) this.removeTail();

    return removedHead.data;
  }
  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;