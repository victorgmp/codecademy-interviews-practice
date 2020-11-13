const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
    if (this.size < this.maxSize) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }

  peek() {
    if (!this.isEmpty()) {
      const { data } = this.stack.head;
      return data;
    }
    return null;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error('Stack is full');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    }
    return 'Stack is empty.';
  }
}

module.exports = Stack;
