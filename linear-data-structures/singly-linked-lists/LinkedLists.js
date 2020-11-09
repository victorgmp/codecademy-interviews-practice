const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head
    if (!tail) {
      this.head = new Node(data);
    } else {

      console.log(this.head.getNextNode);
      // while (this.head.getNextNode) {
      //   tail = this.head.getNextNode
      // }
    }
  }

}

module.exports = LinkedList;
