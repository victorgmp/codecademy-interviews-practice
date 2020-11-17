const Node = require('./Node');
const LinkedList = require('./LinkedList');

const myList = new LinkedList();

myList.addToHead('Node 1');
myList.addToHead('Node 2');
myList.addToHead('Node 3');
myList.addToHead('Node 4');

// Add code below
const foundNode = myList.findNodeIteratively('Node 3');
console.log(foundNode);

const myNodeRecursive = myList.findNodeRecursively('Node 2');
console.log(myNodeRecursive);
