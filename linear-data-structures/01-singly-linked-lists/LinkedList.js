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
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  
  traverseNode(data) {
    if (this.head === null) {
      return null;
    }
    
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode !== null && currentNode.data !== data) {
      prevNode = currentNode;
      currentNode = currentNode.getNextNode();
    }

    if (currentNode === null) {
      return null;
    }
    
    return {
      prevNode,
      currentNode,
    };
  }
  
  checkIfNodeExists(data) {
    return this.traverseNode(data) !== null ? true : false;
  }
  
  insertNode(prevNodeData, data) {
    if (this.head === null) {
      addToHead(data);
      return;
    }
    const newNode = new Node(data);
    // if we do .prevNode then we get node before
    // previous node we want to insert after
    if (this.checkIfNodeExists(prevNodeData)) {
      let prevNode = this.traverseNode(prevNodeData).currentNode;
      let nextNode = prevNode.getNextNode();
      // prev -> newNode -> nextNode
      prevNode.setNextNode(newNode);
      newNode.setNextNode(nextNode);
    } else {
      throw new Error('Node not found');
    }
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

module.exports = LinkedList;
