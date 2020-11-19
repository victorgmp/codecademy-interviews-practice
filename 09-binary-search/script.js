const BinaryTree = require('./BinaryTree');

// create a BinaryTree here
const randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(randomize());
  bt.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log('Depth First Traversal');
bt.depthFirstTraversal();

// insert values to the BinaryTree here
// bt.insert(50);
// bt.insert(125);
// bt.insert(75);
// bt.insert(25);

// console.log(bt);
// // console.log(bt.getNodeByValue(75));
// // console.log(bt.getNodeByValue(55));
// bt.depthFirstTraversal();
