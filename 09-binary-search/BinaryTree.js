class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinaryTree(value, this.depth + 1);
      }
    } else if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinaryTree(value, this.depth + 1);
    }
  }

  getNodeByValue(value) {
    if (value === this.value) {
      return this;
    }
    if (this.left && value < this.value) {
      return this.left.getNodeByValue(value);
    }
    if (this.right) {
      return this.right.getNodeByValue(value);
    }
    return null;
  }

  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
    }
    console.log(`Depth=${this.depth}, Value=${this.value}`);
    if (this.right) {
      this.right.depthFirstTraversal();
    }
  }
}

module.exports = BinaryTree;
