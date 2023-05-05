class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    // create a new node with the value passed to the function
    const newNode = new Node(value);

    // if there is no root property on the tree, set the root to be the newly created node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current: Node | null = this.root;
    // loop through the tree and find the correct position for the new node
    while (true) {
      // value is less than the value of the current node, go left
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
        // value is greater than the value of the current node, go right
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else {
        return undefined;
      }
    }
  }
  find(value: number) {
    if (this.root === null) return false;
    let current: Node | null = this.root;
    let found = false;
    // traverse the tree
    while (current && !found) {
      if (value < current.value) {
        // the root is now the left node
        current = current.left;
      } else if (value > current.value) {
        // the root is now the right node
        current = current.right;
      } else {
        found = true;
      }
      if (current === null) return false;
    }
  }
}

export default BinaryTree;
