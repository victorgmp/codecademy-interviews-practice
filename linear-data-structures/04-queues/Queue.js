const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }

  enqueue(data) {
    this.queue.addToTail(data);
  }
}

module.exports = Queue;

const restaurantOrders = new Queue();
console.log(`restaurantOrders has ${restaurantOrders.size} nodes`)
